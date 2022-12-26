import classes from "./index.module.scss";

const Footer = () => {
    return (
        <footer>
            <p className={classes.footer}>
                Challenge by
                <a
                    href="https://www.frontendmentor.io?ref=challenge"
                    target="_blank"
                >
                    Frontend Mentor
                </a>
                . Coded by{" "}
                <a href="https://github.com/Jim876633" target="_blank">
                    Jim Huang
                </a>
                .
            </p>
        </footer>
    );
};

export default Footer;
