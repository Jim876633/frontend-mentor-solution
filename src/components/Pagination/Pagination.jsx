import {
    MOST_COUNTRIES_IN_PAGE,
    MOST_PAGE_COUNT,
} from "../../constants/pageConstants";
import getPageIndex from "../../utils/paginationUtils";
import {
    NextButton,
    NextIcon,
    PageButton,
    PageButtons,
    PrevButton,
    PrevIcon,
} from "./Pagination.style";

const Pagination = ({
    page,
    totalItemCount,
    pageClickHandler,
    pagePrevClickHandler,
    pageNextClickHandler,
}) => {
    const totalPages = Math.ceil(totalItemCount / MOST_COUNTRIES_IN_PAGE);

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
        <PageButtons>
            <PrevButton
                type="button"
                title="prev-page"
                active={page === 0}
                onClick={pagePrevClickHandler}
            >
                <PrevIcon />
            </PrevButton>
            {pageButtons}
            <NextButton
                type="button"
                title="next-page"
                active={page === totalPages - 1}
                onClick={pageNextClickHandler}
            >
                <NextIcon />
            </NextButton>
        </PageButtons>
    );
};

export default Pagination;
