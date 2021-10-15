import { Component, For } from 'solid-js';
import { Link } from "solid-app-router";
import { Title } from 'solid-meta'
import IconPencil from '~icons/heroicons-solid/pencil'

import { PostListDataProps } from '~/types'

const Posts: Component<PostListDataProps> = (props) => (
    <section className="page px-8 py-4">
        <Title>Posts</Title>
        <h1 class="text-4xl font-semibold text-blue-900">
            <IconPencil class="w-10 h-10 inline-block text-blue-900" />
            Posts
        </h1>
        <hr class="mt-1 mb-4 text-blue-300"/>
        <p>Click the links in the Navigation above to load different routes.</p>
        <For each={props?.posts}>{(post) => <div><Link href={`/posts/${post?.id}`} title={post?.title}>{post?.title}</Link></div>}</For>
    </section>
);

export default Posts;
