"use strict";

const accordion = document.querySelector(".faq__accordion");
const accordionItems = document.querySelectorAll(".faq__accordion-item");

const questions = [
  {
    question: "How many team members can I invite?",
    answer:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes! Send us a message and we’ll process your request no questions asked.",
  },
  {
    question: "Do you provide additional support?",
    answer:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];

const displayQuestion = () => {
  questions.forEach(({ question, answer }, index) => {
    const questionElement = `
    <div class="faq__accordion-item ${index === 1 ? "active" : ""}">
      <div class="faq__header">
        <span class="faq__question"
          >${question}</span
        >
        <img
          src="assets/images/icon-arrow-down.svg"
          alt="Icon arrow down"
          class="faq__icon"
        />
      </div>
      <p class="faq__answer">
        ${answer}
      </p>
    </div>
    `;
    accordion.insertAdjacentHTML("beforeend", questionElement);
  });
};

displayQuestion();

const viewAnswer = (e) => {
  const clicked = e.target.closest(".faq__accordion-item");

  // Remove active class
  accordionItems.forEach((item) => item.classList.remove("active"));

  // Add active class
  clicked.classList.toggle("active");
};

accordion.addEventListener("click", viewAnswer);
