import styled from "styled-components";

export const Card = styled.div`
    width: 10rem;
    height: 10rem;
    background: var(--dark-blue-3);
`;

export const FlipTop = styled.div`
    position: relative;
    border-radius: 1rem;
    width: 100%;
    height: 50%;
    color: var(--primary-red);
    z-index: 2;
    perspective: 30rem;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    &:after,
    &:before {
        position: absolute;
        content: attr(data-next);
        display: block;
        width: 100%;
        height: 100%;
        line-height: 2;
        border-radius: 1rem;
        background: var(--dark-blue-1);
        font-size: 5rem;
        overflow: hidden;
        backface-visibility: hidden;
        transform-origin: center bottom;
        transform: rotateX(-180deg);
        filter: brightness(0.8);
        ${(props) =>
            props.animate &&
            `
        animation: font-rotate .6s linear ; 
        `}
    }
    &:after {
        content: attr(data-cur);
        top: 100%;
        line-height: 0;
        background: var(--dark-blue-1);
        transform-origin: center top;
        transform: rotateX(0deg);
        filter: brightness(1);
        ${(props) =>
            props.animate &&
            `
            animation: back-rotate .6s linear;  
        `};
    }
`;

export const Number = styled.span`
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    font-size: 5rem;
    line-height: 2;
    background: var(--dark-blue-1);
    border-radius: 1rem;
    overflow: hidden;
    transform: translateZ(-1px);
    filter: brightness(0.8);
`;

export const FlipBottom = styled.div`
    position: relative;
    border-radius: 1rem;
    color: var(--primary-red);
    background: var(--dark-blue-1);
    width: 100%;
    height: 50%;
    box-shadow: 0 1rem var(--dark);
    &::before {
        content: attr(data-cur);
        display: block;
        width: 100%;
        height: 100%;
        line-height: 0;
        font-size: 5rem;
    }
    &::after {
        content: attr(data-title);
        display: block;
        width: 100%;
        height: 100%;
        font-size: 1rem;
        margin-top: 3rem;
        color: var(--primary-blue);
        text-transform: uppercase;
        letter-spacing: 0.4rem;
    }
`;
