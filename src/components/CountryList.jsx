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

const MOST_PAGE_COUNT = 5;
const MOST_COUNTRIES_IN_PAGE = 8;

const filterName = (list, value) => {
    if (value === "") {
        return list;
    } else {
        return list.filter((item) => item.name.toLowerCase().includes(value));
    }
};
// page >= totalpages - showPageLength + 1
const getPageIndex = (totalpages, page, index, showPageLength) => {
    let pageIndex;
    if (totalpages <= MOST_PAGE_COUNT || page < MOST_PAGE_COUNT - 1) {
        pageIndex = index;
    } else if (
        page >= MOST_PAGE_COUNT - 1 &&
        page <= totalpages - MOST_PAGE_COUNT
    ) {
        pageIndex = page - 2 + index;
    } else {
        pageIndex = totalpages - showPageLength + index;
    }
    return pageIndex;
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
    const totalCountries = filterName(data, query.name);
    const countries = totalCountries.slice(
        page * MOST_COUNTRIES_IN_PAGE,
        page * MOST_COUNTRIES_IN_PAGE + 8
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
    const totalPages = Math.ceil(
        totalCountries.length / MOST_COUNTRIES_IN_PAGE
    );
    const showPagesCount =
        totalPages < MOST_PAGE_COUNT ? totalPages : MOST_PAGE_COUNT;
    const pageButtons = new Array(showPagesCount)
        .fill(undefined)
        .map((_, index) => {
            const pageIndex = getPageIndex(
                totalPages,
                page,
                index,
                showPagesCount
            );
            return (
                <PageButton
                    key={pageIndex}
                    data-page={pageIndex}
                    onClick={pageClickHandler}
                    active={page === pageIndex}
                    type="button"
                    title={`page${pageIndex + 1}`}
                >
                    {pageIndex + 1}
                </PageButton>
            );
        });

    return (
        <CountryListStyle>
            {countries.map((item) => (
                <Country key={item.id} {...item} />
            ))}
            <PageButtons>
                <PrevButton
                    type="button"
                    title="prev-page"
                    active={page === 0}
                    onClick={() => setPage((prev) => prev - 1)}
                >
                    <PrevIcon />
                </PrevButton>
                {pageButtons}
                <NextButton
                    type="button"
                    title="next-page"
                    active={page === totalPages - 1}
                    onClick={() => setPage((prev) => prev + 1)}
                >
                    <NextIcon />
                </NextButton>
            </PageButtons>
        </CountryListStyle>
    );
};

export default CountryList;
