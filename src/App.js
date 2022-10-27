import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AppStyle from "./App.style";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const toggleModeHandler = () => {
        setDarkMode((prev) => !prev);
    };

    return (
        <AppStyle id={darkMode ? "dark-mode" : ""}>
            <Header toggleMode={toggleModeHandler} darkMode={darkMode} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/:detailId" element={<DetailPage />} />
            </Routes>
        </AppStyle>
    );
}

export default App;
