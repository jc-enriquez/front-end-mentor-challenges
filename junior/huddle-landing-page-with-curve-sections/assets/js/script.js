"use strict";

const formEl = document.querySelector(".newsletter__form");
const inputEmail = document.querySelector(".newsletter__input");
const errorMessage = document.querySelector(".error-message");

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const formSubmit = function (e) {
  e.preventDefault();

  const isValid = inputEmail.value === 0 || emailRegExp.test(inputEmail.value);

  !isValid
    ? (inputEmail.style.boxShadow = `inset 0 0 0 1px #ff4242`)
    : (inputEmail.style.boxShadow = `inset 0 0 0 1px #51cf66`);

  !isValid
    ? (errorMessage.textContent = "Check your email please")
    : (errorMessage.textContent = "Email submitted!");

  !isValid
    ? (errorMessage.style.color = `#ff4242`)
    : (errorMessage.style.color = `#51cf66`);
};

formEl.addEventListener("submit", formSubmit);
