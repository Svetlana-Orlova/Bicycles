"use strict";
const body = document.body;
const navMain = document.querySelector(".main-nav");
const navToggle = document.querySelector(".main-nav__toggle");
const anchors = document.querySelectorAll(".main-nav__item a");
const inputs = document.querySelectorAll("input");
const links = document.querySelectorAll(".page-main a");
const buttons = document.querySelectorAll(".page-main button");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", () => {
  if (navMain.classList.contains("main-nav--closed")) {
    openMenu();
  } else {
    closeMenu();
  }
});

const openMenu = () => {
  navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
    body.classList.add("fixed");
    disableItems(inputs);
    disableItems(links);
    disableItems(buttons);
}

const closeMenu = () => {
  navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
    body.classList.remove("fixed");
    enableItems(inputs);
    enableItems(links);
    enableItems(buttons);
}

const disableItems = (items) => {
  items.forEach((item) => {
    item.setAttribute(`disabled`, true);
  });
};

const enableItems = (items) => {
  items.forEach((item) => {
    item.removeAttribute(`disabled`);
  });
};

for (let anchor of anchors) {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();

    const sectionID = anchor.getAttribute("href").substr(1);

    document.getElementById(sectionID).scrollIntoView({
        behavior: "smooth",
        section: "start"
      });

    closeMenu();
  });
};
