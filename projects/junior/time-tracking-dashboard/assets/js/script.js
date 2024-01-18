"use strict";

import data from "../data.json" assert { type: "json" };

const containerGrid = document.querySelector(".grid-stat");
const cardList = document.querySelector(".card__list");
const cardListItems = document.querySelectorAll(".card__list__item");

const displayData = (time = "weekly") => {
  data.forEach(({ title, timeframes: { weekly, daily, monthly } }) => {
    const dataEl = `
    <figure class="card card--stat card--stat--${title
      .split(" ")
      .join("")
      .toLowerCase()}">
      <div class="card--stat__content">
        <div class="card--stat__header">
          <span class="card--stat__title">${title}</span>
          <img
            src="assets/images/icon-ellipsis.svg"
            alt="Ellipsis icon"
          />
        </div>
        <div class="card--stat__numbers">
          <p class="card--stat__hours">${
            time === "weekly"
              ? weekly.current
              : time === "daily"
              ? daily.current
              : time === "monthly"
              ? monthly.current
              : weekly.current
          }hrs</p>
          <p class="card--stat__previous-stat">${
            time === "weekly"
              ? "Last week"
              : time === "daily"
              ? "Yesterday"
              : time === "monthly"
              ? "Last month"
              : "Last week"
          } - ${
      time === "weekly"
        ? weekly.previous
        : time === "daily"
        ? daily.previous
        : time === "monthly"
        ? monthly.previous
        : weekly.previous
    }hrs</p>
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
