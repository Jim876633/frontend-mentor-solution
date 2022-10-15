const ipAPI_KEY = "at_NpVUw6cctJ6nVgjlbhVr30nyEfCJG";

const formEl = document.querySelector(".search__form");

const inputEl = formEl.querySelector("input");

const map = L.map("map");

//================================================//
//Get Local IP address
//================================================//

const getIP = (json) => {
    fetchLocation(json.ip);
};

//================================================//
//Loaction result render
//================================================//

const renderResult = (result) => {
    Object.entries(result).forEach(([key, value]) => {
        const resultEl = document.querySelector(`.search__result--${key}`);
        resultEl.querySelector(".result").textContent = value;
    });
    inputEl.value = "";
};

const inValidAlert = () => {
    formEl.classList.remove("valid");
    formEl.classList.add("inValid");
    inputEl.value = "";
};

const validAlert = () => {
    formEl.classList.remove("inValid");
    formEl.classList.add("valid");
};
const blurInput = () => {
    formEl.classList.remove("inValid");
    formEl.classList.remove("valid");
};

//================================================//
//Leaf map render
//================================================//

const renderMap = (coords) => {
    map.setView(coords, 13);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    const icon = L.icon({
        iconUrl: "/images/icon-location.svg",
        iconSize: [36, 46],
    });
    var marker = L.marker(coords, { icon }).addTo(map);
    marker
        .bindPopup("<b>Hello vistor !</b><br>IP address is here.")
        .openPopup();
};

//================================================//
//fetch Location
//================================================//

const fetchLocation = async (ip) => {
    const ipAPI_URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${ipAPI_KEY}&domain=${ip}
    `;
    const res = await fetch(ipAPI_URL);
    const data = await res.json();
    if (data.code == 422 || data.code === 400) {
        inValidAlert();
        return;
    }
    const result = {
        ip: data.ip,
        location: `${data.location.city},${data.location.region},${data.location.country}`,
        timezone: `UTC${data.location.timezone}`,
        isp: data.isp,
    };
    const coords = [data.location.lat, data.location.lng];
    renderResult(result);
    renderMap(coords);
};
//================================================//
//Form submit
//================================================//

submitHandler = (e) => {
    e.preventDefault();
    const inputValue = inputEl.value;
    const ipRegExp =
        /((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/g;

    const domainRegExp =
        /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g;
    if (inputValue.match(ipRegExp) || inputValue.match(domainRegExp)) {
        fetchLocation(inputValue);
    } else {
        inValidAlert();
    }
};

//================================================//
//Event Listener
//================================================//

["DOMContentLoaded", "resize"].forEach((event) => {
    window.addEventListener(event, () => {
        const search = document.querySelector(".search");
        search.style.height = "fit-content";
        const map = document.querySelector("#map");

        const searchHeight = search.clientHeight;

        const resultHeight =
            document.querySelector(".search__result").clientHeight;

        const newSearchHeight = searchHeight - resultHeight / 2;

        search.style.height = newSearchHeight + "px";
        map.style.height = `calc(100vh - ${newSearchHeight}px)`;
    });
});

formEl.addEventListener("submit", submitHandler);

inputEl.addEventListener("input", validAlert);
inputEl.addEventListener("blur", blurInput);
