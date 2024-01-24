"use strict";

const btnReadAll = document.querySelector(".btn--notification");
const unreadNotifications = document.querySelectorAll(
  ".notification__list__item--unread"
);
const unreadSymbols = document.querySelectorAll(".notification__symbol");
const notificationTotal = document.querySelector(".notification__total");

const removeUnreadStyle = () => {
  notificationTotal.textContent = 0;
  unreadNotifications.forEach((notification) => {
    notification.classList.remove("notification__list__item--unread");
  });
  unreadSymbols.forEach((symbol) => {
    symbol.classList.add("u-hidden");
  });
};

btnReadAll.addEventListener("click", removeUnreadStyle);
