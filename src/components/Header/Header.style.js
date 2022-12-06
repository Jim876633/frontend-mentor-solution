import styled from "styled-components";

const HeaderStyle = styled.header`
    display: flex;
    align-items: center;
    padding: 0 5vw;
    height: 8rem;
    background: var(--color-element);
    box-shadow: 0 1px 3px var(--color-shadow);
`;

export const HeaderTitle = styled.h1`
    margin-right: auto;
`;

export const ModeButton = styled.button`
    display: flex;
    align-items: center;
    color: var(--color-text);
`;

export const ModeIcon = styled.span`
    margin-right: 1rem;
`;

export default HeaderStyle;
