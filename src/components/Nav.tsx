import { Component } from 'solid-js';
import { Link, useRouter } from 'solid-app-router';
import IconHome from '~icons/heroicons-solid/home'
import IconUser from '~icons/heroicons-solid/user'
import IconCog from '~icons/heroicons-solid/cog'
import { useAuth } from '~/lib/auth'


const Nav: Component = () => {
    const [ router ] = useRouter();
    const [{ user }, { signOut }] = useAuth()

    return (
        <nav class="w-full py-3 bg-blue-50 shadow-md flex justify-center">
            <ul class="list-none flex gap-4 text-center">
                <li>
                    <Link href="/" class={`${router.location === '/' && 'font-semibold'}`}>
                        <IconHome class="inline-block w-7 h-7 text-blue-600"/>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/profile" class={`${router.location === '/profile' && 'font-semibold'}`}>
                        <IconUser class="w-8 h-8 inline-block text-blue-600" />
                        Profile
                    </Link>
                </li>
                <li>
                    <Link href="/settings" class={`${router.location === '/settings' && 'font-semibold'}`}>
                    <IconCog class="w-8 h-8 inline-block text-blue-500" />
                        Settings
                    </Link>
                </li>
                <li>
                    {user && user.email} { user && <button onClick={signOut}>(Sign Out)</button> }
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
