import { useLoaderData } from "react-router";


const PostDetails = () => {
    const postD = useLoaderData()
    return (
        <div>
            <p>
                UserId: {postD.userId}
            </p>
            <p>
                Id: {postD.id}
            </p>
        </div>
    );
};

export default PostDetails;