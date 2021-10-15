import { Component } from 'solid-js';
import Nav from '~/components/Nav';


const PrivateLayout: Component = (props) => (
    <div className="container">
        <Nav/>
        <section className="px-4 py-10 text-gray-700 dark:text-gray-200">
            <div class="lg:w-3/4 m-auto">
                {props.children}
            </div>
        </section>
    </div>
);

export default PrivateLayout;
