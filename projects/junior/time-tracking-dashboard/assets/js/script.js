"use strict";

import data from "../data.json" with { type: "json" };

const containerGrid = document.querySelector(".grid-stat");
const cardList = document.querySelector(".card__list");
const cardListItems = document.querySelectorAll(".card__list__item");

let cardVariant;
let timeCurrent;
let timePrevious;
let timeCaption;

const displayData = (time) => {
  data.forEach(({ title, icon, timeframes: { weekly, daily, monthly } }) => {
    switch (time) {
      case "daily":
        timeCurrent = daily.current;
        timePrevious = daily.previous;
        timeCaption = "Yesterday";
        break;
      case "weekly":
        timeCurrent = weekly.current;
        timePrevious = weekly.previous;
        timeCaption = "Last week";
        break;
      case "monthly":
        timeCurrent = monthly.current;
        timePrevious = monthly.previous;
        timeCaption = "Last month";
        break;
      default:
        timeCurrent = weekly.current;
        timePrevious = weekly.previous;
        timeCaption = "Last week";
        break;
    }

    cardVariant = title.split(" ").join("").toLowerCase();

    const dataEl = `
    <figure class="card card--stat card--stat--${cardVariant}">
      <div class="card--stat__content">
        <div class="card--stat__header">
          <span class="card--stat__title">${title}</span>
          <ion-icon name="ellipsis-horizontal" class="card--stat__setting"></ion-icon>
        </div>
        <div class="card--stat__numbers">
          <p class="card--stat__hours">${timeCurrent}hrs</p>
          <p class="card--stat__previous-stat">${timeCaption} - ${timePrevious}hrs</p>
        </div>
      </div>
    </figure>`;
    containerGrid.insertAdjacentHTML("beforeend", dataEl);
  });
};

displayData();

const setData = (e) => {
  const clicked = e.target.closest(".card__list__item");
  const clickedContent = clicked.textContent.split(" ").join("").toLowerCase();

  // Remove active class
  cardListItems.forEach((item) => item.classList.remove("active"));

  // Add active class
  clicked.classList.add("active");

  // Reset grid content
  containerGrid.innerHTML = "";

  displayData(clickedContent);
};

cardList.addEventListener("click", setData);
