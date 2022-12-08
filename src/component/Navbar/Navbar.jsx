import { motion } from "framer-motion";
import closeIcon from "../../images/shared/icon-close.svg";
import menuIcon from "../../images/shared/icon-hamburger.svg";
import logoIcon from "../../images/shared/logo.svg";
import {
    ItemLink,
    ItemLinkIndex,
    LogoLink,
    MenuButton,
    MenuIcon,
    NavbarContainer,
    NavLinks,
    NavLinksContainer,
    NavLinksItem,
} from "./Navbar.style";

const links = ["home", "destination", "crew", "technology"];

const Navbar = ({ toggleMenu, toggleHandler, locationName }) => {
    const navLinks = links.map((item, index) => (
        <NavLinksItem key={item} index={index}>
            <ItemLink to={item === "home" ? "/" : item} title={item}>
                <ItemLinkIndex>{`0${index}`}</ItemLinkIndex>
                {item}
            </ItemLink>
            {locationName === item ? (
                <motion.span className="underline" layoutId="underline" />
            ) : (
                ""
            )}
        </NavLinksItem>
    ));

    return (
        <NavbarContainer>
            <LogoLink to="/" title="Home">
                <img src={logoIcon} alt="logo" />
            </LogoLink>
            <NavLinksContainer open={toggleMenu}>
                <NavLinks>{navLinks}</NavLinks>
            </NavLinksContainer>
            <MenuButton
                onClick={toggleHandler}
                title={toggleMenu ? "Close menu" : "Open menu"}
                type="button"
            >
                <MenuIcon src={toggleMenu ? closeIcon : menuIcon} alt="" />
            </MenuButton>
        </NavbarContainer>
    );
};

export default Navbar;
