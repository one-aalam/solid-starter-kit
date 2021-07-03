import { Component } from 'solid-js';
import { Link, useRouter } from 'solid-app-router';
import { Icon } from '@amoutonbrady/solid-heroicons';
import { home, user, cog } from '@amoutonbrady/solid-heroicons/solid';


const Nav: Component = () => {
    const [router] = useRouter();

    return (
        <nav class="w-full py-3 bg-blue-50 shadow-md flex justify-center">
            <ul class="list-none flex gap-4 text-center">
                <li>
                    <Link href="/" class={`${router.location === '/' && 'font-semibold'}`}>
                        <Icon class="w-8 h-8 inline-block text-blue-500" path={home} />
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/profile" class={`${router.location === '/profile' && 'font-semibold'}`}>
                        <Icon class="w-8 h-8 inline-block text-blue-600" path={user} />
                        Profile
                    </Link>
                </li>
                <li>
                    <Link href="/settings" class={`${router.location === '/settings' && 'font-semibold'}`}>
                    <Icon class="w-8 h-8 inline-block text-blue-500" path={cog} />
                        Settings
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
