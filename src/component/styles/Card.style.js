import styled from "styled-components";

const StyleCard = styled.div`
    width: max(80%, 30rem);
    margin: auto;
    background: var(--white);
    border-radius: 0.5rem;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    padding: 2rem;
`;

export const FilterCard = styled(StyleCard)`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: -3.5rem;
`;

export const JobCard = styled(StyleCard)`
    position: relative;
    margin: 5rem auto;
    border-left: ${(props) =>
        props.featured ? "0.5rem solid var(--cyan)" : 0};
    @media (min-width: ${({ theme }) => theme.desktop}) {
        margin: 2rem auto;
        display: flex;
        align-items: center;
        &:first-child {
            margin-top: 5rem;
        }
        &:last-child {
            margin-bottom: 5rem;
        }
    }
`;

export default StyleCard;
