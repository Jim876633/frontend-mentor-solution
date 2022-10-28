import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const SearchStyle = styled.div`
    display: flex;
    width: min(100%, 60rem);
    align-items: center;
    padding: 1rem 2rem;
    background: var(--color-element);
    border-radius: 0.5rem;
    box-shadow: 1px 1px 5px var(--color-shadow);
`;

export const SearchButton = styled.button`
    display: grid;
    place-content: center;
    width: 3rem;
    height: 100%;
`;

export const SearchInput = styled.input`
    width: 100%;
    padding: 0.5rem 1rem;
    border: none;
    color: var(--color-text);
    font-size: 1.5rem;
    background: var(--color-element);
    &:focus {
        outline: none;
    }
    &::placeholder {
        color: var(--color-input);
    }
`;

export const SearchIcon = styled(FaSearch)`
    color: var(--color-input);
`;

export default SearchStyle;
