import { Component } from 'solid-js';
import AlertList from '~/lib/alert/AlertList'


const DefaultLayout: Component = (props) => (
    <section className="px-4 py-10 text-gray-700 dark:text-gray-200 relative">
        <AlertList/>
        <div class="lg:w-3/4 m-auto">
            {props.children}
        </div>
    </section>
);

export default DefaultLayout;
