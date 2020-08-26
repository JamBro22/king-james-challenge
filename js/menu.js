const toggler = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggler.addEventListener("click", () => {
  toggler.classList.toggle("active");
  menu.classList.toggle("active");
});
