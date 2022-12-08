import styled from "styled-components";
import { MEDIA_DESKTOP, MEDIA_TABLET } from "../constants/media";

export const PageBackground = styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    background-image: ${(props) => `url(${props.urlList.mobile})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    ${MEDIA_TABLET} {
        background-image: ${(props) => `url(${props.urlList.tablet})`};
    }
    ${MEDIA_DESKTOP} {
        background-image: ${(props) => `url(${props.urlList.desktop})`};
    }
    transition: all 1s;
`;
