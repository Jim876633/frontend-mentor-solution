//=================================================
//Fetch priceData
//=================================================

const fetchData = async () => {
    const res = await fetch("./data.json");
    const data = await res.json();
    drawChart(data);
};

fetchData();

//=================================================
//Chart.js
//=================================================
const drawChart = (priceData) => {
    const day = priceData.map((item) => item.day);
    const amount = priceData.map((item) => item.amount);
    const higherPrice = Math.max(...amount);
    const backgroundColor = amount.map((item) =>
        item === higherPrice ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)"
    );
    const hoverBackgroundColor = amount.map((item) =>
        item === higherPrice ? "hsl(186, 34%, 80%)" : "hsl(10, 79%, 85%)"
    );
    const data = {
        labels: day,
        datasets: [
            {
                backgroundColor: backgroundColor,
                borderRadius: 3,
                data: amount,
                hoverBackgroundColor: hoverBackgroundColor,
            },
        ],
    };

    const config = {
        type: "bar",
        data: data,
        options: {
            scales: {
                x: {
                    grid: {
                        display: false,
                    },
                    ticks: {
                        font: {
                            size: 12,
                            family: "'DM Sans', sans-serif",
                        },
                    },
                },
                y: {
                    grid: {
                        display: false,
                    },
                    display: false,
                },
            },
            plugins: {
                legend: {
                    display: false,
                },

                tooltip: {
                    backgroundColor: "hsl(25, 47%, 15%)",
                    xAlign: "center",
                    yAlign: "bottom",
                    caretPadding: 8,
                    caretSize: 0,
                    displayColors: false,
                    callbacks: {
                        label: function (tooltipItems) {
                            return "$" + tooltipItems.parsed.y;
                        },
                        title: function () {
                            return "";
                        },

                        labelTextColor: function () {
                            return "hsl(27, 66%, 92%)";
                        },
                    },
                },
            },
            layout: {
                padding: {
                    top: 40,
                    bottom: 20,
                },
            },

            onHover: (event, chartElement) => {
                event.native.target.style.cursor = chartElement[0]
                    ? "pointer"
                    : "default";
            },
        },
    };

    new Chart(document.getElementById("chart"), config);
};
