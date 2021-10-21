import { Component, Show } from 'solid-js';
import { useAuth } from '~/lib/auth'
import Nav from '~/components/Nav';

const PrivateLayout: Component = (props) => {
    const [{ user }] = useAuth()
    return (
        <div className="">
            <Show when={user}>
                <Nav/>
            </Show>
            <section className="px-4 py-10 text-gray-700 dark:text-gray-200">
                <div class="lg:w-3/4 m-auto">
                    <Show when={user} fallback={<div>Please log-in to view this page</div>}>
                        {props.children}
                    </Show>
                </div>
            </section>
        </div>
    )
};


export default PrivateLayout;
