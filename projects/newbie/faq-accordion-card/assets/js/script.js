"use strict";

const accordionBtns = document.querySelectorAll(".faq__header");
const accordionQuestion = document.querySelector(".faq__question");

accordionBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    let accordionQuestion = this.firstElementChild;
    let accordionAnswer = this.nextElementSibling;
    let accordionIcon = this.lastElementChild;

    const questionStyle = (accordionQuestion.style.fontWeight = "400");
    const answerStyle = accordionAnswer.style.display === "block";
    const iconStyle = (accordionIcon.style.transform = "rotate(0deg)");

    questionStyle
      ? (accordionQuestion.style.fontWeight = "700")
      : (accordionQuestion.style.fontWeight = "400");

    iconStyle
      ? (accordionIcon.style.transform = "rotate(180deg)")
      : (accordionIcon.style.transform = "rotate(0deg)");

    answerStyle
      ? (accordionAnswer.style.display = "none")
      : (accordionAnswer.style.display = "block");
  });
});
