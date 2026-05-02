import { use } from "react";

const Countries = ({ fetchCountries }) => {
    const countriesData = use(fetchCountries)
    const countries = countriesData.countries
    return (
        <div>
            <h1>All countries are {countries.length}</h1>
        </div>
    );
};

export default Countries;