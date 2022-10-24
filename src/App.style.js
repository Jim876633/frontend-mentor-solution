import styled from "styled-components";
import { ReactComponent as Facebook } from "./icons/icon-facebook.svg";
import { ReactComponent as Pinterest } from "./icons/icon-pinterest.svg";
import { ReactComponent as Instagram } from "./icons/icon-instagram.svg";

export const Container = styled.div`
    background-image: url("/images/bg-stars.svg"),
        linear-gradient(to bottom, var(--dark-blue-3), var(--dark-blue-2));
    height: 100vh;
`;

export const Main = styled.main`
    display: grid;
    place-content: center;
    width: 90%;
    height: 80vh;
    margin: auto;
`;

export const Title = styled.h1`
    color: var(--white);
    font-size: 3rem;
    letter-spacing: 0.5rem;
    text-transform: uppercase;
`;
export const Time = styled.div`
    margin-top: 10%;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
`;
export const Footer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    background-image: url("/images/pattern-hills.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 80% 0;
    height: 20vh;
    width: 100%;
`;

const iconStyle = `
    margin-top: 3rem;
    cursor: pointer;
    transform: scale(0.9);
    path{
        transition: fill .5s;
        fill: var(--primary-blue);
    }
    &:hover path {
        fill: var(--primary-red);
    }   
`;

export const FacebookIcon = styled(Facebook)`
    ${iconStyle}
`;
export const PinterestIcon = styled(Pinterest)`
    ${iconStyle}
`;
export const InstagramIcon = styled(Instagram)`
    ${iconStyle}
`;
