import { useDataContext } from "../context/DataContextProvider";
import SearchStyle, {
    SearchIcon,
    SearchInput,
    SearchButton,
} from "./Search.style";

const Search = () => {
    const { searchHandler } = useDataContext();
    const inputHandler = (e) => {
        searchHandler("name", e.target.value);
    };

    return (
        <SearchStyle>
            <SearchButton>
                <SearchIcon />
            </SearchButton>
            <SearchInput
                placeholder="Search for a country or capitial..."
                type="text"
                pattern="[a-zA-Z]"
                onChange={inputHandler}
            />
        </SearchStyle>
    );
};

export default Search;
