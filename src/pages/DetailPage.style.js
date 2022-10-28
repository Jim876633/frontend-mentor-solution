import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const DetailPageStyle = styled.main`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 4rem;
    font-size: 1.6rem;
    color: var(--color-text);
    @media (min-width: 786px) {
        flex-direction: row;
        align-items: center;
        gap: 5rem;
        height: 90vh;
    }
`;

export const BackButton = styled(Link)`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 2rem;
    margin: 2rem 0;
    border-radius: 0.5rem;
    background: var(--color-element);
    font-size: 1.5rem;
    box-shadow: 1px 1px 5px var(--color-shadow);
    @media (min-width: 786px) {
        position: absolute;
        top: 0;
    }
`;

export const ArrowLeft = styled(BsArrowLeft)``;

export const DetailImage = styled.div`
    width: 100%;
    vertical-align: middle;
    img {
        width: 100%;
    }
`;

export const DetailText = styled.div`
    width: 100%;
    h2 {
        margin: 1rem 0;
        font-size: 3rem;
    }
    h3 {
        margin-top: 4rem;
        margin-bottom: 1rem;
        font-size: 2rem;
        font-weight: 600;
        text-transform: capitalize;
    }
    @media (min-width: 615px) {
        display: grid;
        gap: 1.5rem;
        grid-template-columns: repeat(2, 1fr);
        h2 {
            grid-column: 1/3;
        }
        h3 {
            margin-bottom: 0;
        }
    }
`;

export const DetailInfo = styled.div`
    & + & {
        margin-top: 4rem;
    }
    p {
        margin: 0.5rem 0;
    }
    span {
        font-weight: 600;
        margin-right: 0.5rem;
        text-transform: capitalize;
    }
    @media (min-width: 615px) {
        & + & {
            margin: 0;
        }
    }
`;

export const BorderButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    @media (min-width: 615px) {
        grid-column: 1/3;
    }
`;

export const BorderButton = styled(BackButton)`
    margin: 0;
    @media (min-width: 615px) {
        position: static;
        margin: 0;
    }
`;

export default DetailPageStyle;
