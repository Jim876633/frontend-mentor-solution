const choseCard = document.querySelector(".rating");

const resultCard = document.querySelector(".result");

const NumberBtns = document.querySelector(".buttons");

const submitBtn = document.querySelector(".submit");

const ratingNumber = document.querySelector(".select-number");

let rating = 0;

const choseRatingHandler = (e) => {
    if (e.target.matches(".button")) {
        for (const child of NumberBtns.children) {
            child.classList.remove("click");
        }
        e.target.classList.add("click");
        rating = e.target.dataset.number;
    }
};

const submitHandler = () => {
    if (rating === 0) return;
    ratingNumber.textContent = rating;
    choseCard.classList.remove("show");
    resultCard.classList.add("show");
};

NumberBtns.addEventListener("click", choseRatingHandler);
submitBtn.addEventListener("click", submitHandler);
