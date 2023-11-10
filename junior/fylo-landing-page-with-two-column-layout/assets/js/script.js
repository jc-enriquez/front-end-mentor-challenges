"use strict";

const formHero = document.querySelector(".form--hero");
const formEarly = document.querySelector(".form--early");
const inputHero = document.querySelector(".input--hero");
const inputEarly = document.querySelector(".input--early");
const errorHero = document.querySelector(".error--hero");
const errorEarly = document.querySelector(".error--early");

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const errorStyleHero = function () {
  inputHero.style.border = "1px solid #ff6b6b";
  errorHero.textContent = "Please check your email";
  errorHero.style.color = "#ff6b6b";
  errorHero.style.display = "block";
};

const errorStyleEarly = function () {
  inputEarly.style.boxShadow = "inset 0 0 0 1px #ff6b6b";
  errorEarly.textContent = "Please check your email";
  errorEarly.style.color = "#f8f8fe";
  errorEarly.style.display = "block";
};

const successStyleHero = function () {
  inputHero.style.border = "1px solid #51cf66";
  errorHero.textContent = "Email submitted!";
  errorHero.style.color = "#51cf66";
  errorHero.style.display = "block";
};

const successStyleEarly = function () {
  inputEarly.style.boxShadow = "inset 0 0 0 1px #51cf66";
  errorEarly.textContent = "Email submitted!";
  errorEarly.style.color = "#51cf66";
  errorEarly.style.display = "block";
};

const resetFormHero = function () {
  inputHero.style.border = "1px solid hsl(0, 0%, 75%)";
  inputHero.value = "";
  errorHero.textContent = "";
  errorHero.style.display = "none";
};

const resetFormEarly = function () {
  inputEarly.style.boxShadow = "none";
  inputEarly.value = "";
  errorEarly.textContent = "";
  errorEarly.style.display = "none";
};

const formSubmitHero = function (e) {
  e.preventDefault();

  const isValid = inputHero.value === 0 || emailRegExp.test(inputHero.value);

  !isValid ? errorStyleHero() : successStyleHero();

  setTimeout(() => {
    resetFormHero();
  }, 3000);
};

const formSubmitEarly = function (e) {
  e.preventDefault();

  const isValid = inputEarly.value === 0 || emailRegExp.test(inputEarly.value);

  !isValid ? errorStyleEarly() : successStyleEarly();

  setTimeout(() => {
    resetFormEarly();
  }, 3000);
};

formHero.addEventListener("submit", formSubmitHero);
formEarly.addEventListener("submit", formSubmitEarly);
