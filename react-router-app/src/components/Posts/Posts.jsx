import { useLoaderData } from "react-router";
import Post from "../Post/Post";

const Posts = () => {
    const post = useLoaderData()
    return (
        <div>
            <h1>
                here is all post: {post.length}
            </h1>
            {
                post.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;