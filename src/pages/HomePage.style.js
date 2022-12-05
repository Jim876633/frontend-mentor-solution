import { Link } from "react-router-dom";
import styled from "styled-components";
import { MEDIA_DESKTOP, MEDIA_TABLET } from "../constants/media";

export const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8.1rem;
    padding-block: 15rem 5rem;
    align-items: center;
    ${MEDIA_DESKTOP} {
        flex-direction: row;
        justify-content: space-evenly;
        padding-block: 20rem 10rem;
    }
`;

export const TextContainer = styled.div`
    text-align: center;
    width: min(90%, 45rem);
`;

export const TitleSmallHeading = styled.h5`
    text-transform: uppercase;
`;

export const TitleHeading = styled.h1`
    margin-block: 1.6rem;
`;

export const ExploreButton = styled(Link)`
    display: grid;
    place-content: center;
    width: var(--explore);
    height: var(--explore);
    border-radius: 50%;
    background: var(--clr-white);
    transition: all 0.2s;
    ${MEDIA_TABLET} {
        &:hover {
            box-shadow: 0 0 0 5rem var(--clr-white-10);
        }
    }
`;

export const ExploreHeading = styled.h4`
    color: var(--clr-primary);
    text-transform: uppercase;
    font-size: 2rem;
    letter-spacing: 1.25px;
`;
