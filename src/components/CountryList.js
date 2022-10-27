import Country from "./Country";
import LoadingPage from "../pages/LoadingPage";
import CountryListStyle, { EmptyPageStyle } from "./CountryList.style";
import { useGetCountries } from "./api/fetchData";
import { useDataContext } from "./context/DataContextProvider";

const filterName = (list, value) => {
    if (value === "") {
        return list;
    } else {
        return list.filter((item) =>
            item.name.common.toLowerCase().includes(value)
        );
    }
};

const CountryList = () => {
    const { query } = useDataContext();
    const { data, isLoading, isError } = useGetCountries(query.region);

    if (isLoading) {
        return <LoadingPage />;
    }
    const countries = filterName(data, query.name).slice(0, 8);
    if (isError || data.status === 404 || countries.length === 0) {
        return (
            <EmptyPageStyle>
                <h2>
                    Can't find any countries. Please search correct country or
                    capital.
                </h2>
            </EmptyPageStyle>
        );
    }

    return (
        <CountryListStyle>
            {countries.map((item) => {
                const formatItem = {
                    id: item.cca3,
                    name: item.name.common,
                    image: item.flags[0] || item.flags.svg,
                    population: item.population
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                    region: item.region,
                    capital: item.capital[0],
                };
                return <Country key={formatItem.id} {...formatItem} />;
            })}
        </CountryListStyle>
    );
};

export default CountryList;
