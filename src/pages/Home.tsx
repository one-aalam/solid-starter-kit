import { Component } from 'solid-js';
import { Title } from 'solid-meta'
import DefaultLayout from '~/layouts/Default'
import IconHome from '~icons/heroicons-solid/home'

import { handleAlert } from '~/lib/alert'

const Home: Component = () => (
    <DefaultLayout>
        <Title>Home</Title>
        <h1 class="text-4xl font-semibold text-blue-900">
            <IconHome class="w-10 h-10 inline-block text-blue-900"/>
            Home
        </h1>
        <hr class="mt-1 mb-4 text-blue-300"/>
        <p>Click the links in the Navigation above to load different routes.</p>
        <div className="mt-5 flex gap-4">
            <button class="bg-blue-700 text-white px-2 py-1 rounded-md" onClick={() => handleAlert({ type: 'default' , text: 'Wohoo!'})}>Show Alert</button>
            <button class="bg-green-700 text-white px-2 py-1 rounded-md" onClick={() => handleAlert({ type: 'success' , text: 'Yesssss!'})}>Show Success</button>
            <button class="bg-red-700 text-white px-2 py-1 rounded-md" onClick={() => handleAlert({ type: 'error' , text: 'Ewwwww!'})}>Show Error</button>
        </div>
    </DefaultLayout>
);

export default Home;
