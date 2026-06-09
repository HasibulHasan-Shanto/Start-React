import { useLoaderData } from "react-router";

const User1 = () => {
    const users = useLoaderData()
    console.log('this is user loader data', users);
    return (
        <div>
            <h1>this users 1</h1>
        </div>
    );
};

export default User1;