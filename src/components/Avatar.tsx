import { Component } from 'solid-js';

type AvatarProps = {
    loading: boolean
    src: string
    title: string
    onChange: (event: any) => void
}

const Avatar: Component<AvatarProps> = (props) => {

    return <div class="avatar relative flex flex-col place-items-center">
            <label class="mb-8 w-36 h-36 mask mask-hexagon shadow-lg" for="single">
                <img src={props.src} alt={props.title} />
            </label>
            <input
                class="sr-only"
                type="file"
                id="single"
                accept="image/*"
                onChange={(event: any) => props.onChange(event)}
                disabled={props.loading}
            />
        {props.loading ? 'Updating..' : '(click to update)'}
    </div>;
};

export default Avatar;
