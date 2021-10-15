import { Component } from 'solid-js';
import { Title } from 'solid-meta';
import IconCog from '~icons/heroicons-solid/cog'

import PrivateLayout from '~/layouts/Private';


const Settings: Component = () => (
    <PrivateLayout>
        <Title>Settings</Title>
        <h1 class="text-4xl font-semibold text-blue-900">
            <IconCog class="w-10 h-10 inline-block text-blue-900" />
            Settings
        </h1>
        <hr class="mt-1 mb-4 text-blue-300"/>
        <p>All that configuration you never really ever want to look at.</p>
    </PrivateLayout>
);

export default Settings;
