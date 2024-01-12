"use strict";

import testimonials from "../data.json" assert { type: "json" };

const containerTestimonials = document.querySelector(
  ".social-proof__testimonials"
);

const containerReviews = document.querySelector(".social-proof__ratings");

const reviews = [
  "Rated 5 Stars in Reviews",
  "Rated 5 Stars in Report Guru",
  "Rated 5 Stars in BestTech",
];

const displayReviews = () => {
  reviews.forEach((review) => {
    const reviewEl = `
    <div class="social-proof__rating">
      <div class="social-proof__rating-stars">
        <img src="assets/images/icon-star.svg" alt="Star icon" />
        <img src="assets/images/icon-star.svg" alt="Star icon" />
        <img src="assets/images/icon-star.svg" alt="Star icon" />
        <img src="assets/images/icon-star.svg" alt="Star icon" />
        <img src="assets/images/icon-star.svg" alt="Star icon" />
      </div>
      <p class="social-proof__rating-caption">${review}</p>
    </div>`;
    containerReviews.insertAdjacentHTML("beforeend", reviewEl);
  });
};

displayReviews();

const displayTestimonials = () => {
  testimonials.forEach(({ name, imgPath, review }) => {
    const testimonialEl = `
    <figure class="social-proof__testimonial">
      <div class="social-proof__testimonial-author">
        <img src="${imgPath}" alt="${name}" class="social-proof__testimonial-avatar" />
        <div class="social-proof__testimonial-name">
          <span class="testimonial-name">${name}</span>
          <span class="testimonial-role">Verified Buyer</span>
        </div>
      </div>
      <blockquote class="social-proof__testimonial-review">${review}</blockquote>
    </figure>
    `;
    containerTestimonials.insertAdjacentHTML("beforeend", testimonialEl);
  });
};

displayTestimonials();
