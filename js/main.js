
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

const about = document.querySelector('#GetAbout');
about.addEventListener("click", () => {
  window.scrollTo({
    top: 550,
    behavior: "smooth",
  });
});

const skills = document.querySelector('#GetSkills');
skills.addEventListener("click", () => {
  window.scrollTo({
    top: 1280,
    behavior: "smooth",
  });
});

const contact = document.querySelector('#GetContact');
contact.addEventListener("click", () => {
  window.scrollTo({
    top: 2200,
    behavior: "smooth",
  });
});


