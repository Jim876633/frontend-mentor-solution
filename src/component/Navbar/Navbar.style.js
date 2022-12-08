import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { MEDIA_DESKTOP, MEDIA_TABLET } from "../../constants/media";

export const NavbarContainer = styled.nav`
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    height: var(--nav-h);
    padding-inline: 2.4rem 0;
    z-index: 10;
    ${MEDIA_DESKTOP} {
        padding-top: 3rem;
    }
`;

export const LogoLink = styled(Link)`
    width: 4rem;
    height: 4rem;
    flex-shrink: 0;
    border-radius: 50%;
    background: var(--clr-white);
`;

export const NavLinksContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 70%;
    height: 100vh;
    background: var(--clr-blur);
    backdrop-filter: blur(2rem);
    transform: ${(props) =>
        props.open ? "translateX(0)" : "translateX(100%)"};
    transition: all 0.2s;
    ${MEDIA_TABLET} {
        position: relative;
        height: 100%;
        transform: none;
    }
    ${MEDIA_DESKTOP} {
        width: 60%;
        &::before {
            content: "";
            position: absolute;
            left: -55%;
            top: 50%;
            width: 60%;
            height: 1px;
            background: var(--clr-white-25);
        }
    }
`;

export const NavLinks = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4rem;
    width: 100%;
    margin-block: 20vh;
    padding-inline: 4rem;
    ${MEDIA_TABLET} {
        flex-direction: row;
        align-items: center;
        height: 100%;
        margin: 0;
    }
`;

export const NavLinksItem = styled.li`
    position: relative;
    height: 100%;
    span.underline {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: var(--clr-white);
    }
`;

export const ItemLink = styled(NavLink)`
    font-family: var(--ff-barlow-c);
    font-size: var(--fz-nav);
    letter-spacing: 2.7px;
    text-transform: uppercase;
    padding-block: 0.5rem;
    height: 100%;
    transition: all 0.2s;
    border-bottom: 2px solid transparent;
    &:hover {
        border-bottom: 2px solid var(--clr-white-50);
    }
    ${MEDIA_TABLET} {
        display: flex;
        align-items: center;
    }
`;

export const ItemLinkIndex = styled.span`
    display: inline-block;
    margin-right: 1.3rem;
    font-family: inherit;
    font-size: inherit;
    font-weight: bold;
    ${MEDIA_TABLET} {
        display: none;
    }
    ${MEDIA_DESKTOP} {
        display: inline-block;
    }
`;

export const MenuButton = styled.button`
    position: relative;
    z-index: 10;
    width: 2.4rem;
    height: 2.1rem;
    margin-right: 2.4rem;
    ${MEDIA_TABLET} {
        display: none;
    }
`;

export const MenuIcon = styled.img``;
