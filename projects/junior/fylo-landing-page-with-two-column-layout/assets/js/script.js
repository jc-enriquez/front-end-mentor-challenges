"use strict";

const formHero = document.querySelector(".form--hero");
const formEarly = document.querySelector(".form--early");
const input = document.querySelectorAll(".input");
const error = document.querySelector(".error");

const inputHero = document.querySelector(".input--hero");
const inputEarly = document.querySelector(".input--early");
const errorHero = document.querySelector(".error--hero");
const errorEarly = document.querySelector(".error--early");

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let isValid;

const errorStyle = function () {
  if (input.classList.contains("input--hero")) {
    inputHero.style.border = "1px solid #ff6b6b";
    error.style.color = "#ff6b6b";
  }

  if (input.classList.contains("input--early")) {
    input.style.boxShadow = "inset 0 0 0 1px #ff6b6b";
    error.style.color = "#f8f8fe";
  }

  error.style.display = "block";
  error.textContent = "Please check your email";
};

const successStyle = function () {
  if (input.classList.contains("input--hero")) {
    input.style.border = "1px solid #51cf66";
    error.style.color = "#51cf66";
  }

  if (input.classList.contains("input--early")) {
    input.style.boxShadow = "inset 0 0 0 1px #51cf66";
    error.style.color = "#51cf66";
  }

  error.style.display = "block";
  error.textContent = "Email submitted!";
};

const resetForm = function () {
  input.classList.contains("input--hero")
    ? (input.style.border = "1px solid hsl(0, 0%, 75%)")
    : (input.style.boxShadow = "none");

  input.value = "";
  error.textContent = "";
  error.style.display = "none";
};

const formSubmit = function (e) {
  e.preventDefault();

  isValid = input.value === 0 || emailRegExp.test(input.value);

  !isValid ? errorStyle() : successStyle();

  setTimeout(() => {
    resetForm();
  }, 3000);
};

formHero.addEventListener("submit", formSubmit);
formEarly.addEventListener("submit", formSubmit);
