import styled, { css } from "styled-components";
import { MEDIA_DESKTOP, MEDIA_TABLET } from "../constants/media";

export const TechnologyPageContainer = styled.div`
    padding-block: 10rem 10rem;
    text-align: center;
    height: 100%;
    ${MEDIA_TABLET} {
        padding-block: 15rem 5rem;
        text-align: left;
    }
`;

export const Section = styled.div`
    ${MEDIA_TABLET} {
        display: flex;
        flex-direction: column;
        & > h5:first-child {
            margin-left: 4rem;
        }
    }
    ${MEDIA_DESKTOP} {
        display: grid;
        grid-template-columns: min-content 1fr;
        gap: 8rem;
        width: max(calc(60% - 5vw), calc(100% - 40rem - 5vw));
        height: 100%;
        margin-inline: 5vw auto;
        margin-block: auto;
        & > h5:first-child {
            margin-left: 0;
            grid-column: span 2;
        }
    }
`;

export const ImageWrap = styled.div`
    margin-block: 3rem;
    width: 100%;
    ${MEDIA_TABLET} {
        margin-block: 4rem 0;
    }
    ${MEDIA_DESKTOP} {
        position: absolute;
        width: min(40%, 40rem);
        right: 0;
    }
`;

export const ButtonList = styled.div`
    display: flex;
    justify-content: center;
    gap: 1.6rem;
    margin-block: 3rem;
    ${MEDIA_DESKTOP} {
        flex-direction: column;
        justify-content: flex-start;
    }
`;

export const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: min(90%, 45rem);
    margin-inline: auto;
    ${MEDIA_DESKTOP} {
        align-items: flex-start;
        margin-inline: 0 auto;
        width: 90%;
    }
`;

export const CategoryButton = styled.button`
    display: grid;
    place-content: center;
    flex-shrink: 0;
    width: max(4rem, 5vw);
    height: max(4rem, 5vw);
    border-radius: 50%;
    border: 1px solid var(--clr-white-25);
    color: white;
    font-family: var(--ff-belle);
    transition: all 0.2s;
    &:hover {
        border: 1px solid var(--clr-white);
    }
    ${(props) =>
        props.active === "active"
            ? css`
                  border: 1px solid var(--clr-white);
                  background: var(--clr-white);
                  color: var(--clr-primary);
              `
            : ""}
`;
