import data from "@/assets/data";
import deleteIcon from "@/assets/images/icon-delete.svg";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../redux/productListSlice";
import classes from "./index.module.scss";

const Cart = ({ open }) => {
    const productList = useSelector((state) => state.productList);

    const dispatch = useDispatch();

    const deleteHandler = (index) => {
        dispatch(deleteProduct(index));
    };

    return (
        <div className={`${classes.cart} ${open ? classes.open : ""}`}>
            <h3 className={classes.title}>Cart</h3>
            <hr />

            {productList.length === 0 ? (
                <p className={classes.emptyText}>Your cart is empty</p>
            ) : (
                productList.map((item, i) => {
                    const { id, title, price, imageThumbnailList } =
                        data[item.id];
                    const totalPrice = +price * item.amount;
                    return (
                        <div key={id} className={classes.product}>
                            <div className={classes.imageWrap}>
                                <img src={imageThumbnailList[0]} alt={title} />
                            </div>
                            <h4 className={classes.title}>{title}</h4>
                            <p className={classes.amount}>
                                {`$${price} x ${item.amount}`}
                                <span>${totalPrice}.00</span>
                            </p>
                            <button
                                title="Delete product"
                                type="button"
                                className={classes.deleteButton}
                                onClick={() => {
                                    deleteHandler(i);
                                }}
                            >
                                <img src={deleteIcon} alt="delete" />
                            </button>
                        </div>
                    );
                })
            )}
            {productList.length !== 0 ? (
                <button
                    title="Checkout"
                    type="button"
                    className={classes.checkoutButton}
                >
                    Checkout
                </button>
            ) : (
                ""
            )}
        </div>
    );
};

export default Cart;
