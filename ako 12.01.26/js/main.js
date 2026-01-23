const burgerIcon = document.querySelector(".burger-icon");
const menu = document.querySelector(".header__nav");

burgerIcon.addEventListener("click", function () {
  burgerIcon.classList.toggle("active");
  menu.classList.toggle("active");
});

// AOS

AOS.init({
  once: false,
  mirror: true,
  offset: 100,
});

// link-active
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".header__link");

  // Функция для установки активной ссылки
  function setActiveLink(activeHref) {
    navLinks.forEach((link) => {
      link.classList.remove("link-active");
      if (link.getAttribute("href") === activeHref) {
        link.classList.add("link-active");
      }
    });
  }

  // Устанавливаем активную ссылку на основе текущего URL
  function updateActiveLink() {
    const currentPath = window.location.pathname;
    let activeHref = "/"; // по умолчанию главная

    // Если текущая страница services.html
    if (currentPath.includes("services.html")) {
      activeHref = "./services.html";
    }

    if (currentPath.includes("contact.html")) {
      activeHref = "./contact.html";
    }

    setActiveLink(activeHref);
  }

  // Обработчики кликов по ссылкам
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Удаляем активный класс со всех ссылок
      navLinks.forEach((l) => l.classList.remove("link-active"));

      // Добавляем активный класс к текущей ссылке
      this.classList.add("link-active");
    });
  });

  // Обновляем активную ссылку при загрузке страницы
  updateActiveLink();

  // Обновляем при изменении hash (для ссылок #)
  window.addEventListener("hashchange", updateActiveLink);
});
