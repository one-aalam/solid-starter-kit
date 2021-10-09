import { Component, createSignal, createEffect, Show } from 'solid-js';
import { createStore } from 'solid-js/store';
import { Title } from 'solid-meta'
import { user } from '@amoutonbrady/solid-heroicons/solid';
import { Icon } from '@amoutonbrady/solid-heroicons';
import PrivateLayout from '~/layouts/Private';

type UserCredentials = {
    email: string
    password: string
}



const Profile: Component = () => {
    const [ isLoggedIn, setIsLoggedIn ] = createSignal<boolean>(true)
    const [fields, setFields] = createStore<UserCredentials>({'email': '', password: ''});
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(fields)
    };
    const handleChange = (e) => setFields(e.currentTarget.name, e.currentTarget.value)
    const toggleAuth = (e) => {
        e.preventDefault()
        setIsLoggedIn((isLoggedIn) => !isLoggedIn)
    }

    return (
    <PrivateLayout>
        <Title>Profile</Title>
            <h1 class="text-4xl font-semibold text-blue-900 w-full text-center mb-2">
                Sign In
            </h1>
            <div className="flex justify-center items-center">
                <form class="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100" onSubmit={handleSubmit}>
                    <div class="card-body">
                        <div className="form-controls">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" name="email" class="input input-bordered" required placeholder="email" onInput={handleChange} />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="password" name="password" class="input input-bordered" required placeholder="password"  onInput={handleChange} />
                                <label class="label h-8">
                                    <Show when={isLoggedIn()}>
                                        <a href="#" class="label-text-alt">Forgot password?</a>
                                    </Show>
                                </label>
                            </div>
                        </div>
                        <div class="form-control mt-6">
                            <button type="submit" class="btn btn-primary">{isLoggedIn() ? `Sign In` : `Sign Up`}</button>
                        </div>
                        <label class="label inline-block text-center w-full">
                            <a href="#" class="label-text-alt" onClick={toggleAuth}>{isLoggedIn() ? `Don't have an account? Sign Up` : `Already have an account? Sign In`}</a>
                        </label>
                    </div>
                </form>
            </div>
    </PrivateLayout>
)};

export default Profile;
