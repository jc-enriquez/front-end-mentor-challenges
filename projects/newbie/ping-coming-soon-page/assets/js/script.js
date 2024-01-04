"use strict";

const formEl = document.querySelector(".form");
const inputEmail = document.querySelector(".form__email");
const message = document.querySelector(".form__message");

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let isValid;

const checkInput = function () {
  isValid = inputEmail.value === 0 || emailRegExp.test(inputEmail.value);

  inputEmail.style.border = `1px solid ${
    !isValid ? "var(--light-red)" : "var(--green)"
  }`;

  message.textContent = `${
    !isValid ? "Please provide a valid email address" : "Email submitted!"
  }`;

  message.style.color = `${!isValid ? "var(--light-red)" : "var(--green)"}`;

  message.style.opacity = 1;
  message.style.display = "block";
  message.style.visibility = "visible";
};

const resetForm = function () {
  message.textContent = "";
  inputEmail.style.border = "1px solid var(--blue)";
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
