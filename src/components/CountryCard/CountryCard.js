import React from 'react'
import './CountryCard.css';

function CountryCard(props) {
    return (
        <div className="country-card">
            <img src={props.flagSvg} alt="" className="country-card__flag"/>

            <div className="country-card__info">
                <h2 className="country-card__title">{props.title}</h2>
                <div className="country-card__block">
                    <span className="country-card__label">Population</span>
                    <p className="country-card__stat">{props.population}</p>
                </div>
                <div className="country-card__block">
                    <span className="country-card__label">Continent</span>
                    <p className="country-card__stat">{props.region}</p>
                </div>
                <div className="country-card__block">
                    {props.capital && <span className="country-card__label">Capital city</span>}
                    {props.capital && <p className="country-card__stat">{props.capital}</p>}
                </div>

            </div>
        </div>
    )
}

export default CountryCard;