import { Component, createSignal, createEffect, Show } from 'solid-js';
import { useRouter } from 'solid-app-router';
import { User } from '@supabase/supabase-js'
import { auth } from '~/lib/supabase'
import Nav from '~/components/Nav';


const PrivateLayout: Component = (props) => {
    const [ user, setUser ] = createSignal<User>(null)
    const [ _, routerAction ] = useRouter();
    createEffect(() => { auth.user() ? setUser(auth.user()) : routerAction.replace('/auth') })

    return (
        <div className="container">
            <Show when={user()}>
                <Nav user={user()}/>
            </Show>
            <section className="px-4 py-10 text-gray-700 dark:text-gray-200">
                <div class="lg:w-3/4 m-auto">
                    <Show when={user()} fallback={<div>Please log-in to view this page</div>}>
                        {props.children}
                    </Show>
                </div>
            </section>
        </div>
    );
};

export default PrivateLayout;
