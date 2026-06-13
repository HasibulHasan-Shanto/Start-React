import { useLoaderData } from "react-router";


const UserDetails = () => {
    const userD = useLoaderData()
    console.log(userD);
    const { name, email, phone, website } = userD
    return (
        <div className="border border-gray-300 w-64 mb-2 rounded-md p-5 text-center  mx-auto">
            <h1 className="text-2xl text-center font-bold">
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
            <strong className="text-red-500">
                {website}
            </strong>
        </div>
    );
};

export default UserDetails;