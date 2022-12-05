import { useState } from "react";

export const usePageData = (data) => {
    const categories = data.map((item) => item.name);

    const [activeCategory, setActiveCategory] = useState(categories[0]);

    const activeData = data.find((item) => item.name === activeCategory);

    const dataChangeHandler = (category) => {
        setActiveCategory(category);
    };

    return { categories, activeCategory, activeData, dataChangeHandler };
};
