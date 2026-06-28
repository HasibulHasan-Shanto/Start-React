import { useContext } from "react";
import { PropertyContext } from "./PropertyContext";


const Myself = () => {
    const property = useContext(PropertyContext)
    return (
        <div>
            <h2>
                Myself
            </h2>
            <p>
                I Got: {property}
            </p>
        </div>
    );
};

export default Myself;