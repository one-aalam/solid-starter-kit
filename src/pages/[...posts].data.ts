import { DataFn } from 'solid-app-router';
import { PostListDataProps } from '~/types';
import { POSTS } from '~/data/posts';

const PostsData: DataFn<PostListDataProps> = (props) => {
  return {
    posts: POSTS
  };
}

export default PostsData;
