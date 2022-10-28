import styled from "styled-components";
import { Link } from "react-router-dom";

const CountryStyle = styled(Link)`
    width: max(85%, 30rem);
    height: 35rem;
    flex-shrink: 0;
    border-radius: 1rem;
    background: var(--color-element);
    overflow: hidden;
    box-shadow: 1px 1px 5px var(--color-shadow);
    @media (min-width: 615px) {
        width: 25rem;
    }
`;

export const CountryImage = styled.div`
    height: 50%;
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`;

export const CountryInfo = styled.div`
    height: 50%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h2 {
        font-size: 2rem;
        margin: 1rem 0;
    }
    span {
        font-weight: 600;
        margin-right: 0.5rem;
    }
`;

export default CountryStyle;
