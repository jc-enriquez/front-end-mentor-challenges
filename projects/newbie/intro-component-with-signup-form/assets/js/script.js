"use strict";

const form = document.querySelector(".form");
const inputFirstName = document.querySelector(".input--firstname");
const inputLastName = document.querySelector(".input--lastname");
const inputEmail = document.querySelector(".input--email");
const inputPassword = document.querySelector(".input--password");

const errorFirstName = document.querySelector(".error-message--firstname");
const errorLastName = document.querySelector(".error-message--lastname");
const errorEmail = document.querySelector(".error-message--email");
const errorPassword = document.querySelector(".error-message--password");

const borderRed = "1px solid var(--red)";
const borderBlue = "1px solid var(--grayish-blue)";
const backgroundError = "url(assets/images/icon-error.svg) no-repeat 95%";

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let isValidEmail;

const inputCheck = function () {
  isValidEmail = inputEmail.value === 0 || emailRegExp.test(inputEmail.value);

  if (inputFirstName.value === "") {
    inputFirstName.style.border = borderRed;
    inputFirstName.style.background = backgroundError;
    errorFirstName.textContent = "First name cannot be empty";
  }

  if (inputLastName.value === "") {
    inputLastName.style.border = borderRed;
    inputLastName.style.background = backgroundError;
    errorLastName.textContent = "Last name cannot be empty";
  }

  if (!isValidEmail) {
    inputEmail.style.border = borderRed;
    inputEmail.style.color = "var(--red)";
    inputEmail.style.background = backgroundError;
    errorEmail.textContent = "Looks like this is not an email";
  }

  if (inputPassword.value === "") {
    inputPassword.style.border = borderRed;
    inputPassword.style.background = backgroundError;
    errorPassword.textContent = "Password cannot be empty";
  }
};

const inputReset = function () {
  inputFirstName.style.border = borderBlue;
  inputFirstName.style.background = "none";
  errorFirstName.textContent = "";

  inputLastName.style.border = borderBlue;
  inputLastName.style.background = "none";
  errorLastName.textContent = "";

  inputEmail.style.border = borderBlue;
  inputEmail.style.background = "none";
  errorEmail.textContent = "";

  inputPassword.style.border = borderBlue;
  inputPassword.style.background = "none";
  errorPassword.textContent = "";
};

const formSubmit = function (e) {
  e.preventDefault();
  inputCheck();

  setTimeout(() => {
    inputReset();
  }, 5000);
};

form.addEventListener("submit", formSubmit);
