"use strict";

import images from "../data.json" assert { type: "json" };

const containerSectionCreations = document.querySelector(
  ".section-creations__content"
);

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
