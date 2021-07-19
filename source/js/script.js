"use strict";
const navMain = document.querySelector(".main-nav");
const navToggle = document.querySelector(".main-nav__toggle");
const anchors = document.querySelectorAll(".main-nav__item a");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
  e.preventDefault()

  const sectionID = anchor.getAttribute("href").substr(1)

  document.getElementById(sectionID).scrollIntoView({
      behavior: "smooth",
      section: "start"
    })
  })
}
