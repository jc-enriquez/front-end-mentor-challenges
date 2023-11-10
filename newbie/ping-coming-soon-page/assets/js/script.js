"use strict";

const formEl = document.querySelector(".form");
const inputEmail = document.querySelector(".form__email");
const message = document.querySelector(".form__message");

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const resetForm = function () {
  message.textContent = "";
  inputEmail.style.border = "1px solid var(--blue)";
  inputEmail.value = "";
};

const formSubmit = function (e) {
  e.preventDefault();

  const isValid = inputEmail.value === 0 || emailRegExp.test(inputEmail.value);

  const submitError = function () {
    if (!isValid) {
      inputEmail.style.border = "1px solid var(--light-red)";
      message.textContent = "Please provide a valid email address";
      message.style.color = "var(--light-red)";
    } else {
      inputEmail.style.border = "1px solid var(--green)";
      message.textContent = "Email submitted!";
      message.style.color = "var(--green)";
    }
  };

  submitError();

  setTimeout(() => {
    resetForm();
  }, 3000);
};

formEl.addEventListener("submit", formSubmit);
