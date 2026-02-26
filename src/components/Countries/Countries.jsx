import React, { use } from 'react';
import Country from '../Country/Country';
import { useState } from 'react';
import './Countries.css';

const Countries = ({ countriesPromises }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    
    const handleVisitedCountries = (country) => {
        const newVisitedCountries = visitedCountries.includes(country) ? visitedCountries.filter(c => c !== country) : [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const countriesData = use(countriesPromises);
    const countries = countriesData.countries;

    return (
        <div>
            <h1>Countries: {countries.length}</h1>
            <h2>Visited Countries: {visitedCountries.length}</h2>
           <div className='countries'>
             {
            countries.map(country => <Country key={country.ccn3.ccn3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;