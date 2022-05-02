import React from 'react'
import CountryCard from '../CountryCard/CountryCard'
import './CountryGrid.css';

function CountryGrid(props) {

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const countryCards = props.countryList.map(country => {
        return (
            <CountryCard
                key={country.cca3}
                title={country.name.common}
                flagSvg={country.flags.svg}
                population={numberWithCommas(country.population)}
                capital={country.capital ? country.capital[0] : null}
                region={country.region}/>
        )
    })

    return(
        <div className="country-grid">
            {countryCards}
        </div>
    )

}

export default CountryGrid;