import { ThemeProvider } from "styled-components";
import GlobalStyles from "./component/styles/Global";

import Header from "./component/Header";
import JobList from "./component/JobList";

const theme = {
    desktop: "786px",
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header />
            <JobList />
        </ThemeProvider>
    );
}

export default App;
