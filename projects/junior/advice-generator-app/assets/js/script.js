"use strict";

const cardNumber = document.querySelector(".card__number");
const cardQuote = document.querySelector(".card__quote");
const btnGenerate = document.querySelector(".btn--generate");

const adviceUrl = "https://api.adviceslip.com/advice";

const getAdvice = async () => {
  fetch(adviceUrl)
    .then((response) => {
      if (response.status !== 200) {
        cardNumber.textContent = response.status;
        cardQuote.textContent =
          "Looks like there was a problem. Status Code: " + response.status;
        return;
      }
      response.json().then(({ slip: { id, advice } }) => {
        cardNumber.textContent = id;
        cardQuote.textContent = advice;
      });
    })
    .catch((err) => {
      cardNumber.textContent = `${err}`;
      cardQuote.textContent = `Fetch error: ${err}`;
    });
};

getAdvice();

btnGenerate.addEventListener("click", getAdvice);
