import styled from "styled-components";

const StyleHeader = styled.header`
    height: 20rem;
    width: 100%;
    background: url("./images/bg-header-mobile.svg"), var(--cyan);
    background-repeat: no-repeat;
    background-size: cover;

    @media (min-width: ${({ theme }) => theme.desktop}) {
        height: 10rem;
        background: url("./images/bg-header-desktop.svg"), var(--cyan);
        background-repeat: no-repeat;
        background-size: cover;
    }
`;

export default StyleHeader;
