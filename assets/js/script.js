"use strict";

import projects from "../data.json" assert { type: "json" };
// console.log(projects.findIndex((_, index) => console.log(index <= 2)));

// Selectors
const containerProject = document.querySelector(".projects-container");
const year = document.querySelector(".year");

const body = document.querySelector("body");
const btnSwitch = document.querySelector(".btn--mode");
const btnScroll = document.querySelector(".btn--scroll");
const iconBtn = document.querySelector(".btn-icon");

// Setting dark mode
const switchBtnIcon = () => {
  iconBtn.getAttribute("name") === "moon"
    ? iconBtn.setAttribute("name", "sunny")
    : iconBtn.setAttribute("name", "moon");
};

const darkMode = () => {
  body.classList.toggle("dark-mode");
  btnSwitch.classList.toggle("btn--light");
  switchBtnIcon();
};

btnSwitch.addEventListener("click", darkMode);

// Scroll to top
const hideBtnScroll = () => {
  btnScroll.style.display = "none";
  btnScroll.style.visibility = "hidden";
  btnScroll.style.opacity = 0;
};

const showBtnScroll = () => {
  btnScroll.style.display = "flex";
  btnScroll.style.visibility = "visible";
  btnScroll.style.opacity = 1;
};

const watchScroll = () => {
  document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    ? showBtnScroll()
    : hideBtnScroll();
};

const scrollToTop = () => {
  body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

window.addEventListener("scroll", watchScroll);
btnScroll.addEventListener("click", scrollToTop);

const displayProject = () => {
  projects.forEach(
    ({ title, projLink, codeLink, imgLink, difficulty, skills }) => {
      let skillsContainer = [];

      skills.forEach((skill) => {
        skillsContainer.push(
          `<span class="card__skill card__skill--${skill.toLowerCase()}">${skill}</span>`
        );
      });

      const html = `
        <div class="card card--${difficulty.toLowerCase()}">
        <img
          src="${imgLink}"
          alt="${title} preview image"
          class="card__img"
        />

        <div class="card__body">
          <span class="card__difficulty card__difficulty--${difficulty.toLowerCase()}"
            >${difficulty}</span
          >
          <div class="card__skills">
            ${skillsContainer.join("")}
          </div>
          <div class="card__text">
            <a href="${projLink}" target="_blank" class="card__title">${title}</a>
          </div>
          <div class="card__links">
            <a href="${projLink}" target="_blank" class="btn btn--full">View Project</a>
            <a href="${codeLink}" target="_blank" class="btn btn--icon" aria-label="Link for code">
              <ion-icon name="code-slash-outline"></ion-icon>
            </a>
          </div>
        </div>
      </div>
        `;
      containerProject.insertAdjacentHTML("afterbegin", html);
    }
  );
};

displayProject();

// Setting year
const currentYear = new Date().getFullYear();
year.textContent = currentYear;
