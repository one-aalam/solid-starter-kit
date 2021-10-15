import { Component, For, Switch, Match } from 'solid-js';
import { TransitionGroup } from 'solid-transition-group';
import IconExclamationCircle from '~icons/heroicons-solid/exclamation-circle'
import IconCheckCircle from '~icons/heroicons-solid/check-circle'
import IconInformationCircle from '~icons/heroicons-solid/information-circle'
import { alerts } from './alert.store';
import './alert.style.css';


const AlertList: Component = () => {

    return <div class="alert-list absolute w-screen top-6 flex flex-col place-items-center justify-center z-10" role="status" aria-live="polite">
         <TransitionGroup name="list-item">
            <For each={alerts()}>
                {(alert) =>
                        <div class={`shadow-md rounded px-3 py-2 text-shadow transition-all mt-2 ${alert.type === 'error' ? 'bg-red-500 text-white' :
                        alert.type === 'success' ? 'bg-green-300 text-gray-800' : 'bg-gray-100 text-gray-800'}`}
                        >
                        <Switch fallback={<IconInformationCircle class="w-7 h-7 inline-block text-blue-500"/>}>
                            <Match when={alert.type === 'success'}>
                                <IconCheckCircle class="w-7 h-7 inline-block text-green-500" />
                            </Match>
                            <Match when={alert.type === 'error'}>
                                <IconExclamationCircle class="w-7 h-7 inline-block text-red-200" />
                            </Match>
                        </Switch>
                        {alert.text}
                        </div>
                    }
            </For>
        </TransitionGroup>
    </div>;
};

export default AlertList;
