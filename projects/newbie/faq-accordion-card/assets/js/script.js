"use strict";

const accordion = document.querySelector(".faq__accordion");
const accordionItems = document.querySelectorAll(".faq__accordion-item");

accordion.addEventListener("click", function (e) {
  const clicked = e.target.closest(".faq__accordion-item");

  // // Remove active class
  // accordionItems.forEach((item) => item.classList.remove("active"));

  // Add active class
  clicked.classList.toggle("active");
});
