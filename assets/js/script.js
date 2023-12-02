"use strict";

// Setting year
const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

// Setting light mode
const body = document.querySelector("body");
const btnSwitch = document.querySelector("button");
const btnIcon = document.querySelector(".btn-icon");

const switchBtnIcon = function () {
  btnIcon.getAttribute("name") === "sunny"
    ? btnIcon.setAttribute("name", "moon")
    : btnIcon.setAttribute("name", "sunny");
};

const lightMode = function () {
  body.classList.toggle("light-mode");
  btnSwitch.classList.toggle("btn--light");
  switchBtnIcon();
};

btnSwitch.addEventListener("click", lightMode);
