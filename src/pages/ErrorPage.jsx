import ErrorPageStyle, { ArrowLeft, BackButton } from "./ErrorPage.style";

const ErrorPage = ({ message }) => {
    return (
        <ErrorPageStyle>
            <h2>{message ? message.join("\n") : "Error"}</h2>
            <BackButton to="/">
                <ArrowLeft />
                Back
            </BackButton>
        </ErrorPageStyle>
    );
};

export default ErrorPage;
