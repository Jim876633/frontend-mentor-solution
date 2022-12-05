import styled from "styled-components";
import { MEDIA_TABLET } from "../../constants/media";

export const Title = styled.h5`
    color: var(--clr-white);
    span {
        font-size: inherit;
        color: var(--clr-white-25);
        margin-right: 1.8rem;
    }
    ${MEDIA_TABLET} {
        align-self: flex-start;
    }
`;
