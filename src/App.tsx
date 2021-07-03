import { createSignal, onCleanup, Component } from 'solid-js';
import { Switch, Match } from 'solid-js/web';
import { MetaProvider, Title, Link, Meta } from 'solid-meta';

import Nav from '~/components/Nav'

import HomePage from '~/pages/Home';
import ProfilePage from '~/pages/Profile';
import SettingsPage from '~/pages/Settings';


function createRouteHandler() {
    const [location, setLocation] = createSignal(window.location.hash.slice(1) || 'home'),
        locationHandler = () => setLocation(window.location.hash.slice(1));
    window.addEventListener('hashchange', locationHandler);
    onCleanup(() => window.removeEventListener('hashchange', locationHandler));
    return (match: string) => match === location();
}


const App: Component = () => {
    const matches = createRouteHandler();
    return (
        <MetaProvider>
            <>
                <Title>Title of page</Title>
                <Link rel="canonical" href="http://solidjs.com/" />
                <Meta name="example" content="whatever" />
                <Nav />
                <Switch>
                    <Match when={matches('home')}>
                        <HomePage />
                    </Match>
                    <Match when={matches('profile')}>
                        <ProfilePage />
                    </Match>
                    <Match when={matches('settings')}>
                        <SettingsPage />
                    </Match>
                </Switch>
            </>
        </MetaProvider>
    );
};

export default App;
