import styled from "styled-components";

const StyleTag = styled.div`
    display: flex;
    height: 3.5rem;
    align-items: center;
    border-radius: 0.2rem;
    background: var(--light_cyan_2);
    color: var(--cyan);
    font-weight: 600;
    overflow: hidden;
`;

export const JobStateTag = styled.span`
    color: var(--white);
    background: ${(props) => props.bg};
    border-radius: 10rem;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
`;

export const TagName = styled.span`
    display: inline-block;
    line-height: 3.5rem;
    height: 100%;
    padding: 0 0.5rem;
`;

export default StyleTag;
