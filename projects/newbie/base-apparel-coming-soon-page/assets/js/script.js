"use strict";

const formEl = document.querySelector(".form");
const inputGroup = document.querySelector(".form__input-group");
const inputEmail = document.querySelector(".form__input-email");
const errorIcon = document.querySelector(".form__input-error-icon");
const message = document.querySelector(".form__input-message");

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let isValid;

const checkInput = function () {
  isValid = inputEmail.value === 0 || emailRegExp.test(inputEmail.value);

  inputGroup.style.border = `1px solid ${
    !isValid ? "var(--soft-red)" : "var(--green)"
  }`;

  message.textContent = `${
    !isValid ? "Please provide a valid email" : "Email submitted!"
  }`;

  message.style.color = `${!isValid ? "var(--soft-red)" : "var(--green)"}`;
  errorIcon.style.display = `${!isValid ? "block" : "none"}`;

  message.style.opacity = 1;
  message.style.display = "block";
  message.style.visibility = "visible";
};

const resetForm = function () {
  message.textContent = "";
  inputGroup.style.border = "1px solid var(--desaturated-red)";
  errorIcon.style.display = "none";
  inputEmail.value = "";
};

const formSubmit = function (e) {
  e.preventDefault();

  checkInput();

  setTimeout(() => {
    resetForm();
  }, 3000);
};

formEl.addEventListener("submit", formSubmit);
