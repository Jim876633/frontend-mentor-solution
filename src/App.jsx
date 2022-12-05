import { useMemo, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import data from "./constants/data";
import DestinationPage from "./pages/DestinationPage";
import CrewPage from "./pages/CrewPage";
import TechnologyPage from "./pages/TechnologyPage";
import { GlobalStyle } from "./shared/globalStyle";
import { PageBackground } from "./layouts/pageLayout";
import { getBackground } from "./utils/getBackground";

function App() {
    const [toggleMenu, setToggleMenu] = useState(false);

    const toggleHandler = () => {
        setToggleMenu((pre) => !pre);
    };

    const locationName = useLocation().pathname;
    const backgroundUrlList = useMemo(
        () =>
            getBackground(
                locationName === "/" ? "home" : locationName.slice(1)
            ),
        [locationName]
    );

    return (
        <>
            <GlobalStyle />
            <Navbar toggleMenu={toggleMenu} toggleHandler={toggleHandler} />
            <PageBackground urlList={backgroundUrlList}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route
                        path="destination"
                        element={<DestinationPage data={data.destinations} />}
                    />
                    <Route
                        path="crew"
                        element={<CrewPage data={data.crew} />}
                    />
                    <Route
                        path="technology"
                        element={<TechnologyPage data={data.technology} />}
                    />
                </Routes>
            </PageBackground>
        </>
    );
}

export default App;
