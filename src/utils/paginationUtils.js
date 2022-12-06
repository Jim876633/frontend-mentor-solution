import { MOST_PAGE_COUNT } from "../constants/pageConstants";

//totalpages：總共有幾頁
//page：現在頁數
//index：pageButton index
//showPageCount：顯示幾頁

const getPageIndex = (totalpages, page, index, showPageCount) => {
    let pageIndex;
    if (totalpages <= MOST_PAGE_COUNT || page < MOST_PAGE_COUNT - 1) {
        pageIndex = index;
    } else if (
        page >= MOST_PAGE_COUNT - 1 &&
        page <= totalpages - MOST_PAGE_COUNT
    ) {
        pageIndex = page - 2 + index;
    } else {
        // page >= totalpages - showPageCount + 1
        pageIndex = totalpages - showPageCount + index;
    }
    return pageIndex;
};

export default getPageIndex;
