const formEl = document.querySelector(".form");
const inputEmail = document.querySelector(".form__email");
const message = document.querySelector(".form__message");

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const formSubmit = function (e) {
  e.preventDefault();
  const isValid = inputEmail.value === 0 || emailRegExp.test(inputEmail.value);

  if (!isValid) {
    if (
      inputEmail.classList.contains("valid") ||
      message.classList.contains("visible", "success")
    ) {
      inputEmail.classList.remove("valid");
      message.classList.remove("invisible", "success");
    }
    inputEmail.classList.add("invalid");
    message.classList.add("visible", "error");
    message.textContent = "Please provide a valid email address";
  } else {
    if (
      inputEmail.classList.contains("invalid") ||
      message.classList.contains("visible", "error")
    ) {
      inputEmail.classList.remove("invalid");
      message.classList.remove("visible", "error");
    }
    inputEmail.classList.add("valid");
    message.classList.add("visible", "success");
    message.textContent = "Email address provided is valid";
  }
};

formEl.addEventListener("submit", formSubmit);
