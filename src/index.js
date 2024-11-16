import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";
import "normalize.css";
import "./style.css";

// event listeners
const homeButton = document.getElementById("home-btn");
homeButton.addEventListener("click", () => {
  switchPage("home");
});
const menuButton = document.getElementById("menu-btn");
menuButton.addEventListener("click", () => {
  switchPage("menu");
});
const contactButton = document.getElementById("contact-btn");
contactButton.addEventListener("click", () => {
  switchPage("contact");
});

const switchPage = (page) => {
  content.innerHTML = "";
  if (page === "home") {
    homeButton.classList.add("active");
    menuButton.classList.remove("active");
    contactButton.classList.remove("active");
    content.appendChild(home());
  } else if (page === "menu") {
    homeButton.classList.remove("active");
    menuButton.classList.add("active");
    contactButton.classList.remove("active");
    content.appendChild(menu());
  } else {
    homeButton.classList.remove("active");
    menuButton.classList.remove("active");
    contactButton.classList.add("active");
    content.appendChild(contact());
  }
};

// initial load
const content = document.getElementById("content");
content.appendChild(home());
homeButton.classList.add("active");
