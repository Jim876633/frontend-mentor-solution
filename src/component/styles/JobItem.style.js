import styled from "styled-components";

const StyleJobItem = styled.div``;

export const Image = styled.div`
    position: absolute;
    top: 0%;
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    flex-shrink: 0;
    transform: translateY(-50%);
    img {
        width: 100%;
        vertical-align: middle;
        object-fit: cover;
    }
    @media (min-width: ${({ theme }) => theme.desktop}) {
        position: relative;
        transform: none;
        width: 6rem;
        height: 6rem;
        margin-right: 2rem;
    } ;
`;

export const JobBlock = styled.div`
    font-weight: 700;
    display: grid;
    gap: 1.5rem;
    padding: 1rem 0 2rem;
    border-bottom: 1px solid var(--dark_cyan);
    flex-shrink: 0;
    @media (min-width: ${({ theme }) => theme.desktop}) {
        border-bottom: none;
        margin-right: auto;
    }
    .title {
        display: flex;
        align-items: center;
        gap: 1rem;
        color: var(--cyan);
    }
    .position {
        color: var(--dark_cyan_2);
    }
    .info {
        font-weight: 700;
        color: var(--dark_cyan);
    }
`;
export const TagBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 2rem 0 0;
    @media (min-width: ${({ theme }) => theme.desktop}) {
        justify-content: flex-end;
    }
`;

export default StyleJobItem;
