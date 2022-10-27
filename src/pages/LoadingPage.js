import LoadingPageStyle, { LoadingDot } from "./LoadingPage.style";

const LoadingPage = ({ height }) => {
    return (
        <LoadingPageStyle height={height}>
            <LoadingDot index="1" />
            <LoadingDot index="2" />
            <LoadingDot index="3" />
        </LoadingPageStyle>
    );
};

export default LoadingPage;
