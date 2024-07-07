"use strict";

const list = document.getElementById("list");
const search = document.getElementById("search");
const listArr = [];
let li;
const asyncCall = async () => {
  try {
    const response = await fetch("http://localhost:3000/posts");
    if (!response.ok) throw new Error("error");
    const dataResponse = await response.json();

    createLists(dataResponse);
  } catch (error) {
    const textError = document.createElement("p");
    console.log(error);
    textError.innerText = "problem server";
    document.body.appendChild(textError);
  }
};

asyncCall();

function createLists(data) {
  data.forEach((element) => {
    li = document.createElement("li");
    li.classList.add("li-items");
    li.textContent = element.title;
    listArr.push(li);
    list.appendChild(li);
  });
}
function filterlist(value) {
  listArr.forEach((element) => {
    if (value === "") {
      element.classList.remove("active");
    } else if (element.innerText.includes(value.trim().toLowerCase())) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}
search.addEventListener("keyup", function () {
  filterlist(this.value);
});
