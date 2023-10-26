const formEl = document.querySelector(".form");
const messageEl = document.querySelector(".message");
const scoreEl = document.querySelector(".score");

const submitForm = function (e) {
  e.preventDefault();
  formEl.classList.add("hidden");
  messageEl.classList.add("visible");

  const selectedScore = document.querySelector(".form__rating:checked").value;
  scoreEl.textContent = selectedScore;
};

formEl.addEventListener("submit", submitForm);
