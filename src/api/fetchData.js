import { useQuery } from "@tanstack/react-query";

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

const transformCountries = (data) =>
    data.map((item) => {
        return {
            id: item.cca3,
            name: item.name.common,
            image: item.flags[0] || item.flags.svg,
            population: item.population
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
            region: item.region,
            capital: item.capital[0],
        };
    });

const transformCountryDetail = (data) => {
    return {
        status: data.status,
        name: data.name.common,
        nativeName: Object.values(data.name.nativeName),
        image: data.flags.svg,
        population: data.population
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        region: data.region,
        subregion: data.subregion,
        capital: data.capital,
        tld: data.tld,
        currencies: Object.values(data.currencies),
        languages: Object.values(data.languages),
        borders: data.borders,
    };
};

export const useGetCountries = (value) => {
    return useQuery(["countries", value], () => fetchCountries(value), {
        select: transformCountries,
    });
};

export const useGetCountryDetial = (id) => {
    return useQuery(["countryDetial", id], () => fetchCountryDetail(id), {
        select: transformCountryDetail,
    });
};
