import { use, useState } from "react";
import Country from "../Country/Country";

const Countries = ({ fetchCountries }) => {
    const countriesData = use(fetchCountries)
    const countries = countriesData.countries
    const [visitedCountries, setVisitedCountries] = useState([])
    const handleCountVisit = (country) => {
        console.log('visited country', country)
        const newVisit = [... visitedCountries, country]
        setVisitedCountries(newVisit)
    }
    return (
        <>
            <h1>All countries are {countries.length}</h1>
            <strong>Visited countries  {visitedCountries.length}</strong>
            <div className="countries">
                {
                    countries.map(country =><Country 
                        country={country}
                        handleCountVisit={handleCountVisit}
                        ></Country>)
                }
            </div>
        </>
    );
};

export default Countries;