"use script";

import testimonial from "../data.json" with { type: "json" };

const containerTestimonials = document.querySelector(".testimonials");

const displayTestimonials = () => {
  testimonial.forEach(({ name, title, review, isColored, color, imgPath }) => {
    const testimonialEl = `
    <figure class="testimonials__card ${
      isColored === true ? `testimonials__card--${color}` : ""
    }">
      <div class="testimonials__author">
        <img src="${imgPath}" alt="${name}" class="testimonials__author-img"/>
        <div>
          <span class="testimonials__author-name">${name}</span>
          <span class="testimonials__author-role">Verified Graduate</span>
        </div>
      </div>
      <p class="testimonials__title">${title}</p>
      <blockquote class="testimonials__review">${review}</blockquote>
    </figure>
    `;
    containerTestimonials.insertAdjacentHTML("beforeend", testimonialEl);
  });
};

displayTestimonials();
