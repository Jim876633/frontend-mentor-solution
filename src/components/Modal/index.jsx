import { createPortal } from "react-dom";
import classes from "./index.module.scss";

const Modal = ({ children, open }) => {
    return createPortal(
        <div className={`${classes.modal} ${open ? classes.open : ""}`}>
            {children}
        </div>,
        document.getElementById("modal-root")
    );
};

export default Modal;
