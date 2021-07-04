import { Component } from 'solid-js';
import { Title } from 'solid-meta'
import { pencil } from '@amoutonbrady/solid-heroicons/solid';
import { Icon } from '@amoutonbrady/solid-heroicons';
import { PostDataProps } from '~/types'

const Post: Component<PostDataProps> = (props) => {
    return (
        <section className="page px-8 py-4">
            <Title>Post</Title>
            <h1 class="text-4xl font-semibold text-blue-900">
                <Icon class="w-10 h-10 inline-block text-blue-900" path={pencil} />
                Post
            </h1>
            <hr class="mt-1 mb-4 text-blue-300"/>
            <p>Click the links in the Navigation above to load different routes.</p>
            <p>{props.title}</p>
            <p>{props.body}</p>
        </section>
    );
}

export default Post;
