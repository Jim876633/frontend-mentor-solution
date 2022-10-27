import { useQuery } from "@tanstack/react-query";

// const nameURL = (name) =>
//     `https://restcountries.com/v3/name/${name}?fields=name,capital,region,population,flags,cca3`;

const allURL = `https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,cca3`;
const regionURL = (region) =>
    `https://restcountries.com/v3/region/${region}?fields=name,capital,region,population,flags,cca3`;

const idURL = (id) =>
    `https://restcountries.com/v3.1/alpha/${id}?fields=name,flags,population,region,subregion,capital,currencies,tld,languages,borders,status`;

const fetchCountries = async (value) => {
    let url;
    if (value === "all") {
        url = allURL;
    } else {
        url = regionURL(value);
    }
    const res = await fetch(url);
    return res.json();
};

const fetchCountryDetail = async (id) => {
    const res = await fetch(idURL(id));
    return res.json();
};

export const useGetCountries = (value) => {
    return useQuery(["countries", value], () => fetchCountries(value));
};

export const useGetCountryDetial = (id) => {
    return useQuery(["countryDetial", id], () => fetchCountryDetail(id));
};
