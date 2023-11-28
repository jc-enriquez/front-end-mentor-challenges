"use strict";

const form = document.querySelector(".form");
const inputFirstName = document.querySelector(".input--firstname");
const inputLastName = document.querySelector(".input--lastname");
const inputEmail = document.querySelector(".input--email");
const inputPassword = document.querySelector(".input--password");

const borderRed = "1px solid var(--red)";
const borderGreen = "1px solid var(--green)";

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let isValidEmail;

const inputCheck = function () {
  inputFirstName.value === 0
    ? (inputFirstName.style.border = borderGreen)
    : (inputFirstName.style.border = borderRed);

  inputFirstName.value === 0
    ? (inputFirstName.style.background = "none")
    : (inputFirstName.style.background =
        "url(../assets/images/icon-error.svg)");

  inputLastName.value === 0
    ? (inputLastName.style.border = borderGreen)
    : (inputLastName.style.border = borderRed);

  inputPassword.value === 0
    ? (inputPassword.style.border = borderGreen)
    : (inputPassword.style.border = borderRed);
};

const emailCheck = function () {
  isValidEmail = inputEmail.value === 0 || emailRegExp.test(inputEmail.value);

  if (!isValidEmail) {
    inputEmail.style.border = borderRed;
    inputEmail.style.color = "var(--red)";
    inputEmail.style.background = "url(../images/icon-error.svg)";
  } else {
    inputEmail.style.border = borderGreen;
    inputEmail.style.color = "var(--blue)";
  }
};

const formSubmit = function (e) {
  e.preventDefault();

  inputCheck();
  emailCheck();
};

form.addEventListener("submit", formSubmit);
