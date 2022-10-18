//================================================================
//Render data
//================================================================

const renderData = (data) => {
    const tags = document.querySelector(".cards__user--tags");

    //Render with tag
    const render = (tag) => {
        const cards = document.querySelector(".cards");
        const userCard = document.querySelector(".cards__user");
        cards.innerHTML = "";
        cards.insertAdjacentElement("beforeend", userCard);
        const formatTime = (time) => {
            const unit = time ? "hrs" : "hr";
            return time + unit;
        };
        let prevTag;
        switch (tag) {
            case "daily":
                prevTag = "yesturday";
                break;
            case "weekly":
                prevTag = "last week";
                break;
            case "monthly":
                prevTag = "last month";
        }

        data.forEach((item) => {
            const cards = document.querySelector(".cards");
            const cardClass = `cards__${item.title
                .replace(/\s/g, "")
                .toLowerCase()}`;

            const cardIcon = `/images/icon-${item.title
                .replace(/\s/g, "-")
                .toLowerCase()}.svg`;

            const time = formatTime(item.timeframes[tag].current);

            const prevTime = `${prevTag} - ${formatTime(
                item.timeframes[tag].previous
            )}`;

            const html = ` <div class="card ${cardClass}">
                <div class="card--icon">
                    <img src=${cardIcon} alt=${item.title} />
                </div>
                <div class="info">
                    <div class="info__top">
                        <span class="info__top--title">${item.title}</span>
                        <span class="info__top--ellipsis"
                            ><img
                                src="/images/icon-ellipsis.svg"
                                alt="ellipsis"
                        /></span>
                    </div>
                    <div class="info__bottom">
                        <span class="info__bottom--time">${time}</span>
                        <span class="info__bottom--prevTime">
                            ${prevTime}
                        </span>
                    </div>
                </div>
            </div>`;

            cards.insertAdjacentHTML("beforeend", html);

            for (let el of tags.children) {
                el.classList.remove("active");
                if (el.dataset.tag === tag) {
                    el.classList.add("active");
                }
            }
        });
    };

    render("daily");

    const tagClickHandler = (e) => {
        if (!e.target.matches(".tag")) return;
        render(e.target.dataset.tag);
    };

    tags.addEventListener("click", tagClickHandler);
};

//================================================================
//Fetch data
//================================================================

const fetchData = async () => {
    const res = await fetch("./data.json");
    const data = await res.json();
    renderData(data);
};

window.addEventListener("DOMContentLoaded", fetchData);
