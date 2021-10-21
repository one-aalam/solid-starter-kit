import '@fontsource/work-sans';
import { Component } from 'solid-js';
import { Route } from 'solid-app-router';
import { MetaProvider, Title, Link, Meta } from 'solid-meta';
import { AuthProvider } from '~/lib/auth'


const App: Component = () => {
    return (
        <AuthProvider>
            <MetaProvider>
                <>
                    <Title>Solid Starter Kit</Title>
                    <Link rel="canonical" href="http://solidjs.com/" />
                    <Meta name="example" content="whatever" />
                    <main>
                        <Route />
                    </main>
                </>
            </MetaProvider>
        </AuthProvider>
    );
};

export default App;
