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

const checkInputHero = () => {
  isValid = inputHero.value === 0 || emailRegExp.test(inputHero.value);

  inputHero.style.border = `1px solid ${!isValid ? "#ff6b6b" : "#51cf66"}`;
  errorHero.style.display = "block";
  errorHero.style.color = `${!isValid ? "#ff6b6b" : "#51cf66"}`;
  errorHero.textContent = `${
    !isValid ? "Please check your email" : "Email submitted!"
  }`;
};

const checkInputEarly = () => {
  isValid = inputEarly.value === 0 || emailRegExp.test(inputEarly.value);

  inputEarly.style.boxShadow = `0 0 0 1px inset ${
    !isValid ? "#ff6b6b" : "#51cf66"
  }`;
  errorEarly.style.display = "block";
  errorEarly.style.color = `${!isValid ? "#ff6b6b" : "#51cf66"}`;
  errorEarly.textContent = `${
    !isValid ? "Please check your email" : "Email submitted!"
  }`;
};

const resetFormHero = () => {
  inputHero.style.border = "1px solid hsl(0, 0%, 75%)";
  errorHero.style.display = "none";
  errorHero.style.textContent = "";
};

const resetFormEarly = () => {
  inputEarly.style.boxShadow = "none";
  errorEarly.style.display = "none";
  errorEarly.style.textContent = "";
};

const submitFormHero = (e) => {
  e.preventDefault();

  checkInputHero();

  setTimeout(() => {
    resetFormHero();
  }, 3000);
};

const submitFormEarly = (e) => {
  e.preventDefault();

  checkInputEarly();

  setTimeout(() => {
    resetFormEarly();
  }, 3000);
};

formHero.addEventListener("submit", submitFormHero);
formEarly.addEventListener("submit", submitFormEarly);
