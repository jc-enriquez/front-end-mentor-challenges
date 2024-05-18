"use strict";

const form = document.getElementById("form");
const inputFirstName = document.getElementById("first-name");
const inputLastName = document.getElementById("last-name");
const inputEmail = document.getElementById("email");
const inputMessage = document.getElementById("message");

const validateForm = (e) => {
  e.preventDefault();
};

form.addEventListener("submit", validateForm);
