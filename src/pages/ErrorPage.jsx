import ErrorPageStyle from "./ErrorPage.style";
import { BackButton, ArrowLeft } from "./ErrorPage.style";

const ErrorPage = () => {
    return (
        <ErrorPageStyle>
            <h2>
                Can't find the page.
                <br /> Please search the correct site.
            </h2>
            <BackButton to="/">
                <ArrowLeft />
                Back
            </BackButton>
        </ErrorPageStyle>
    );
};

export default ErrorPage;
