import styled from "styled-components";

const StyleButton = styled.button`
    color: var(--white);
    background: var(--cyan);
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
`;

export const FilterButton = styled(StyleButton)`
    font-size: 3rem;
    padding: 0 0.8rem;
    &:hover {
        background: var(--dark);
    }
`;

export const TagButton = styled(StyleButton)`
    font-weight: 700;
    border-radius: 0.3rem;
    color: var(--cyan);
    background: var(--light_cyan);
    &:hover {
        color: var(--white);
        background: var(--cyan);
    }
`;

export const ClearButton = styled(StyleButton)`
    margin-left: 1rem;
    background: none;
    color: var(--dark_cyan);
    font-weight: 700;
    padding: 0;
    &:hover {
        color: var(--cyan);
        border-bottom: 1px solid var(--cyan);
    }
`;

export default StyleButton;
