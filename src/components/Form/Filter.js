import FilterStyle, { FilterSelect, FilterOption } from "./Filter.style";
import { useDataContext } from "../context/DataContextProvider";

const Filter = () => {
    const { searchHandler } = useDataContext();

    const regions = ["africa", "americas", "asia", "europe", "oceania"];

    const selectHandler = (e) => {
        searchHandler("region", e.target.value);
    };

    return (
        <FilterStyle>
            <FilterSelect
                onChange={selectHandler}
                name="filter-select"
                title="filter-select"
            >
                <FilterOption value="all">--filter by region--</FilterOption>
                {regions.map((region) => (
                    <FilterOption key={region} value={region}>
                        {region}
                    </FilterOption>
                ))}
            </FilterSelect>
        </FilterStyle>
    );
};

export default Filter;
