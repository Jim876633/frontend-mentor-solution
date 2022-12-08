import { AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import data from "./constants/data";
import { PageBackground } from "./layouts/pageLayout";
import CrewPage from "./pages/CrewPage";
import DestinationPage from "./pages/DestinationPage";
import HomePage from "./pages/HomePage";
import TechnologyPage from "./pages/TechnologyPage";
import { GlobalStyle } from "./shared/globalStyle";
import { getBackground } from "./utils/getBackground";

function App() {
    const [toggleMenu, setToggleMenu] = useState(false);

    const toggleHandler = () => {
        setToggleMenu((pre) => !pre);
    };

    const location = useLocation();

    const locationName =
        location.pathname === "/" ? "home" : location.pathname.slice(1);

    const backgroundUrlList = useMemo(
        () => getBackground(locationName),
        [locationName]
    );

    return (
        <>
            <GlobalStyle />
            <Navbar
                toggleMenu={toggleMenu}
                toggleHandler={toggleHandler}
                locationName={locationName}
            />
            <PageBackground urlList={backgroundUrlList}>
                <AnimatePresence mode="wait">
                    <Routes key={locationName} location={location}>
                        <Route path="/" element={<HomePage />} />
                        <Route
                            path="destination"
                            element={
                                <DestinationPage data={data.destinations} />
                            }
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
                </AnimatePresence>
            </PageBackground>
        </>
    );
}

export default App;
