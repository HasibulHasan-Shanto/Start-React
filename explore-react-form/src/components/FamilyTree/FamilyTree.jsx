
import Grandpa from "./Grandpa";
import { PropertyContext } from "./PropertyContext";

const FamilyTree = () => {
    const property = '1000cr'
    
    return (
        <div className="family">
            <h1>
                Family Tree
            </h1>
            <PropertyContext.Provider value={property}>
                <Grandpa></Grandpa>
            </PropertyContext.Provider>

        </div>
    );
};

export default FamilyTree ;