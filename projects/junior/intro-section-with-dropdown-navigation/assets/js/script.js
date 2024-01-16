"use strict";

const navigationList = document.querySelector(".navigation__list");

const showDropDown = (el) => {
  const clicked = el.target.closest(".navigation__item--dropdown");

  clicked.classList.toggle("active");
};

navigationList.addEventListener("click", showDropDown);
