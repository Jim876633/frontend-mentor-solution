import styled from "styled-components";

const HomePageStyle = styled.main`
    padding: 2rem;
    min-height: 90vh;
`;

export const FormStyle = styled.div`
    display: grid;
    gap: 2rem;
    padding: 2rem 0;
    @media (min-width: 615px) {
        display: flex;
        align-items: center;
        padding: 2rem 6vw;
        justify-content: space-between;
    }
`;

export default HomePageStyle;
