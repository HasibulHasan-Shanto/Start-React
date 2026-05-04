import { useState } from "react";

const Country = ({ country, handleCountVisit }) => {
    // console.log(country)
    const [visited, setVisited] = useState(false)
    const handleVisited = ()=>{
        console.log('visited')
        setVisited(!visited)
        handleCountVisit(country)
    }

    
    return (
        <div>
            <div className={`parent ${visited ? 'visited' : 'Not Visited'}`}>
                <img className="img" src={country.flags.flags.png} alt={country.flags.flags.alt} /><br />
                <strong>
                    Official Name: {country.name.common}
                </strong>
                <p>
                    Common Name: {country.name.official}
                </p>
                <p>
                    Capital Name: {country.capital.capital}
                </p>
                <p>
                    Region Name: {country.region.region}
                </p>
                <p>
                    Language Name: {country.languages.languages.eng}
                </p>
                <button onClick={handleVisited}>
                    {visited ? 'Visited' : 'Not Visited'}
                </button>
            </div>
        </div>
    );
};

export default Country;