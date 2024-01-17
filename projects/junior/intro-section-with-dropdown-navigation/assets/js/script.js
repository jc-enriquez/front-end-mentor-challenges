"use strict";

const navigationList = document.querySelector(".navigation__list");
const navigation = document.querySelector(".navigation");
const btnMobile = document.querySelector(".btn--mobile");
const html = document.querySelector("html");
const body = document.querySelector("body");

const showDropDown = (el) => {
  const clicked = el.target.closest(".navigation__item--dropdown");

  clicked.classList.toggle("active");
};

const showMobileNav = () => {
  navigation.classList.toggle("active");
  html.classList.toggle("active");
  html.classList.toggle("u-overflow-y-hidden");
  body.classList.toggle("u-overflow-y-hidden");
};

navigationList.addEventListener("click", showDropDown);

btnMobile.addEventListener("click", showMobileNav);
