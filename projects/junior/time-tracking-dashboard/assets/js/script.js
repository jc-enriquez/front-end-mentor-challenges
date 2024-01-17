"use strict";

import data from "../data.json" assert { type: "json" };
console.log(data);

const containerGrid = document.querySelector(".grid-stat");

const displayData = () => {
  data.forEach(({ title, timeframes }) => {
    const dataEl = `
    <figure class="card card--stat card--stat--${title
      .split(" ")
      .join("")
      .toLowerCase()}">
      <div class="card--stat__variant card--stat__variant--${title
        .split(" ")
        .join("")
        .toLowerCase()}"></div>
      <div class="card--stat__content">
        <div class="card--stat__header">
          <span class="card--stat__title">${title}</span>
          <img
            src="assets/images/icon-ellipsis.svg"
            alt="Ellipsis icon"
          />
        </div>
        <div class="card--stat__numbers">
          <p class="card--stat__hours">${timeframes.weekly.current}hrs</p>
          <p class="card--stat__previous-stat">Last week - ${
            timeframes.weekly.previous
          }hrs</p>
        </div>
      </div>
    </figure>`;
    containerGrid.insertAdjacentHTML("beforeend", dataEl);
  });
};

displayData();
