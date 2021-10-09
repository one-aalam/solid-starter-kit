import { Component } from 'solid-js';
import { Title } from 'solid-meta'
import { user } from '@amoutonbrady/solid-heroicons/solid';
import { Icon } from '@amoutonbrady/solid-heroicons';
import PrivateLayout from '~/layouts/Private';



const Profile: Component = () => (
    <PrivateLayout>
        <Title>Profile</Title>
        <h1 class="text-4xl font-semibold text-blue-900">
            <Icon class="w-10 h-10 inline-block text-blue-900" path={user} />
            Profile
        </h1>
        <hr class="mt-1 mb-4 text-blue-300"/>
    </PrivateLayout>
);

export default Profile;
