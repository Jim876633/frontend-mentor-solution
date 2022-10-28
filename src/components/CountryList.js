import { useState, useEffect } from "react";
import Country from "./Country";
import LoadingPage from "../pages/LoadingPage";
import CountryListStyle, {
    EmptyPageStyle,
    PageButtons,
    PageButton,
    PrevButton,
    NextButton,
    PrevIcon,
    NextIcon,
} from "./CountryList.style";
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
    const [page, setPage] = useState(0);

    const pageClickHandler = (e) => {
        setPage(parseInt(e.target.dataset.page));
    };

    useEffect(() => {
        setPage(0);
    }, [query]);

    if (isLoading) {
        return <LoadingPage />;
    }
    const countries = filterName(data, query.name).slice(
        page * 8,
        page * 8 + 8
    );
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
    const pageButtons = new Array(5).fill(undefined).map((_, index) => {
        let pageIndex;
        if (page >= 4 && page < Math.ceil(data.length / 8) - 4) {
            pageIndex = page - 2 + index;
        } else if (page >= Math.ceil(data.length / 8) - 4) {
            pageIndex = Math.ceil(data.length / 8) - 5 + index;
        } else {
            pageIndex = index;
        }
        return (
            <PageButton
                key={pageIndex}
                data-page={pageIndex}
                onClick={pageClickHandler}
                active={page === pageIndex}
            >
                {pageIndex + 1}
            </PageButton>
        );
    });
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
            <PageButtons>
                <PrevButton
                    active={page === 0}
                    onClick={() => setPage((prev) => prev - 1)}
                >
                    <PrevIcon />
                </PrevButton>
                {pageButtons}
                <NextButton
                    active={page === Math.floor(data.length / 8)}
                    onClick={() => setPage((prev) => prev + 1)}
                >
                    <NextIcon />
                </NextButton>
            </PageButtons>
        </CountryListStyle>
    );
};

export default CountryList;
