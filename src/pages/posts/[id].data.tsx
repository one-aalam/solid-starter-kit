import { DataFn } from 'solid-app-router';
import { PostDataProps } from '~/types'
import { POSTS } from '~/data/posts';


const PostData: DataFn<PostDataProps> = (props) => {
  return POSTS.find(post => post.id == props.params.id);
}

export default PostData;
