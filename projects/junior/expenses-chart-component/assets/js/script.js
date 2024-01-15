"use strict";

import graphs from "../data.json" assert { type: "json" };

const containerChartList = document.querySelector(".chart__list");

let amountArray = [];

graphs.forEach(({ amount }) => {
  amountArray.push(amount);
});

const displayGraphs = () => {
  graphs.forEach(({ day, amount }) => {
    const chartEl = `
    <li class="chart__list__item">
      <span class="chart__list__caption">$${amount}</span>
      <div class="chart__list__graph chart__list__graph--${
        Math.max(...amountArray) === amount ? "max" : "normal"
      }" style="height: calc(${amount}rem / 4);"></div>
      <span class="chart__list__day">${day}</span>
    </li>
    `;

    containerChartList.insertAdjacentHTML("beforeend", chartEl);
  });
};

displayGraphs();

const showGraphCaption = (e) => {
  const clicked = e.target.closest(".chart__list__item");
  clicked.classList.toggle("active");
};

containerChartList.addEventListener("click", showGraphCaption);
