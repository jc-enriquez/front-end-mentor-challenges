"use strict";

const containerUpdateList = document.querySelector(".signup__list");

const signup = document.querySelector(".signup");

const messageSuccess = document.querySelector(".message");
const messageEmail = document.querySelector(".message__email");

const form = document.querySelector(".form");
const inputEmail = document.querySelector(".form__input");
const messageError = document.querySelector(".form__label--error");

const btnDismiss = document.querySelector(".btn-dismiss");

const updates = [
  "Product discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And much more!",
];

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let isValidEmail;

const displayUpdates = () => {
  updates.forEach((update) => {
    const updateEl = `
    <li class="signup__list__item">
      <span class="signup__list__icon">
        <img src="assets/images/icon-list.svg" alt="Check icon" />
      </span>
      <span class="signup__list__text">${update}</span>
    </li>
    `;
    containerUpdateList.insertAdjacentHTML("beforeend", updateEl);
  });
};

displayUpdates();

const checkForm = (e) => {
  e.preventDefault();

  isValidEmail = inputEmail.value === 0 || emailRegExp.test(inputEmail.value);

  inputEmail.style.border = `1px solid ${
    !isValidEmail ? "hsl(4, 100%, 67%)" : "hsl(231, 7%, 60%)"
  }`;

  inputEmail.style.color = `${
    !isValidEmail ? "hsl(4, 100%, 67%)" : "hsl(234, 29%, 20%)"
  }`;

  inputEmail.style.backgroundColor = `${!isValidEmail ? "#ffefee" : "#fff"}`;

  messageError.style.display = `${!isValidEmail ? "block" : "none"}`;

  signup.style.display = `${!isValidEmail ? "grid" : "none"}`;

  messageSuccess.style.display = `${!isValidEmail ? "none" : "block"}`;

  messageEmail.textContent = inputEmail.value;
};

const showSignUp = () => {
  messageSuccess.style.display = "none";
  signup.style.display = "grid";
  inputEmail.value = "";
};

form.addEventListener("submit", checkForm);

btnDismiss.addEventListener("click", showSignUp);
