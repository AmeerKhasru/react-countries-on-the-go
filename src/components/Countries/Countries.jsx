import React, { use } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({ countriesPromises }) => {

    const countriesData = use(countriesPromises);
    const countries = countriesData.countries;

    return (
        <div>
            <h1>Countries: {countries.length}</h1>
           <div className='countries'>
             {
            countries.map(country => <Country key={country.ccn3.ccn3} country={country}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;