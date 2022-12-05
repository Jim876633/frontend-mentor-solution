import {
    NavbarContainer,
    LogoLink,
    NavLinksContainer,
    NavLinks,
    NavLinksItem,
    ItemLink,
    ItemLinkIndex,
    MenuButton,
    MenuIcon,
} from "./Navbar.style";
import logoIcon from "../../images/shared/logo.svg";
import menuIcon from "../../images/shared/icon-hamburger.svg";
import closeIcon from "../../images/shared/icon-close.svg";

const links = ["home", "destination", "crew", "technology"];

const Navbar = ({ toggleMenu, toggleHandler }) => {
    const navLinks = links.map((item, index) => (
        <NavLinksItem key={item} index={index}>
            <ItemLink to={item === "home" ? "/" : item} title={item}>
                <ItemLinkIndex>{`0${index}`}</ItemLinkIndex>
                {item}
            </ItemLink>
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
