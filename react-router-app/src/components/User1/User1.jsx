import { useLoaderData } from "react-router";
import User from "../User/User";

const User1 = () => {
    const users = useLoaderData()
    // console.log('this is user loader data', users);
    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default User1;