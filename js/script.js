"use strict";

// Header bg & on scroll //

import { changeBg } from "./headerScroll.js";
changeBg();


// scroll up //

let calcScrollValue = () => {
  let scrollUp = document.getElementById("scrollup");
  let scrollUpValue = document.getElementById("scrollup-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if(pos > 100){
    scrollUp.style.display = "grid";
  }else{
    scrollUp.style.display = "none";
  }
  scrollUp.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollUp.style.background = `conic-gradient(#F7EEDC ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


// slide //


document.addEventListener("DOMContentLoaded", function () {
  const splide = new Splide(".splide", {
    fixedWidth: "30%",
    start: 3,
    perPage: 1,
    gap: "10px",
    type: "loop",
    snap: "true",
    breakpoints: {
      500: {
        perPage: 1,
      },
      400: {
        perPage: 1,
      },
    },
  });
  splide.mount();
});

// burger  bar

let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// to do list//

const formElement = document.getElementById("form");
const inputElement = document.getElementById("input");
const addButtonElement = document.getElementById("addButton");
const olEl = document.getElementById("ul");
const removeAll = document.getElementById("removeAll");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputElement.value === "") return;

  const liEl = document.createElement("li");
  const deleteBtnEl = document.createElement("button");
  deleteBtnEl.classList.add("button");
  deleteBtnEl.innerHTML = '<img class="delete-icon-pub" src="img/delete.svg" alt="delete icon" />';
  deleteBtnEl.addEventListener("click", () => {
    liEl.remove();
  });

  liEl.textContent = inputElement.value;
  olEl.appendChild(liEl);
  liEl.appendChild(deleteBtnEl);
  inputElement.value = "";
});

removeAll.addEventListener("click", () => {
  olEl.innerHTML = " ";
});

// next & previous //

let divElement = document.getElementById("api-users");
let prevBtn = document.getElementById("loadprev");
let nextBtn = document.getElementById("loadnext");
let currentPage = 1;
let ul = document.getElementById("ul-element");
let totalPages;

function getUsers(page) {
  fetch("https://reqres.in/api/users?page=" + page, {
    method: "GET",
  })
    .then(function (responseinfo) {
      console.log(responseinfo);
      if (!responseinfo.ok) {
        throw responseinfo.status;
      }
      return responseinfo.json();
    })
    .then(function (responseData) {
      const fragment = new DocumentFragment();

      responseData.data.forEach((item) => {
        let li = document.createElement("li");
        li.classList.add("ul-li");
        let img = document.createElement("img");
        img.classList.add("img-size");
        let span = document.createElement("span");
        img.src = item.avatar;
        li.innerText = `${item.first_name} ${item.last_name}`;
        fragment.appendChild(li);
        span.appendChild(img);
        li.appendChild(span);
      });

      ul.innerHTML = " ";
      ul.appendChild(fragment);

      totalPages = responseData.total_pages;
      if (currentPage === 1) {
        prevBtn.disabled = true;
      }
      if (currentPage === totalPages) {
        nextBtn.disabled = true;
      }
    })
    .catch(function (error) {
      if (error === 404) {
        let perrornew = document.createElement("p");
        perrornew.textContent = "Page not found";
        divElement.appendChild(perrornew);
      } else {
        let perrornew = document.createElement("p");
        perrornew.textContent = "Server Error";
        divElement.appendChild(perrornew);
      }
    });
}

prevBtn.addEventListener("click", function () {
  if (currentPage === 1) {
    prevBtn.disabled = true;
    return;
  } else {
    nextBtn.disabled = false;
  }
  currentPage--;
  getUsers(currentPage);
});

nextBtn.addEventListener("click", function () {
  if (currentPage === totalPages) {
    nextBtn.disabled = true;
    return;
  } else {
    prevBtn.disabled = false;
  }
  currentPage++;
  getUsers(currentPage);
});

getUsers(currentPage);

//accordion//

const accordion_header = document.querySelectorAll(".accordion-header");
const txtOne = document.getElementById("accardion");
const txtTwo = document.getElementById("accardion2");
const txtThree = document.getElementById("accardion3");
const accordion_button = document.querySelectorAll(".accordion-button");

accordion_button.forEach((element) => {
  const icone = document.createElement("img");
  icone.setAttribute("src", "img/down.svg");
  element.appendChild(icone);
});

accordion_header.forEach((element) => {
  element.addEventListener("click", function () {
    if (this.textContent.trim() == "TISSOT") {
      txtOne.classList.toggle("none");
      if (this.innerHTML.includes("down.svg")) {
        this.innerHTML = `<button class="accordion-button" type="button">
    TISSOT
  <img src="img/up.svg"></button>`;
      } else
        this.innerHTML = `<button class="accordion-button" type="button">
    TISSOT
  <img src="img/down.svg"></button>`;
    } else if (this.textContent.trim() == "SWATCH") {
      txtTwo.classList.toggle("none");
      if (this.innerHTML.includes("down.svg")) {
        this.innerHTML = `<button class="accordion-button" type="button">
     SWATCH
  <img src="img/up.svg"></button>`;
      } else
        this.innerHTML = `<button class="accordion-button" type="button">
     SWATCH
  <img src="img/down.svg"></button>`;
    } else if (this.textContent.trim() == "SWISS MILITARY") {
      txtThree.classList.toggle("none");
      if (this.innerHTML.includes("down.svg")) {
        this.innerHTML = `<button class="accordion-button" type="button">
    SWISS MILITARY
  <img src="img/up.svg"></button>`;
      } else
        this.innerHTML = `<button class="accordion-button" type="button">
    SWISS MILITARY
  <img src="img/down.svg"></button>`;
    }
  });
});
