"use strict";

import images from "../data.json" assert { type: "json" };

const containerSectionCreations = document.querySelector(
  ".section-creations__content"
);

const btnMobile = document.querySelector(".btn--mobile");
const navigationEl = document.querySelector(".navigation");

const html = document.querySelector("html");
const body = document.querySelector("body");

btnMobile.addEventListener("click", function () {
  html.classList.toggle("u-overflow-y-hidden");
  body.classList.toggle("u-overflow-y-hidden");
  navigationEl.classList.toggle("navigation__open");
});

const displayImages = () => {
  images.forEach(({ desktopPath, mobilePath, captionUpper, captionLower }) => {
    const imagesEl = `
    <figure class="img-card">
      <picture>
        <source srcset="${desktopPath}" media="(min-width: 400px)"/>
        <img
          src="${mobilePath}"
          alt="${captionUpper} ${captionLower}"
          class="img-card__img"
        />
      </picture>
      <figcaption class="img-card__text">
        <span class="u-block">${captionUpper}</span>
        ${captionLower}
      </figcaption>
    </figure>
      `;
    containerSectionCreations.insertAdjacentHTML("beforeend", imagesEl);
  });
};

displayImages();
