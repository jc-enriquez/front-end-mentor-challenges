"use strict";

const navigationList = document.querySelector(".navigation__list");
const navigation = document.querySelector(".navigation");
const btnMobile = document.querySelector(".btn--mobile");

const showDropDown = (el) => {
  const clicked = el.target.closest(".navigation__item--dropdown");

  clicked.classList.toggle("active");
};

const showMobileNav = () => {
  navigation.classList.toggle("active");
};

navigationList.addEventListener("click", showDropDown);

btnMobile.addEventListener("click", showMobileNav);
