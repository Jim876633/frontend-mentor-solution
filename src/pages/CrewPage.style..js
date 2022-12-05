import styled, { css } from "styled-components";
import { MEDIA_DESKTOP, MEDIA_TABLET } from "../constants/media";

export const CrewPageContainer = styled.div`
    padding-block: 10rem 10rem;
    text-align: center;
    min-height: 100vh;
    ${MEDIA_TABLET} {
        padding-block: 15rem 0;
    }
    ${MEDIA_DESKTOP} {
        text-align: left;
        padding-block: 15rem 5rem;
    }
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    ${MEDIA_TABLET} {
        padding-inline: 4rem;
        gap: 4rem;
    }
    ${MEDIA_DESKTOP} {
        width: 55%;
        padding-inline: 8vw 0;
        height: 45rem;
        justify-content: space-between;
    }
`;

export const ImageWrap = styled.div`
    display: flex;
    height: 27rem;
    width: 85%;
    margin: auto;
    border-bottom: 1px solid var(--clr-white-25);
    overflow: hidden;
    picture {
        width: 70%;
        margin-inline: auto;
        img {
            object-fit: contain;
        }
    }
    ${MEDIA_TABLET} {
        order: 2;
        height: 50rem;
        picture {
            width: 100%;
        }
    }
    ${MEDIA_DESKTOP} {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 50%;
    }
`;

export const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: min(85%, 50rem);
    margin: auto;
    ${MEDIA_DESKTOP} {
        margin: 0;
        width: 100%;
    }
`;

export const ButtonList = styled.ul`
    display: flex;
    justify-content: center;
    gap: 2rem;
    ${MEDIA_TABLET} {
        order: 1;
    }
    ${MEDIA_DESKTOP} {
        justify-content: flex-start;
    }
`;

export const CategoryButton = styled.button`
    width: 1rem;
    height: 1rem;
    background: var(--clr-white-25);
    border-radius: 50%;
    transition: background 0.2s;
    &:hover {
        background: var(--clr-white-50);
    }
    ${(porps) =>
        porps.active === "active"
            ? css`
                  background: var(--clr-white);
              `
            : ""}
`;
