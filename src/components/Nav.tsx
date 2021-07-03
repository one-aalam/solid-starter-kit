import { Component } from 'solid-js';
import { Icon } from '@amoutonbrady/solid-heroicons';
import { home, user, cog } from '@amoutonbrady/solid-heroicons/solid';


const Nav: Component = () => {
    return (
        <nav class="w-full py-3 bg-blue-50 shadow-md flex justify-center">
            <ul class="list-none flex gap-4 text-center">
                <li>
                    <a href="#home">
                        <Icon class="w-8 h-8 inline-block text-blue-500" path={home} />
                        Home
                    </a>
                </li>
                <li>
                    <a class="font-semibold" href="#profile">
                        <Icon class="w-8 h-8 inline-block text-blue-600" path={user} />
                        Profile
                    </a>
                </li>
                <li>
                    <a href="#settings">
                    <Icon class="w-8 h-8 inline-block text-blue-500" path={cog} />
                        Settings
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
