"use strict";

import instructions from "../data.json" assert { type: "json" };

const listPreparation = document.querySelector(".recipe__list--preparation");
const listIngredients = document.querySelector(".recipe__list--ingredients");
const listInstructions = document.querySelector(".recipe__list--instructions");
const tableRecipe = document.querySelector(".recipe__table-body");

const preparation = [
  {
    title: "Total",
    description: "Approximately 10 minutes",
  },
  {
    title: "Preparation",
    description: "5 minutes",
  },
  {
    title: "Cooking",
    description: "5 minutes",
  },
];

const ingredients = [
  "2-3 large eggs",
  "Salt, to taste",
  " Pepper, to taste",
  "1 tablespoon of butter or oil",
  "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
];

const nutrients = [
  {
    title: "Calories",
    value: "277kcal",
  },
  {
    title: "Carbs",
    value: "0g",
  },
  {
    title: "Protein",
    value: "20g",
  },
  {
    title: "Fat",
    value: "22g",
  },
];

const displayPreparation = () => {
  preparation.forEach(({ title, description }) => {
    const listEl = `
    <li class="recipe__list__item recipe__list__item--purple">
      <span>
        <strong>${title}</strong>: ${description}
      </span>
    </li>`;
    listPreparation.insertAdjacentHTML("beforeend", listEl);
  });
};

displayPreparation();

const displayIngredients = () => {
  ingredients.forEach((ingredient) => {
    const listEl = `
    <li class="recipe__list__item recipe__list__item--red">
      <span>${ingredient}</span>
    </li>
    `;
    listIngredients.insertAdjacentHTML("beforeend", listEl);
  });
};

displayIngredients();

const displayInstructions = () => {
  instructions.forEach(({ title, description }) => {
    const listEl = `
    <li class="recipe__list__item recipe__list__item--red">
      <span>
        <strong>${title}</strong>: ${description}
      </span>
    </li> 
    `;
    listInstructions.insertAdjacentHTML("beforeend", listEl);
  });
};

displayInstructions();

const displayNutrients = () => {
  nutrients.forEach(({ title, value }) => {
    const tableRow = `
    <tr class="recipe__row">
      <td class="recipe__data recipe__data--title">${title}</td>
      <td class="recipe__data recipe__data--value">${value}</td>
    </tr>
    `;
    tableRecipe.insertAdjacentHTML("beforeend", tableRow);
  });
};

displayNutrients();
