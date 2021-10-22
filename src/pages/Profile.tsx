import { Component, createSignal, onMount, Show } from 'solid-js';
import { createStore } from 'solid-js/store'
import { Title } from 'solid-meta'
import IconUser from '~icons/heroicons-solid/user'
import PrivateLayout from '~/layouts/Private'
import { getCurrUserProfile, ProfileAttrs, getAvatar } from '~/lib/profile'
import { handleAlert } from '~/lib/alert'
import Avatar from '~/components/Avatar'

const PROFILE_INITIAL_STATE: ProfileAttrs = {
    username: '',
    website: '',
    avatar_url: ''
}

const Profile: Component = () => {
    const [ loading, setLoading ] = createSignal<boolean>(false)
    const [ profile, setProfile ] = createStore<ProfileAttrs>(PROFILE_INITIAL_STATE)

    async function getProfile() {
        try {
            setLoading(true)
            let { data: { username, website, avatar_url } , error } = await getCurrUserProfile()
            if (error) {
                handleAlert({ type: 'default', text: 'First login? You wanna update your profile details? 🙂' })
            }
            avatar_url = await getAvatar(avatar_url)
            setProfile({ ...{ username, website, avatar_url } })
        } catch (error) {
            if(error instanceof TypeError) {
                handleAlert({ type: 'default', text: 'First login? You wanna update your profile details? 🙂' })
            } else if(error.message === 'The resource was not found') {
                handleAlert({ type: 'default', text: 'You know? You can update your profile picture in Supabase and it will appear here' })
            } else {
                handleAlert({ type: 'error', text: error.message })
            }
        } finally {
            setLoading(false)
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
                        <Avatar src={profile?.avatar_url} title={profile?.username} loading={loading()} />
                </div>
                <Show when={!loading()}>
                    <div class="profile-detail my-4 flex flex-col place-items-center">
                        <h2 class="text-4xl mb-1">Howdie, { profile?.username }!</h2>
                        <span class="inline-block px-2 py-1 bg-gray-400 text-white rounded-full">{ profile?.website }</span>
                    </div>
                </Show>
            </div>
        </PrivateLayout>
    )
};

export default Profile;
