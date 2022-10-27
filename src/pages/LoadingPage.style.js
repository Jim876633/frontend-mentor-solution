import styled, { css, keyframes } from "styled-components";

const LoadingPageStyle = styled.main`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
    height: ${(props) => props.height || "auto"};
`;

const loading = keyframes`
 0%{transform: translateY(0)};
        50%{transform: translateY(-80%)};
        100%{transform: translateY(0)};
`;

export const LoadingDot = styled.span`
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    margin-top: 3rem;
    background: var(--color-input);
    ${(props) => {
        switch (props.index) {
            case "1":
                return css`
                    animation: ${loading} 0.9s infinite;
                `;
            case "2":
                return css`
                    animation: ${loading} 0.9s 0.1s infinite;
                `;
            case "3":
                return css`
                    animation: ${loading} 0.9s 0.2s infinite;
                `;
            default:
                return;
        }
    }};
`;

export default LoadingPageStyle;
