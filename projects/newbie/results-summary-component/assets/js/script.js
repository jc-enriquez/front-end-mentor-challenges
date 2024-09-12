"use strict";

import data from "../data.json" with { type: "json" };

const containerSummary = document.querySelector(".summary__list");

const displayData = () => {
  data.forEach(({ category, score, icon }) => {
    const html = `
    <li class="summary__item summary__item--${category.toLowerCase()}">
      <div class="summary__item-title">
        <img src="${icon}" alt="${category} icon" />
        <p>${category}</p>
      </div>
      <div class="summary__item-score">
        <span class="item-score--actual">${score}</span>
        <span class="item-score--overall">/ 100</span>
      </div>
    </li>
    `;
    containerSummary.insertAdjacentHTML("beforeend", html);
  });
};

displayData();
