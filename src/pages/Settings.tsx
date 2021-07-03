import { Component } from 'solid-js';
import { Title } from 'solid-meta'
import { cog } from '@amoutonbrady/solid-heroicons/solid';
import { Icon } from '@amoutonbrady/solid-heroicons';


const Settings: Component = () => (
    <div className="page px-8 py-4">
        <Title>Settings</Title>
        <h1 class="text-4xl font-semibold text-blue-900">
            <Icon class="w-10 h-10 inline-block text-blue-900" path={cog} />
            Settings
        </h1>
        <hr class="mt-1 mb-4 text-blue-300"/>
        <p>All that configuration you never really ever want to look at.</p>
    </div>
);

export default Settings;
