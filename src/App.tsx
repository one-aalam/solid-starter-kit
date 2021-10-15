import '@fontsource/work-sans';
import { Component } from 'solid-js';
import { Route } from 'solid-app-router';
import { MetaProvider, Title, Link, Meta } from 'solid-meta';

import Nav from '~/components/Nav';

const App: Component = () => {
    return (
        <MetaProvider>
            <>
                <Title>Solid Starter Kit</Title>
                <Link rel="canonical" href="http://solidjs.com/" />
                <Meta name="example" content="whatever" />
                <Nav />
                <main>
                    <Route />
                </main>
            </>
        </MetaProvider>
    );
};

export default App;
