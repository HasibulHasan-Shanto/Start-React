import { use, useState } from "react";
import Country from "../Country/Country";

const Countries = ({ fetchCountries }) => {
    const countriesData = use(fetchCountries)
    const countries = countriesData.countries
    const [visitedCountries, setVisitedCountries] = useState(0)
    const handleCountVisit = () => {
        console.log('visited country')
        const newVisit = visitedCountries + 1
        setVisitedCountries(newVisit)
    }
    return (
        <>
            <h1>All countries are {countries.length}</h1>
            <strong>Visited countries <span onClick={setVisitedCountries}>0</span></strong>
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