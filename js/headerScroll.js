"use strict";

function changeBg() {
    let navBar = document.getElementById("div-wraper");
    let colorN = document.querySelector(".nav-link");
    let scrollValue = window.scrollY;
    if (scrollValue < 150) {
      navBar.classList.remove("bgcolor");
      colorN.style.color = "#F7EEDC";
    } else {
      navBar.classList.add("bgcolor");
      colorN.style.color = "gray";
    }
  }
  window.addEventListener("scroll", changeBg);

  export {changeBg}