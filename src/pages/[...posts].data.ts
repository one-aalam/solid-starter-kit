import { DataFn } from 'solid-app-router';
import { PostListDataProps } from '~/types';
import { usePosts } from '~/lib/api';

const PostsData: DataFn<PostListDataProps> = (props) => {
    const posts = usePosts();
    return {
        get posts() {
            return posts();
        }
    };
}

export default PostsData;
