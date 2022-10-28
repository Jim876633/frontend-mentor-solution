import styled from "styled-components";

const FilterStyle = styled.div`
    width: 20rem;
    padding: 0 1rem;
    border-radius: 0.5rem;
    overflow: hidden;
    background: var(--color-element);
    box-shadow: 1px 1px 5px var(--color-shadow);
`;

export const FilterSelect = styled.select`
    width: 100%;
    border: none;
    padding: 1.5rem 0;
    text-transform: capitalize;
    font-size: 1.5rem;
    color: var(--color-text);
    background: var(--color-element);
    &:focus {
        outline: none;
    }
`;

export const FilterOption = styled.option``;

export default FilterStyle;
