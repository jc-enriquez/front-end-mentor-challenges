"use strict";

const formEl = document.querySelector(".newsletter__form");
const inputEmail = document.querySelector(".newsletter__input");
const errorMessage = document.querySelector(".error-message");

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let isValid;

const errorStyle = function () {
  inputEmail.style.boxShadow = `inset 0 0 0 1px #ff4242`;
  errorMessage.textContent = "Check your email please";
  errorMessage.style.color = `#ff4242`;
};

const successStyle = function () {
  inputEmail.style.boxShadow = `inset 0 0 0 1px #51cf66`;
  errorMessage.textContent = "Email submitted!";
  errorMessage.style.color = `#51cf66`;
};

const checkInput = function () {
  isValid = inputEmail.value === 0 || emailRegExp.test(inputEmail.value);
  !isValid ? errorStyle() : successStyle();
};

const resetForm = function () {
  inputEmail.style.boxShadow = "none";
  inputEmail.value = "";
  errorMessage.style.display = "none";
};

const formSubmit = function (e) {
  e.preventDefault();

  checkInput();

  errorMessage.style.display = "block";

  setTimeout(() => {
    resetForm();
  }, 3000);
};

formEl.addEventListener("submit", formSubmit);
