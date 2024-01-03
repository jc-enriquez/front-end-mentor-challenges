"use strict";

// Selectors
const faqBody = document.querySelector(".faq__body");

const questions = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and deal for portfolio building.",
  },
  {
    question: "Is Frontend Mentor free?",
    answer:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

const displayQuestions = () => {
  questions.forEach(({ question, answer }) => {
    const questionElement = `
    <div class="faq__accordion-item">
      <div class="faq__question active">
        <p>${question}</p>
        <img src="assets/images/icon-plus.svg" alt="Plus icon" />
      </div>
      <p class="faq__answer">${answer}</p>
    </div>
    `;
    faqBody.insertAdjacentHTML("beforeend", questionElement);
  });
};

displayQuestions();

const viewQuestion = (e) => {
  const clicked = e.target.closest(".faq__accordion-item");
  const accordionItems = document.querySelectorAll(".faq__accordion-item");

  accordionItems.forEach((item) => item.classList.remove("active"));

  clicked.classList.toggle("active");
};

faqBody.addEventListener("click", viewQuestion);
