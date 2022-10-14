const toggleBtn = document.querySelector(".toggle");
const nav = document.querySelector(".nav");
const form = document.querySelector(".search__form");
const banner = document.querySelector(".banner");
const header = document.querySelector(".header");
const urlList = JSON.parse(localStorage.getItem("urlList")) || [];

let timeID;

const initialRender = () => {
    urlList.map(([url, shortenURL]) => {
        const resultHTML = `<div class="search__result">
                    <div class="search__result--prev">${url}</div>
                    <a href = "${shortenURL}" target = "_blank" class="search__result--sorten">${shortenURL}</a>
                    <button class="search__result--copy"onClick = "copyHandler(event)">Copy</button>
                </div>`;

        form.insertAdjacentHTML("afterend", resultHTML);
    });
};

const copyHandler = (e) => {
    const url = e.target.parentElement.querySelector("a").textContent;
    navigator.clipboard.writeText(url).then(() => {
        alert("Copy successful");
    });
};

const render = (url, shortenURL) => {
    const resultHTML = `<div class="search__result">
                    <div class="search__result--prev">${url}</div>
                    <a href = "${shortenURL}" target = "_blank" class="search__result--sorten">${shortenURL}</a>
                    <button class="search__result--copy"onClick = "copyHandler(event)">Copy</button>
                </div>`;

    form.insertAdjacentHTML("afterend", resultHTML);
    urlList.push([url, shortenURL]);
    localStorage.setItem("urlList", JSON.stringify(urlList));
};

const fetchShorten = async (url) => {
    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const data = await res.json();
    if (data.ok) {
        const shortenURL = data.result.full_short_link;
        render(url, shortenURL);
    } else {
        clearTimeout(timeID);
        form.classList.add("inValid");
        timeID = setTimeout(() => {
            form.classList.remove("inValid");
        }, 1000);
    }
};

const submitHandler = (e) => {
    e.preventDefault();
    const inputValue = document.querySelector("input").value;
    if (inputValue) {
        fetchShorten(inputValue);
    } else {
        clearTimeout(timeID);
        form.classList.add("inValid");
        timeID = setTimeout(() => {
            form.classList.remove("inValid");
        }, 1000);
    }
};

//addEventListener

toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("click");
    toggleBtn.classList.add("reverse");
    nav.classList.toggle("show");
});

form.addEventListener("submit", submitHandler);

window.addEventListener("scroll", () => {
    const top = banner.getBoundingClientRect().top;
    if (top < 50) {
        header.style.boxShadow = "0 1px 5px hsl(257, 7%, 63%)";
    } else {
        header.style.boxShadow = "0 0 ";
    }
});

window.addEventListener("DOMContentLoaded", initialRender);
