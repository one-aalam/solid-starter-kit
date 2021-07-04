import { Component, For, Switch, Match } from 'solid-js';
import { Icon } from '@amoutonbrady/solid-heroicons';
import { exclamationCircle, checkCircle, informationCircle } from '@amoutonbrady/solid-heroicons/solid';
import { alerts } from './alert.store';


const AlertList: Component = () => {

    return <div class="alert-list absolute w-screen top-6 flex flex-col place-items-center justify-center z-10" role="status" aria-live="polite">
       <For each={alerts()}>
           {(alert) => <div class={`shadow-md rounded px-3 py-2 text-shadow transition-all mt-2 ${alert.type === 'error' ? 'bg-red-500 text-white' :
            alert.type === 'success' ? 'bg-green-300 text-gray-800' : 'bg-gray-100 text-gray-800'}`}
            >
            <Switch fallback={<Icon class="w-7 h-7 inline-block text-blue-500" path={informationCircle} />}>
                <Match when={alert.type === 'success'}>
                    <Icon class="w-7 h-7 inline-block text-green-500" path={checkCircle} />
                </Match>
                <Match when={alert.type === 'error'}>
                    <Icon class="w-7 h-7 inline-block text-red-200" path={exclamationCircle} />
                </Match>
            </Switch>
            {alert.text}
            </div>
            }
        </For>
    </div>;
};

export default AlertList;
