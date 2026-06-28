import { useContext } from "react";
import Myself from "./Myself";
import { PropertyContext } from "./PropertyContext";


const Father = () => {
    const property = useContext(PropertyContext)
    console.log(property);
    return (
        <div className="father">
            <h2>
                Father
            </h2>
            <Myself></Myself>
        </div>
    );
};

export default Father;