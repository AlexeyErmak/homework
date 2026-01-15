const burgerIcon = document.querySelector(".burger-icon");
const menu = document.querySelector(".header__nav");

burgerIcon.addEventListener("click", function () {
  burgerIcon.classList.toggle("active");
  menu.classList.toggle("active");
});
