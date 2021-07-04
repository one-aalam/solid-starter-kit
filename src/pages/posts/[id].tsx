import { Component } from 'solid-js';
import { Title } from 'solid-meta'
import { PostDataProps } from '~/types'

const Post: Component<{ post: PostDataProps }> = (props) => {
    return (
        <section className="page px-8 py-4">
            <Title>Post</Title>
            <h1 class="text-4xl font-semibold text-blue-900">
                {props?.post?.title}
            </h1>
            <hr class="mt-1 mb-4 text-blue-300"/>
            <p>Click the links in the Navigation above to load different routes.</p>
            <p>{props?.post?.body}</p>
        </section>
    );
}

export default Post;
