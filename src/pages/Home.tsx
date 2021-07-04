import { Component } from 'solid-js';
import { Title } from 'solid-meta'
import DefaultLayout from '~/layouts/Default'
import { home } from '@amoutonbrady/solid-heroicons/solid';
import { Icon } from '@amoutonbrady/solid-heroicons';

const Home: Component = () => (
    <DefaultLayout>
        <Title>Home</Title>
        <h1 class="text-4xl font-semibold text-blue-900">
            <Icon class="w-10 h-10 inline-block text-blue-900" path={home} />
            Home
        </h1>
        <hr class="mt-1 mb-4 text-blue-300"/>
        <p>Click the links in the Navigation above to load different routes.</p>
    </DefaultLayout>
);

export default Home;
