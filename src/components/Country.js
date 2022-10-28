import React from "react";
import CountryStyle, { CountryImage, CountryInfo } from "./Country.style";

const Country = ({ id, image, name, population, region, capital }) => {
    return (
        <CountryStyle to={id}>
            <CountryImage>
                <img src={image} alt={name} />
            </CountryImage>
            <CountryInfo>
                <h2>{name}</h2>
                <p>
                    <span>Population:</span>
                    {population}
                </p>
                <p>
                    <span>Region:</span>
                    {region}
                </p>
                <p>
                    <span>Captial:</span>
                    {capital}
                </p>
            </CountryInfo>
        </CountryStyle>
    );
};

export default Country;
