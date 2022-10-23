const form = document.querySelector("form");
const input = document.querySelector("input");
const alert = document.querySelector(".alert");
const btn = document.querySelector("button");

const alertInputClass = ["outline-red", "outline-2"];
const alertImageClass = [
    "after:bg-[url(images/icon-error.svg)]",
    "after:bg-cover",
    "after:w-5",
    "after:h-5",
    "after:absolute",
    "after:top-0",
    "after:bottom-0",
    "after:m-auto",
    "after:-left-7",
];

const submitHandler = (e) => {
    e.preventDefault();
    if (input.value.length === 0 || !input.value.includes("@")) {
        input.classList.add(...alertInputClass);
        btn.classList.add(...alertImageClass);
        alert.textContent = "Please provide avalid email";
        alert.classList.remove("invisible");
        alert.classList.remove("text-green-600");
        return;
    }
    alert.textContent = "Submit success";
    alert.classList.remove("invisible");
    alert.classList.add("text-green-600");
    input.value = "";
};

const inputHandler = () => {
    input.classList.remove(...alertInputClass);
    btn.classList.remove(...alertImageClass);
    alert.classList.add("invisible");
    return;
};

form.addEventListener("submit", submitHandler);
input.addEventListener("input", inputHandler);
