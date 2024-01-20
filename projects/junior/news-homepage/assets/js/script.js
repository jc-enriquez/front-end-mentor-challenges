"use strict";

const btnMobile = document.querySelector(".btn--mobile");
const navigation = document.querySelector(".navigation");
const overlay = document.querySelector(".overlay");
const html = document.querySelector("html");
const body = document.querySelector("body");

btnMobile.addEventListener("click", function () {
  navigation.classList.toggle("navigation__open");
  html.classList.toggle("u-overflow-y-hidden");
  body.classList.toggle("u-overflow-y-hidden");
  overlay.classList.toggle("hidden");
});
