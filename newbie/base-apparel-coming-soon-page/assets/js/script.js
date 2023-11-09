const formEl = document.querySelector(".form");
const inputGroup = document.querySelector(".form__input-group");
const inputEmail = document.querySelector(".form__input-email");
const errorIcon = document.querySelector(".form__input-error-icon");
const message = document.querySelector(".form__input-message");

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const resetForm = function () {
  message.textContent = "";
  inputGroup.style.border = "1px solid var(--desaturated-red)";
  errorIcon.style.display = "none";
  inputEmail.value = "";
};

const formSubmit = function (e) {
  e.preventDefault();

  const isValid = inputEmail.value === 0 || emailRegExp.test(inputEmail.value);

  const submitError = function () {
    if (!isValid) {
      inputGroup.style.border = "1px solid var(--soft-red)";
      message.textContent = "Please provide a valid email address";
      message.style.color = "var(--soft-red)";
      errorIcon.style.display = "block";
    } else {
      inputGroup.style.border = "1px solid var(--green)";
      message.textContent = "Email submitted!";
      message.style.color = "var(--green)";
      errorIcon.style.display = "none";
    }
  };

  submitError();

  setTimeout(() => {
    resetForm();
  }, 3000);
};

formEl.addEventListener("submit", formSubmit);
