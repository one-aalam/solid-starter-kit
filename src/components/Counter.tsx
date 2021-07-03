import { Component, createSignal, onCleanup } from 'solid-js';


const Counter: Component = () => {
    const [count, setCount] = createSignal(0),
        timer = setInterval(() => setCount((c) => c + 1), 1000);
    onCleanup(() => clearInterval(timer));

    return <div>{count()}</div>;
};

export default Counter;
