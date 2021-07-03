import { Component } from 'solid-js';
import { Title } from 'solid-meta'
import { home } from '@amoutonbrady/solid-heroicons/solid';
import { Icon } from '@amoutonbrady/solid-heroicons';

const Home: Component = () => (
    <div className="page px-8 py-4">
        <Title>Home</Title>
        <h1 class="text-4xl font-semibold text-blue-900">
            <Icon class="w-10 h-10 inline-block text-blue-900" path={home} />
            Home
        </h1>
        <hr class="mt-1 mb-4 text-blue-300"/>
        <p>Click the links in the Navigation above to load different routes.</p>
    </div>
);

export default Home;
