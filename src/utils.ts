import { createSignal, onCleanup } from 'solid-js';


export const createRouteHandler = () => {
    const [location, setLocation] = createSignal(window.location.hash.slice(1) || 'home'),
        locationHandler = () => setLocation(window.location.hash.slice(1));
    window.addEventListener('hashchange', locationHandler);
    onCleanup(() => window.removeEventListener('hashchange', locationHandler));
    return (match: string) => match === location();
}
