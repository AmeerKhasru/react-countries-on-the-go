import React from 'react';
import { useState } from 'react';
import './Country.css';

const Country = ({ country, handleVisitedCountries }) => {
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
            setVisited( visited ? false : true ); 
            handleVisitedCountries(country);
    }

    return (
        <div className={`country ${visited ? 'country-visited' : ''}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Name: {country.name.common}</h2>
            <p>Capital: {country.capital.capital}</p>
            <p>Population: {country.population.population}</p>
            <button onClick={handleVisited}> {visited ? 'Visited' : 'Not Visited'} </button>
        </div>
    );
};

export default Country;