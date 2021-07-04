import { DataFn } from 'solid-app-router';
import { PostDataProps } from '~/types'
import { usePost } from '~/lib/api';

const PostData: DataFn<PostDataProps> = (props) => {
    const post = usePost(props.params.id);
    return {
        get post() {
            return post();
        }
    };
}

export default PostData;
