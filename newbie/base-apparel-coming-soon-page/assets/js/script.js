const formEl = document.querySelector(".form");
const inputGroup = document.querySelector(".form__input-group");
const inputEmail = document.querySelector(".form__input-email");
const errorIcon = document.querySelector(".form__input-error-icon");
const message = document.querySelector(".form__input-message");

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const formSubmit = function (e) {
  e.preventDefault();
  const isValid = inputEmail.value === 0 || emailRegExp.test(inputEmail.value);

  if (!isValid) {
    if (
      inputGroup.classList.contains("valid") ||
      errorIcon.classList.contains("visible") ||
      message.classList.contains("visible", "success")
    ) {
      inputGroup.classList.remove("valid");
      errorIcon.classList.remove("invisible");
      message.classList.remove("invisible", "success");
    }
    inputGroup.classList.add("invalid");
    errorIcon.classList.add("visible");
    message.classList.add("visible", "error");
    message.textContent = "Please provide a valid email address";
  } else {
    if (
      inputGroup.classList.contains("invalid") ||
      errorIcon.classList.contains("visible") ||
      message.classList.contains("visible", "error")
    ) {
      inputGroup.classList.remove("invalid");
      errorIcon.classList.remove("visible");
      message.classList.remove("visible", "error");
    }
    inputGroup.classList.add("valid");
    message.classList.add("visible", "success");
    message.textContent = "Email address submitted";
  }
};

formEl.addEventListener("submit", formSubmit);
