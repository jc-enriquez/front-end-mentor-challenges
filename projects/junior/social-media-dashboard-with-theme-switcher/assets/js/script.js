"use strict";

import cards from "../data.json" assert { type: "json" };

const containerCardsMain = document.querySelector(".cards-main");
const containerCardsSub = document.querySelector(".cards-sub");
const btnToggle = document.querySelector(".btn--toggle");
const body = document.querySelector("body");

const cardsMain = [
  {
    variant: "Facebook",
    stat: 1987,
    trajectory: "Up",
    username: "@nathanf",
    gains: 12,
  },
  {
    variant: "Twitter",
    stat: 1044,
    trajectory: "Up",
    username: "@nathanf",
    gains: 99,
  },
  {
    variant: "Instagram",
    stat: "11k",
    trajectory: "Up",
    username: "@realnathanf",
    gains: 1099,
  },
  {
    variant: "Youtube",
    stat: 8239,
    trajectory: "Down",
    username: "Nathan F.",
    gains: -144,
  },
];

const displayCardsMain = () => {
  cardsMain.forEach(({ variant, stat, trajectory, username, gains }) => {
    const cardEl = `
    <figure class="card card--main card--main--${variant.toLowerCase()}">
      <div class="card--main__heading">
        <img src="assets/images/icon-${variant.toLowerCase()}.svg" alt="${variant} icon" class="card__icon"/>
        <p class="card__heading">${username}</p>
      </div>
      <span class="card__stat card__stat--lg">${stat}</span>
      <p class="card__caption">${
        variant !== "Youtube" ? "Followers" : "Subscribers"
      }</p>
      <div class="card__trajectory card__trajectory--main">
        <img src="assets/images/icon-${trajectory.toLowerCase()}.svg" alt="${trajectory} icon" class="card__trajectory__icon"/>
        <p class="card__trajectory__caption card__trajectory__caption--${
          trajectory !== "Up" ? "red" : "green"
        }">${Math.abs(gains)} Today</p>
      </div>
    </figure>
    `;
    containerCardsMain.insertAdjacentHTML("beforeend", cardEl);
  });
};

displayCardsMain();

const displayCardsSub = () => {
  cards.forEach(({ variant, heading, stat, trajectory, gains }) => {
    const cardEl = `
    <figure class="card card--stat">
      <div class="card--stat__heading">
        <p class="card__heading">${heading}</p>
        <img src="assets/images/icon-${variant.toLowerCase()}.svg" alt="${variant} icon" />
      </div>
      <div class="card--stat__stats">
        <span class="card__stat card__stat--sm"> ${stat} </span>
        <div class="card__trajectory">
          <img src="assets/images/icon-${trajectory.toLowerCase()}.svg" alt="${trajectory} icon" />
          <p class="card__trajectory__caption card__trajectory__caption--${
            trajectory !== "Up" ? "red" : "green"
          }">${Math.abs(gains)}%</p>
        </div>
      </div>
    </figure>
    `;
    containerCardsSub.insertAdjacentHTML("beforeend", cardEl);
  });
};

displayCardsSub();

const darkMode = () => {
  btnToggle.classList.toggle("slide");
  body.classList.toggle("dark-mode");
};

btnToggle.addEventListener("click", darkMode);
