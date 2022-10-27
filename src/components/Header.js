import React from "react";
import { FiSun } from "react-icons/fi";
import { HiOutlineMoon } from "react-icons/hi";
import HeaderStyle, { HeaderTitle, ModeButton, ModeIcon } from "./Header.style";

const Header = ({ toggleMode, darkMode }) => {
    return (
        <HeaderStyle>
            <HeaderTitle>Where in the world?</HeaderTitle>
            <ModeButton onClick={toggleMode}>
                <ModeIcon as={darkMode ? FiSun : HiOutlineMoon} />
                {darkMode ? "Light Mode" : "Dark Mode"}
            </ModeButton>
        </HeaderStyle>
    );
};

export default Header;
