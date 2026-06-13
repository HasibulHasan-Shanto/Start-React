import { Link } from "react-router";

const User = ({ user }) => {
    // console.log(user);
    const { id, name, email, phone } = user
    return (
        <div className="border border-gray-300 w-64 mb-2 rounded-md p-5  mx-auto">
            <h1>
                {name}
            </h1>
            <p>
                {email}
            </p>
            <p>
                <small>
                    {phone}
                </small>
            </p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;