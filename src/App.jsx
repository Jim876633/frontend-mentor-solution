import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AppStyle from "./App.style";
import Header from "./components/Header/Header";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";

let themeScheme;
if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
) {
    themeScheme = "dark";
}

function App() {
    const [darkMode, setDarkMode] = useState(themeScheme === "dark");
    const toggleModeHandler = () => {
        setDarkMode((prev) => !prev);
    };

    return (
        <AppStyle id={darkMode ? "dark-mode" : "light-mode"}>
            <Header toggleMode={toggleModeHandler} darkMode={darkMode} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/:detailId" element={<DetailPage />} />
            </Routes>
        </AppStyle>
    );
}

export default App;
