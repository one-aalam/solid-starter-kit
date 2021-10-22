import { Component, createSignal, onMount, Show } from 'solid-js';
import { Portal } from 'solid-js/web'
import { createStore } from 'solid-js/store'
import { Title } from 'solid-meta'
import IconUser from '~icons/heroicons-solid/user'
import PrivateLayout from '~/layouts/Private'
import { getCurrUserProfile, ProfileAttrs, getAvatar, updCurrUserAvatar, updCurrUserProfile } from '~/lib/profile'
import { handleAlert } from '~/lib/alert'
import Avatar from '~/components/Avatar'

const PROFILE_INITIAL_STATE: ProfileAttrs = {
    username: '',
    website: '',
    avatar_url: ''
}

const Profile: Component = () => {
    const [ loading, setLoading ] = createSignal<boolean>(false)
    const [ isProfileUpdating, setIsProfileUpdating ] = createSignal<boolean>(false)
    const [ avatarLoading, setAvatarLoading ] = createSignal<boolean>(loading())
    const [ isModalOpened, setIsModalOpened ] = createSignal<boolean>(false)
    // profile retreival
    const [ profile, setProfile ] = createStore<ProfileAttrs>(PROFILE_INITIAL_STATE)
    // profile updates
    const [ fields, setFields ] = createStore<Omit<ProfileAttrs, 'avatar_url'>>({ username: '', website: ''});
    const handleSubmit = (e) => {
        e.preventDefault()
        updProfile(fields)
    };
    const handleChange = (e) => setFields(e.currentTarget.name, e.currentTarget.value)

    async function getProfile() {
        try {
            setLoading(true)
            let { data: { username, website, avatar_url } , error } = await getCurrUserProfile()
            if (error) {
                handleAlert({ type: 'default', text: 'First login? You wanna update your profile details? 🙂' })
            }
            avatar_url = await getAvatar(avatar_url)
            setProfile({ username, website, avatar_url })
            setFields({ username, website })
        } catch (error) {
            if(error instanceof TypeError) {
                handleAlert({ type: 'default', text: 'First login? You wanna update your profile details? 🙂' })
            } else if(error.message === 'The resource was not found') {
                handleAlert({ type: 'default', text: 'You know? You can click on the randomly generated avatar to update your profile picture.' })
            } else {
                handleAlert({ type: 'error', text: error.message })
            }
        } finally {
            setLoading(false)
        }
    }

    async function updProfile({ username, website }: Omit<ProfileAttrs, 'avatar_url'>) {
        try {
            setIsProfileUpdating(true)
            console.log(username, website)
            let { data: [ updates ], error: updateError } = await updCurrUserProfile({ username, website })
            if (updateError) {
                throw updateError
            }
            setProfile({ username: updates.username, website: updates.website })
        } catch (error) {
            handleAlert({ type: 'error', text: error.message })
        } finally {
            setIsModalOpened(false)
            setIsProfileUpdating(false)
        }
    }

    async function updAvatar(event: any) {
        const { target } = event
        try {
            if (!target!.files || target.files.length == 0) {
                throw 'You must select an image to upload.'
            }
            setAvatarLoading(true)
            let { data: [ { avatar_url } ], error: updateError } = await updCurrUserAvatar(target.files[0])
            if (updateError) {
                throw updateError
            }
            avatar_url = await getAvatar(avatar_url)
            setProfile({ avatar_url })
        } catch (error) {
            handleAlert({ type: 'error', text: error.message })
        } finally {
            setAvatarLoading(false)
        }
    }

    onMount(getProfile)

    return (
        <PrivateLayout>
            <Title>Profile</Title>
            <h1 class="text-4xl font-semibold text-blue-900">
                <IconUser class="w-10 h-10 inline-block text-blue-900"/>
                Profile
            </h1>
            <hr class="mt-1 mb-4 text-blue-300"/>
            <div class="p-2 flex flex-col place-items-center">
                { loading() && <em>loading profile details...</em>}
                <div class="mt-2">
                        <Avatar src={profile?.avatar_url} title={profile?.username} loading={avatarLoading()} onChange={updAvatar} />
                </div>
                <Show when={!loading()}>
                    <div class="profile-detail my-4 flex flex-col place-items-center" onClick={() => setIsModalOpened(true)}>
                        <h2 class="text-4xl mb-1">Howdie, { profile?.username }!</h2>
                        <span class="inline-block px-2 py-1 bg-gray-400 text-white rounded-full">{ profile?.website }</span>
                        <div class="text-gray-500 text-sm my-1">(update profile)</div>
                    </div>
                </Show>
            </div>
            {
                isModalOpened() &&
                <Portal>
                    <div class="modal modal-open grid place-content-center">
                        <div class="modal-box w-full">
                            <form class="" onSubmit={handleSubmit}>
                                <h1 class="text-2xl font-semibold text-blue-900">
                                    <IconUser class="w-8 h-8 inline-block text-blue-900"/>
                                    { isProfileUpdating() ? `Updating Profile` : `Update Profile` }
                                </h1>
                                <hr class="my-4 text-purple-200"/>
                                <div className="form-controls">
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Username</span>
                                        </label>
                                        <input type="text" name="username" class="input input-bordered" required placeholder="Your username" minlength={3} value={fields.username} onInput={handleChange} />
                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Website</span>
                                        </label>
                                        <input type="text" name="website" class="input input-bordered" placeholder="Your website" minlength={6} value={fields.website}  onInput={handleChange} />
                                    </div>
                                </div>
                                <div class="modal-action">
                                    <button type="submit" class="btn btn-primary" disabled={isProfileUpdating()}>Update Profile</button>
                                    <button class="btn" onClick={() => setIsModalOpened(false)}>Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Portal>
            }
        </PrivateLayout>
    )
};

export default Profile;
