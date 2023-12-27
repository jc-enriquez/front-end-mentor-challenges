"use strict";
// Selectors
const containerProject = document.querySelector(".projects-container");
const year = document.querySelector(".year");

// Setting light mode
const body = document.querySelector("body");
const btnSwitch = document.querySelector("button");
const btnIcon = document.querySelector(".btn-icon");

const switchBtnIcon = function () {
  btnIcon.getAttribute("name") === "sunny"
    ? btnIcon.setAttribute("name", "moon")
    : btnIcon.setAttribute("name", "sunny");
};

const lightMode = function () {
  body.classList.toggle("light-mode");
  btnSwitch.classList.toggle("btn--light");
  switchBtnIcon();
};

btnSwitch.addEventListener("click", lightMode);

// Display Projects
const projects = {
  proj1: {
    title: "Product Preview Card Component",
    projLink: "projects/newbie/product-preview-card-component/",
    codeLink:
      "https://github.com/jc-ve/front-end-mentor-challenges/tree/main/projects/newbie/product-preview-card-component",
    imgLink:
      "https://cdn.jsdelivr.net/gh/jc-ve/images-thumbnail/product-preview-card-component.jpg",
    difficulty: "Newbie",
    skills: {
      html: "HTML",
      css: "CSS",
    },
  },
  proj2: {
    title: "Results Summary Component",
    projLink: "projects/newbie/results-summary-component/",
    codeLink:
      "https://github.com/jc-ve/front-end-mentor-challenges/tree/main/projects/newbie/results-summary-component",
    imgLink:
      "https://cdn.jsdelivr.net/gh/jc-ve/images-thumbnail/results-summary-component.jpg",
    difficulty: "Newbie",
    skills: {
      html: "HTML",
      css: "CSS",
    },
  },
  proj3: {
    title: "Order Summary Component",
    projLink: "projects/newbie/order-summary-component/",
    codeLink:
      "https://github.com/jc-ve/front-end-mentor-challenges/tree/main/projects/newbie/order-summary-component",
    imgLink:
      "https://cdn.jsdelivr.net/gh/jc-ve/images-thumbnail/order-summary-component.jpg",
    difficulty: "Newbie",
    skills: {
      html: "HTML",
      css: "CSS",
    },
  },
  proj4: {
    title: "QR Code Component",
    projLink: "projects/newbie/qr-code-component/",
    codeLink:
      "https://github.com/jc-ve/front-end-mentor-challenges/tree/main/projects/newbie/order-summary-component",
    imgLink:
      "https://cdn.jsdelivr.net/gh/jc-ve/images-thumbnail/qr-code-component.jpg",
    difficulty: "Newbie",
    skills: {
      html: "HTML",
      css: "CSS",
    },
  },
  proj5: {
    title: "NFT Preview Card Component",
    projLink: "projects/newbie/nft-preview-card-component/",
    codeLink:
      "https://github.com/jc-ve/front-end-mentor-challenges/tree/main/projects/newbie/nft-preview-card-component",
    imgLink:
      "https://cdn.jsdelivr.net/gh/jc-ve/images-thumbnail/nft-preview-card-component.jpg",
    difficulty: "Newbie",
    skills: {
      html: "HTML",
      css: "CSS",
    },
  },
  proj6: {
    title: "Stats Preview Card Component",
    projLink: "projects/newbie/stats-preview-card-component/",
    codeLink:
      "https://github.com/jc-ve/front-end-mentor-challenges/tree/main/projects/newbie/stats-preview-card-component",
    imgLink:
      "https://cdn.jsdelivr.net/gh/jc-ve/images-thumbnail/stats-preview-card-component.jpg",
    difficulty: "Newbie",
    skills: {
      html: "HTML",
      css: "CSS",
    },
  },
  proj7: {
    title: "3-Column Preview Card Component",
    projLink: "projects/newbie/three-column-preview-card-component/",
    codeLink:
      "https://github.com/jc-ve/front-end-mentor-challenges/tree/main/projects/newbie/three-column-preview-card-component",
    imgLink:
      "https://cdn.jsdelivr.net/gh/jc-ve/images-thumbnail/three-column-preview-card-component.jpg",
    difficulty: "Newbie",
    skills: {
      html: "HTML",
      css: "CSS",
    },
  },
  proj8: {
    title: "Profile Card Component",
    projLink: "projects/newbie/profile-card-component/",
    codeLink:
      "https://github.com/jc-ve/front-end-mentor-challenges/tree/main/projects/newbie/profile-card-component",
    imgLink:
      "https://cdn.jsdelivr.net/gh/jc-ve/images-thumbnail/profile-card-component.jpg",
    difficulty: "Newbie",
    skills: {
      html: "HTML",
      css: "CSS",
    },
  },
  proj9: {
    title: "Social Proof Section",
    projLink: "projects/newbie/social-proof-section/",
    codeLink:
      "https://github.com/jc-ve/front-end-mentor-challenges/tree/main/projects/newbie/social-proof-section",
    imgLink:
      "https://cdn.jsdelivr.net/gh/jc-ve/images-thumbnail/social-proof-section.jpg",
    difficulty: "Newbie",
    skills: {
      html: "HTML",
      css: "CSS",
    },
  },
  proj10: {
    title: "Four Card Feature Section",
    projLink: "projects/newbie/four-card-feature-section/",
    codeLink:
      "https://github.com/jc-ve/front-end-mentor-challenges/tree/main/projects/newbie/four-card-feature-section",
    imgLink:
      "https://cdn.jsdelivr.net/gh/jc-ve/images-thumbnail/four-card-feature-section.jpg",
    difficulty: "Newbie",
    skills: {
      html: "HTML",
      css: "CSS",
    },
  },
  proj11: {
    title: "Single Price Grid Component",
    projLink: "projects/newbie/single-price-grid-component/",
    codeLink:
      "https://github.com/jc-ve/front-end-mentor-challenges/tree/main/projects/newbie/single-price-grid-component",
    imgLink:
      "https://cdn.jsdelivr.net/gh/jc-ve/images-thumbnail/single-price-grid-component.jpg",
    difficulty: "Newbie",
    skills: {
      html: "HTML",
      css: "CSS",
    },
  },
  proj12: {
    title: "Huddle Landing Page with a Single Introductory Section",
    projLink: "projects/newbie/huddle-landing-page-with-introductory-section/",
    codeLink:
      "https://github.com/jc-ve/front-end-mentor-challenges/tree/main/projects/newbie/huddle-landing-page-with-introductory-section",
    imgLink:
      "https://cdn.jsdelivr.net/gh/jc-ve/images-thumbnail/huddle-landing-page-with-single-introductory-section.jpg",
    difficulty: "Newbie",
    skills: {
      html: "HTML",
      css: "CSS",
    },
  },
  proj13: {
    title: "Interactive Rating Component",
    projLink: "projects/newbie/interactive-rating-component/",
    codeLink:
      "https://github.com/jc-ve/front-end-mentor-challenges/tree/main/projects/newbie/interactive-rating-component",
    imgLink:
      "https://cdn.jsdelivr.net/gh/jc-ve/images-thumbnail/interactive-rating-component.jpg",
    difficulty: "Newbie",
    skills: {
      html: "HTML",
      css: "CSS",
      js: "JavaScript",
    },
  },
  proj14: {
    title: "Article Preview Component",
    projLink: "projects/newbie/article-preview-component/",
    codeLink:
      "https://github.com/jc-ve/front-end-mentor-challenges/tree/main/projects/newbie/article-preview-component",
    imgLink:
      "https://cdn.jsdelivr.net/gh/jc-ve/images-thumbnail/article-preview-component.jpg",
    difficulty: "Newbie",
    skills: {
      html: "HTML",
      css: "CSS",
      js: "JavaScript",
    },
  },
  proj15: {
    title: "Ping Coming Soon Page",
    projLink: "projects/newbie/ping-coming-soon-page/",
    codeLink:
      "https://github.com/jc-ve/front-end-mentor-challenges/tree/main/projects/newbie/ping-coming-soon-page",
    imgLink:
      "https://cdn.jsdelivr.net/gh/jc-ve/images-thumbnail/ping-coming-soon-page.jpg",
    difficulty: "Newbie",
    skills: {
      html: "HTML",
      css: "CSS",
      js: "JavaScript",
    },
  },
  proj16: {
    title: "Base Apparel Coming Soon Page",
    projLink: "projects/newbie/base-apparel-coming-soon-page/",
    codeLink:
      "https://github.com/jc-ve/front-end-mentor-challenges/tree/main/projects/newbie/base-apparel-coming-soon-page",
    imgLink:
      "https://cdn.jsdelivr.net/gh/jc-ve/images-thumbnail/base-apparel-coming-soon.jpg",
    difficulty: "Newbie",
    skills: {
      html: "HTML",
      css: "CSS",
      js: "JavaScript",
    },
  },
  proj17: {
    title: "Intro Component with Sign-Up Form",
    projLink: "projects/newbie/intro-component-with-signup-form/",
    codeLink:
      "https://github.com/jc-ve/front-end-mentor-challenges/tree/main/projects/newbie/intro-component-with-signup-form",
    imgLink:
      "https://cdn.jsdelivr.net/gh/jc-ve/images-thumbnail/intro-component-with-signup-form.jpg",
    difficulty: "Newbie",
    skills: {
      html: "HTML",
      css: "CSS",
      js: "JavaScript",
    },
  },
  proj18: {
    title: "FAQ Accordion Card",
    projLink: "projects/newbie/faq-accordion-card/",
    codeLink:
      "https://github.com/jc-ve/front-end-mentor-challenges/tree/main/projects/newbie/faq-accordion-card",
    imgLink:
      "https://cdn.jsdelivr.net/gh/jc-ve/images-thumbnail/faq-accordion-card.jpg",
    difficulty: "Newbie",
    skills: {
      html: "HTML",
      css: "CSS",
      js: "JavaScript",
    },
  },
  proj19: {
    title: "Testimonials Grid Section",
    projLink: "projects/junior/testimonials-grid-section/",
    codeLink:
      "https://github.com/jc-ve/front-end-mentor-challenges/tree/main/projects/junior/testimonials-grid-section",
    imgLink:
      "https://cdn.jsdelivr.net/gh/jc-ve/images-thumbnail/testimonials-grid-section.jpg",
    difficulty: "Junior",
    skills: {
      html: "HTML",
      css: "CSS",
    },
  },
  proj20: {
    title: "Huddle Landing Page with Alternating Feature Blocks",
    projLink:
      "projects/junior/huddle-landing-page-with-alternating-feature-blocks/",
    codeLink:
      "https://github.com/jc-ve/front-end-mentor-challenges/tree/main/projects/junior/huddle-landing-page-with-alternating-feature-blocks",
    imgLink:
      "https://cdn.jsdelivr.net/gh/jc-ve/images-thumbnail/huddle-landing-page-with-alternating-feature-blocks.jpg",
    difficulty: "Junior",
    skills: {
      html: "HTML",
      css: "CSS",
      sass: "SASS",
    },
  },
  proj21: {
    title: "Huddle Landing Page with Curve Sections",
    projLink: "projects/junior/huddle-landing-page-with-curve-sections/",
    codeLink:
      "https://github.com/jc-ve/front-end-mentor-challenges/tree/main/projects/junior/huddle-landing-page-with-curve-sections",
    imgLink:
      "https://cdn.jsdelivr.net/gh/jc-ve/images-thumbnail/huddle-landing-page-with-alternating-feature-blocks.jpg",
    difficulty: "Junior",
    skills: {
      html: "HTML",
      css: "CSS",
      sass: "SASS",
      js: "JavaScript",
    },
  },
  proj22: {
    title: "Fylo Landing Page with Two-Column Layout",
    projLink: "projects/junior/fylo-landing-page-with-two-column-layout/",
    codeLink:
      "https://github.com/jc-ve/front-end-mentor-challenges/tree/main/projects/junior/fylo-landing-page-with-two-column-layout",
    imgLink:
      "https://cdn.jsdelivr.net/gh/jc-ve/images-thumbnail/fylo-landing-age-with-two-column-layout.jpg",
    difficulty: "Junior",
    skills: {
      html: "HTML",
      css: "CSS",
      sass: "SASS",
      js: "JavaScript",
    },
  },
  proj23: {
    title: "News Homepage",
    projLink: "projects/junior/news-homepage/",
    codeLink:
      "https://github.com/jc-ve/front-end-mentor-challenges/tree/main/projects/junior/news-homepage",
    imgLink:
      "https://cdn.jsdelivr.net/gh/jc-ve/images-thumbnail/news-homepage.jpg",
    difficulty: "Junior",
    skills: {
      html: "HTML",
      css: "CSS",
      sass: "SASS",
      js: "JavaScript",
    },
  },
};

Object.values(projects).forEach((project) => {
  const html = `
  <div class="card card--${project.difficulty.toLowerCase()}">
    <img
      src="${project.imgLink}"
      alt="${project.title} preview image"
      class="card__img"
    />

    <div class="card__body">
      <span class="card__difficulty card__difficulty--${project.difficulty.toLowerCase()}"
        >${project.difficulty}</span
      >
      <div class="card__skills">
      ${Object.values(project.skills).forEach((skill) => {
        console.log(skill);
      })}
      </div>
      <div class="card__text">
        <a href="#" class="card__title">${project.title}</a>
      </div>
      <div class="card__links">
        <a href="${
          project.projLink
        }" target="_blank" class="btn btn--solid">View Project</a>
        <a href="${
          project.codeLink
        }" target="_blank" class="btn btn--outlined">View Code</a>
      </div>
    </div>
  </div>
    `;
  containerProject.insertAdjacentHTML("afterbegin", html);
});

// Setting year
const currentYear = new Date().getFullYear();
year.textContent = currentYear;
