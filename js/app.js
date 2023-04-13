(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    Chart.defaults.font.weight = 600;
    Chart.defaults.color = "black";
    Chart.defaults.font.size = 14;
    const data = {
        labels: [ "2016", "2017", "2018", "2019", "Итого" ],
        values: [ 946, 649, 681, 538, 2814 ],
        datasets: [ {
            label: "",
            backgroundColor: [ "white", "white", "white", "white", "#0067B0" ],
            borderRadius: 8,
            borderColor: "rgb(255, 255, 255)",
            data: [ 946, [ 946, 1596 ], [ 1596, 2276 ], [ 2276, 2814 ], 2814 ],
            borderColor: "#d2d2d2",
            borderWidth: 4,
            borderSkipped: [ "start", false, false, false, "start" ]
        } ]
    };
    const config = {
        type: "bar",
        data,
        plugins: [ ChartDataLabels ],
        options: {
            plugins: {
                legend: {
                    display: false
                },
                datalabels: {
                    color: [ "black", "black", "black", "black", "white" ],
                    font: {
                        family: "'Montserrat', sans-serif",
                        weight: "700",
                        size: "12"
                    },
                    formatter: function(value, context) {
                        return context.chart.data.values[context.dataIndex];
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false,
                        borderColor: "black"
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        borderColor: "black",
                        drawOnChartArea: false,
                        color: "black"
                    }
                }
            }
        }
    };
    const dataEconomy = {
        labels: [ "Скидка (руб)", "Ремонты (руб)", "Доставка (руб)*", "Всего (руб)" ],
        values: [ "48 595 685", "5 837 295", "469 600", "55 232 830" ],
        datasets: [ {
            label: "",
            backgroundColor: [ "white", "white", "white", "#0067B0" ],
            borderRadius: 8,
            borderColor: "rgb(255, 255, 255)",
            data: [ 48595685, [ 48595685, 54432980 ], [ 54432980, 54902580 ], 55232830 ],
            borderColor: "#d2d2d2",
            borderWidth: 4,
            borderSkipped: [ "start", false, false, "start" ]
        } ]
    };
    const configEconomy = {
        type: "bar",
        data: dataEconomy,
        plugins: [ ChartDataLabels ],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                datalabels: {
                    color: [ "black", "black", "black", "black", "white" ],
                    font: {
                        family: "'Montserrat', sans-serif",
                        weight: "600",
                        size: "13"
                    },
                    padding: {
                        top: -10
                    },
                    anchor: "end",
                    align: "top",
                    formatter: function(value, context) {
                        return context.chart.data.values[context.dataIndex];
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    beginAtZero: true,
                    display: false,
                    grid: {
                        borderColor: "black",
                        drawOnChartArea: false,
                        color: "black"
                    }
                }
            }
        }
    };
    const dataReverse = {
        labels: [ "Cтенорезные машины", "Установки алмазного бурения", "Отбойные молотки", "Пылесосы", "Дозаторы", "Измерительная техника", "Комбинированные перфораторы", "Техника прямого монтажа", "Перфораторы", "Дрели и Шуруповерты", "Техника для резки и шлифовки", "Итого" ],
        values: [ 0, 15, 55, 70, 100, 176, 184, 209, 223, 291, 1486 ],
        datasets: [ {
            label: "",
            backgroundColor: [ "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "#0067B0" ],
            borderRadius: 5,
            borderColor: "rgb(255, 255, 255)",
            data: [ 0, [ 0, 15 ], [ 15, 70 ], [ 70, 140 ], [ 140, 240 ], [ 240, 416 ], [ 416, 600 ], [ 600, 809 ], [ 809, 1032 ], [ 1032, 1323 ], [ 1323, 2809 ], 2809 ],
            borderColor: "#d2d2d2",
            borderWidth: 2,
            borderSkipped: false
        } ]
    };
    const configReverse = {
        type: "bar",
        data: dataReverse,
        plugins: [ ChartDataLabels ],
        options: {
            indexAxis: "y",
            plugins: {
                legend: {
                    display: false
                },
                datalabels: {
                    color: [ "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "white" ],
                    font: {
                        family: "'Montserrat', sans-serif",
                        weight: "700",
                        size: "13"
                    },
                    formatter: function(value, context) {
                        return context.chart.data.values[context.dataIndex];
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        borderColor: "black",
                        drawOnChartArea: false,
                        color: "black"
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false,
                        borderColor: "black"
                    }
                }
            }
        }
    };
    const dataDetal = {
        labels: [ "Итого", "> 5 лет", "5 год", "4 год", "3 год", "2 год", "1 год" ],
        datasets: [ {
            label: "",
            backgroundColor: "#0067B0",
            borderRadius: 8,
            data: [ 839 ]
        }, {
            label: "",
            backgroundColor: "#ECECEC",
            borderRadius: 8,
            data: [ 695 ]
        } ]
    };
    const configDetal = {
        type: "bar",
        data: dataDetal,
        plugins: [ ChartDataLabels ],
        options: {
            plugins: {
                legend: {
                    display: false
                },
                datalabels: {
                    color: [ "black", "black", "black", "black", "white" ],
                    font: {
                        family: "'Montserrat', sans-serif",
                        weight: "700",
                        size: "12"
                    }
                }
            },
            scales: {
                x: {
                    stacked: true,
                    grid: {
                        display: false,
                        borderColor: "black"
                    }
                },
                y: {
                    stacked: true,
                    beginAtZero: true,
                    grid: {
                        borderColor: "black",
                        drawOnChartArea: false,
                        color: "black"
                    }
                }
            }
        }
    };
    new Chart(document.getElementById("myChartEconomy"), configEconomy);
    new Chart(document.getElementById("myChart"), config);
    new Chart(document.getElementById("myChartReverse"), configReverse);
    new Chart(document.getElementById("myChartDetal1"), configDetal);
    new Chart(document.getElementById("myChartDetal2"), configDetal);
    window["FLS"] = true;
    isWebp();
})();