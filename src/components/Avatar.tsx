import { Component } from 'solid-js';

type AvatarProps = {
    loading: boolean
    src: string
    title: string
}

const Avatar: Component<AvatarProps> = (props) => {

    return <div class="avatar relative flex flex-col place-items-center">
            <div class="mb-8 w-36 h-36 mask mask-hexagon shadow-lg">
                <img src={props.src} alt={props.title} />
        </div>
        { props.loading && 'Updating..' }
    </div>;
};

export default Avatar;
