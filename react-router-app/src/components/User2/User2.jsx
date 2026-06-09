import { use } from "react";


const User2 = ({ userPromise }) => {
    const user = use(userPromise)
    console.log('Loading suspense data', user);
    return (
        <div>
            <h1>hasibul hasan shanto</h1>
        </div>
    );
};

export default User2;