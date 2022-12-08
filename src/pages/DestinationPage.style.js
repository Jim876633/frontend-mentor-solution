import styled from "styled-components";
import { MEDIA_DESKTOP, MEDIA_TABLET } from "../constants/media";

export const DestinationContainer = styled.div`
    padding-block: 10rem 5rem;
    text-align: center;
    height: 100%;
    ${MEDIA_TABLET} {
        padding-block: 15rem 5rem;
    }
    ${MEDIA_DESKTOP} {
        display: flex;
        justify-content: center;
        gap: 5rem;
    }
`;

export const Section1 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 85%;
    margin: auto;
    picture {
        width: min(60%, 35rem);
        margin: auto;
    }
    ${MEDIA_TABLET} {
        gap: 5rem;
    }
    ${MEDIA_DESKTOP} {
        width: min(45%, 60rem);
        height: 45rem;
        margin: auto 0;
        picture {
            width: 70%;
        }
    }
`;

export const Section2 = styled.div`
    width: min(90%, 50rem);
    margin: auto;
    hr {
        margin-block: 3rem;
        border: 1px solid #383b4b;
    }

    ${MEDIA_DESKTOP} {
        width: min(45%, 40rem);
        height: 45rem;
        text-align: left;
        margin: auto 0;
    }
`;

export const InfoWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
    text-transform: uppercase;
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
    }
    ${MEDIA_TABLET} {
        flex-direction: row;
        gap: 10rem;
    }
    ${MEDIA_DESKTOP} {
        justify-content: flex-start;
    }
`;

export const SubHeading1 = styled.span`
    font-size: var(--fz-h1-sm);
    font-family: var(--ff-belle);
    color: var(--clr-white);
`;
export const SubHeading2 = styled.span`
    font-size: var(--fz-h2-sm);
    font-family: var(--ff-barlow-c);
    letter-spacing: 2.35px;
    color: var(--clr-text);
`;

export const SectionLinks = styled.ul`
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin-block: 3rem;
    ${MEDIA_DESKTOP} {
        justify-content: flex-start;
    }
    li {
        position: relative;
    }
    span.underline {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: var(--clr-white);
    }
`;

export const CategoryButton = styled.button`
    padding-block: 1rem;
    text-transform: uppercase;
    color: var(--clr-text);
    border-bottom: 2px solid transparent;
    transition: all 0.2s;
    &:hover {
        border-bottom: 2px solid var(--clr-white-50);
    }
`;
