import { Link } from "react-router";


const Post = ({ post }) => {

    return (
        <div className="border border-blue-500 p-10 rounded-md mt-10 w-150">
            <h1 className="text-xl font-bold">
                Title: {post.title}
            </h1>
            <p>
                Body: {post.body}
            </p>
            <Link to={`/post/${post.id}`}>Show post</Link>
        </div>
    );
};

export default Post;