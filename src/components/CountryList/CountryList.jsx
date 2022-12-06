import { useEffect, useState } from "react";
import { useGetCountries } from "../../api/fetchData";
import { MOST_COUNTRIES_IN_PAGE } from "../../constants/pageConstants";
import { useDataContext } from "../../context/DataContextProvider";
import ErrorPage from "../../pages/ErrorPage";
import LoadingPage from "../../pages/LoadingPage";
import Country from "../Country/Country";
import Pagination from "../Pagination/Pagination";
import CountryListStyle, { EmptyPageStyle } from "./CountryList.style";

const CountryList = () => {
    const { query } = useDataContext();

    const { data, isLoading, isError } = useGetCountries(query.region);

    const [page, setPage] = useState(0);

    useEffect(() => {
        setPage(0);
    }, [query]);

    if (isLoading) {
        return <LoadingPage />;
    }

    if (isError || data.status === 404) {
        return (
            <ErrorPage
                message={[
                    "Fetching data failed... ",
                    "Please reflect to author.Thanks !",
                ]}
            />
        );
    }

    const filterCountries = (list) => {
        if (query.name === "") {
            return list;
        } else {
            return list.filter((item) =>
                item.name.toLowerCase().includes(query.name)
            );
        }
    };

    const totalCountries = filterCountries(data);

    const countries = totalCountries.slice(
        page * MOST_COUNTRIES_IN_PAGE,
        (page + 1) * MOST_COUNTRIES_IN_PAGE
    );

    const pageClickHandler = (e) => {
        setPage(parseInt(e.target.dataset.page));
    };
    const pageNextClickHandler = () => {
        setPage((prev) => prev + 1);
    };

    const pagePrevClickHandler = () => {
        setPage((prev) => prev - 1);
    };

    if (countries.length === 0) {
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
            {countries.map((item) => (
                <Country key={item.id} {...item} />
            ))}
            <Pagination
                page={page}
                totalItemCount={totalCountries.length}
                pageClickHandler={pageClickHandler}
                pagePrevClickHandler={pagePrevClickHandler}
                pageNextClickHandler={pageNextClickHandler}
            />
        </CountryListStyle>
    );
};

export default CountryList;
