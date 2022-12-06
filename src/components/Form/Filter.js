import { useDataContext } from "../../context/DataContextProvider";
import FilterStyle, { FilterOption, FilterSelect } from "./Filter.style";

const Filter = () => {
    const { query, searchHandler } = useDataContext();

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
                defaultValue={query.region}
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
