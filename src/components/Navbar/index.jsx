import cart from "@/assets/images/icon-cart.svg";
import close from "@/assets/images/icon-close.svg";
import menu from "@/assets/images/icon-menu.svg";
import avatar from "@/assets/images/image-avatar.png";
import logo from "@/assets/images/logo.svg";
import { useState } from "react";
import { useSelector } from "react-redux";
import Cart from "../Cart";
import classes from "./index.module.scss";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const [openCart, setOpenCart] = useState(false);

    const productList = useSelector((state) => state.productList);

    const totalAmount = productList.reduce(
        (total, item) => total + item.amount,
        0
    );

    const toggleHandler = () => {
        setOpenMenu((prev) => !prev);
    };

    const cartClickHandler = () => {
        setOpenCart((prev) => !prev);
    };

    return (
        <>
            <nav className={classes.navbar}>
                <button
                    className={classes.toggleButton}
                    title={openMenu ? "Close menu" : "Open menu"}
                    type="button"
                    onClick={toggleHandler}
                >
                    <img
                        src={openMenu ? close : menu}
                        alt={openMenu ? "close" : "menu"}
                    />
                </button>
                <a href="/" title="home">
                    <img src={logo} alt="logo" className={classes.logo} />
                </a>
                <div
                    className={`${classes.backdrop} ${
                        openMenu ? classes.open : ""
                    }`}
                    onClick={toggleHandler}
                />
                <ul className={classes.linkList}>
                    <li>
                        <a href="/">Collections</a>
                    </li>
                    <li>
                        <a href="/">Men</a>
                    </li>
                    <li>
                        <a href="/">Women</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
                <button
                    title="cart"
                    type="button"
                    className={classes.cart}
                    data-amount={totalAmount}
                    onClick={cartClickHandler}
                >
                    <img src={cart} alt="shopping cart" />
                </button>
                <img src={avatar} alt="avatar" className={classes.avatar} />
            </nav>
            <Cart open={openCart} />
        </>
    );
};

export default Navbar;
