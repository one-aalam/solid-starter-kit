import { createSignal, onCleanup, Component } from 'solid-js';
import { Switch, Match } from 'solid-js/web';
import { Icon } from '@amoutonbrady/solid-heroicons';
import { arrowLeft } from '@amoutonbrady/solid-heroicons/solid';

function createRouteHandler() {
    const [location, setLocation] = createSignal(window.location.hash.slice(1) || 'home'),
        locationHandler = () => setLocation(window.location.hash.slice(1));
    window.addEventListener('hashchange', locationHandler);
    onCleanup(() => window.removeEventListener('hashchange', locationHandler));
    return (match: string) => match === location();
}

const Home: Component = () => (
    <>
        <h1>Welcome to this Simple Routing Example</h1>
        <p>Click the links in the Navigation above to load different routes.</p>
    </>
);

const Profile: Component = () => (
    <>
        <h1>Your Profile</h1>
        <p>This section could be about you.</p>
    </>
);

const Settings: Component = () => (
    <>
        <h1>Settings</h1>
        <p>All that configuration you never really ever want to look at.</p>
    </>
);

const Counter: Component = () => {
    const [count, setCount] = createSignal(0),
        timer = setInterval(() => setCount((c) => c + 1), 1000);
    onCleanup(() => clearInterval(timer));

    return <div>{count()}</div>;
};

const App: Component = () => {
    const matches = createRouteHandler();
    return (
        <>
            <ul>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#profile">Profile</a>
                </li>
                <li>
                    <a href="#settings">Settings</a>
                </li>
            </ul>

            <Icon class="w-8 h-8 text-red-500" path={arrowLeft} />
            <Switch>
                <Match when={matches('home')}>
                    <Home />
                </Match>
                <Match when={matches('profile')}>
                    <Profile />
                </Match>
                <Match when={matches('settings')}>
                    <Settings />
                </Match>
            </Switch>
            <Counter />
        </>
    );
};

export default App;
