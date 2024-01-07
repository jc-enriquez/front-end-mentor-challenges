"use strict";

// Selectors
const containerProject = document.querySelector(".projects-container");
const year = document.querySelector(".year");

const body = document.querySelector("body");
const btnSwitch = document.querySelector(".btn--mode");
const btnScroll = document.querySelector(".btn--scroll");
const iconBtn = document.querySelector(".btn-icon");

const btnLoadMore = document.querySelector(".btn--solid");

let startingIndex = 0;
let endingIndex = 6;
let projectsDataArr = [];

fetch("https://cdn.jsdelivr.net/gh/jc-ve/projects-data/front-end-mentor.json")
  .then((res) => res.json())
  .then((data) => {
    projectsDataArr = data;
    displayProjects(projectsDataArr.slice(startingIndex, endingIndex));
  })
  .catch((err) => {
    containerProject.innerHTML = `<p>No data retrieved. ${err}</p>`;
  });

const fetchMoreProjects = () => {
  startingIndex += 6;
  endingIndex += 6;

  displayProjects(projectsDataArr.slice(startingIndex, endingIndex));

  if (projectsDataArr.length <= endingIndex) {
    btnLoadMore.style.display = "none";
  }
};

const displayProjects = (projects) => {
  projects.forEach(
    ({ title, projLink, codeLink, imgLink, difficulty, skills }, index) => {
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
      containerProject.insertAdjacentHTML("beforeend", html);
    }
  );
};

btnLoadMore.addEventListener("click", fetchMoreProjects);

// Setting dark mode
const darkMode = () => {
  iconBtn.getAttribute("name") === "moon"
    ? iconBtn.setAttribute("name", "sunny")
    : iconBtn.setAttribute("name", "moon");

  body.classList.toggle("dark-mode");
  btnSwitch.classList.toggle("btn--light");
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

// Setting year
const currentYear = new Date().getFullYear();
year.textContent = currentYear;
