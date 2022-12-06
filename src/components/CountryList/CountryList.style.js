import styled, { css } from "styled-components";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const CountryListStyle = styled.article`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3vw;
    padding: 2rem;
`;

export const EmptyPageStyle = styled.main`
    h2 {
        text-align: center;
        font-weight: 600;
        font-size: 2rem;
        margin: 3rem;
    }
`;

export const PageButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    @media (min-width: 615px) {
        padding: 0 5rem;
        justify-content: flex-end;
    }
`;

export const PageButton = styled.button`
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.5rem;
    border-radius: 0.5rem;
    background: var(--color-element);
    color: var(--color-text);
    box-shadow: 1px 1px 5px var(--color-shadow);
    flex-shrink: 0;
    ${(props) =>
        props.active &&
        css`
            background: var(--color-hover);
            color: var(--color-element);
        `}
    &:hover {
        background: var(--color-hover);
        color: var(--color-element);
    }
`;

const arrowButtonCss = css`
    width: 2rem;
    height: 2rem;
    color: var(--color-hover);
    flex-shrink: 0;
    &:not(:disabled):hover {
        color: var(--color-text);
    }
    &:disabled {
        cursor: auto;
        color: var(--color-element);
    }
`;

export const PrevButton = styled.button.attrs((props) => ({
    disabled: props.active,
}))`
    ${arrowButtonCss}
`;

export const NextButton = styled.button.attrs((props) => ({
    disabled: props.active,
}))`
    ${arrowButtonCss}
`;

const IconCss = css`
    width: 100%;
    height: 100%;
`;

export const PrevIcon = styled(MdArrowBackIosNew)`
    ${IconCss}
`;
export const NextIcon = styled(MdArrowForwardIos)`
    ${IconCss}
`;

export default CountryListStyle;
