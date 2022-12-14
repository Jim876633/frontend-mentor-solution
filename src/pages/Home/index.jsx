import data from "@/assets/data";
import minus from "@/assets/images/icon-minus.svg";
import arrowRight from "@/assets/images/icon-next.svg";
import plus from "@/assets/images/icon-plus.svg";
import arrowLeft from "@/assets/images/icon-previous.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/productListSlice";
import classes from "./index.module.scss";

const Home = () => {
    const {
        id,
        brand,
        title,
        description,
        price,
        discount,
        original_price,
        imageList,
        imageThumbnailList,
    } = data.s_1;

    const dispatch = useDispatch();

    const [amount, setAmount] = useState(0);

    const [imageIndex, setImageIndex] = useState(0);

    const minusHandler = () => {
        if (amount === 0) return;
        setAmount((prev) => prev - 1);
    };

    const plusHandler = () => {
        if (amount === 10) return;
        setAmount((prev) => prev + 1);
    };

    const addItemHandler = () => {
        dispatch(addProduct({ id, amount }));
        setAmount(0);
    };

    const imageHandler = (type) => {
        if (type === "right") {
            if (imageIndex === imageList.length - 1) {
                setImageIndex(0);
            } else {
                setImageIndex((prev) => prev + 1);
            }
        }
        if (type === "left") {
            if (imageIndex === 0) {
                setImageIndex(imageList.length - 1);
            } else {
                setImageIndex((prev) => prev - 1);
            }
        }
    };

    return (
        <main className={classes.main}>
            <div className={classes.imageBlock}>
                <img src={imageList[imageIndex]} alt={title} />
                <button
                    title="previous"
                    type="button"
                    className={classes.prevButton}
                    onClick={() => {
                        imageHandler("left");
                    }}
                >
                    <img src={arrowLeft} alt="left arrow" />
                </button>
                <button
                    title="next"
                    type="button"
                    className={classes.nextButton}
                    onClick={() => {
                        imageHandler("right");
                    }}
                >
                    <img src={arrowRight} alt="right arrow" />
                </button>
            </div>
            <div className={classes.contentBlock}>
                <span className={classes.brand}>{brand}</span>
                <h2 className={classes.title}>{title}</h2>
                <p className={classes.description}>{description}</p>
                <div className={classes.priceBlock}>
                    <span className={classes.price}>${price}</span>
                    <span className={classes.discount}>{discount}</span>
                    <span className={classes.original_price}>
                        ${original_price}
                    </span>
                </div>
                <div>
                    <div className={classes.amountBlock}>
                        <button
                            title="Minus amount"
                            type="button"
                            onClick={minusHandler}
                        >
                            <img src={minus} alt="minus" />
                        </button>
                        <span className={classes.amount}>{amount}</span>
                        <button
                            title="plus amount"
                            type="button"
                            onClick={plusHandler}
                        >
                            <img src={plus} alt="plus" />
                        </button>
                    </div>
                    <button
                        title="Add to cart"
                        type="button"
                        className={classes.addButton}
                        onClick={addItemHandler}
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </main>
    );
};

export default Home;
