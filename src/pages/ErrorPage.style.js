import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const ErrorPageStyle = styled.main`
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
        font-size: min(5vw, 3rem);
        text-align: center;
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
`;
export const ArrowLeft = styled(BsArrowLeft)``;

export default ErrorPageStyle;
