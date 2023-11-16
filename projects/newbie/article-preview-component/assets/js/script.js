"use strict";

const shareBtn = document.querySelector(".share-btn");
const shareLinksEl = document.querySelector(".share-links");

const showShareLinks = function () {
  shareLinksEl.classList.toggle("hidden");
  shareBtn.classList.toggle("clicked");
};

shareBtn.addEventListener("click", showShareLinks);
