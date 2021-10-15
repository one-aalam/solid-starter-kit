import { Component } from 'solid-js';
import { Title } from 'solid-meta'
import IconUser from '~icons/heroicons-solid/user'

import PrivateLayout from '~/layouts/Private';



const Profile: Component = () => (
    <PrivateLayout>
        <Title>Profile</Title>
        <h1 class="text-4xl font-semibold text-blue-900">
            <IconUser class="w-10 h-10 inline-block text-blue-900"/>
            Profile
        </h1>
        <hr class="mt-1 mb-4 text-blue-300"/>
    </PrivateLayout>
);

export default Profile;
