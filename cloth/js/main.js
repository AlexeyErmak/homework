// Burger Begin

import HeaderFixed from "./header.js";
import BurgerMenu from "./burger.js";
// import { Swiper } from "./slider.js";

try {
  const headerFixed = new HeaderFixed({
    HEADER: "header",
    HEADER_FIXED: "header--fixed",
  });

  new BurgerMenu(
    {
      BURGER: "burger",
      BURGER_OPEN: "burger--open",
      HEADER_MENU: "header__nav",
      HEADER_MENU_OPEN: "header__nav--open",
      lABEL: {
        OPEN: "Открыть меню",
        CLOSE: "Закрыть меню",
      },
      PAGE_BODY: "page__body",
      PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
      MENU_LINK: "header__link",
      BREAKPOINT: 1330,
    },
    headerFixed
  );
} catch (error) {
  console.error(error);
}

// Burger End

// register
document
  .querySelector(".register-close")
  .addEventListener("click", function () {
    const target = document.querySelector(".register");
    target.classList.add("display-none");
  });

window.addEventListener("scroll", () => {
  const topElement = document.querySelector(".register");
  const header = document.querySelector(".header");
  const headerHeight = header.offsetHeight;
  const headerOffsetTop = header.offsetTop;

  if (window.scrollY >= headerOffsetTop + headerHeight) {
    topElement.classList.add("fixed");
  } else {
    topElement.classList.remove("fixed");
  }
});

// receipts__button
const button = document.querySelector(".receipts__button");
const productsContainer = document.querySelector(".receipts__cards");
let isExpanded = false;

button.addEventListener("click", function () {
  const hiddenCards = productsContainer.querySelectorAll(
    ".receipts__card.hidden"
  );
  const visibleCards = productsContainer.querySelectorAll(
    ".receipts__card:not(.hidden)"
  );

  if (!isExpanded) {
    const countToShow = Math.min(4, hiddenCards.length);
    const delayStep = 80; // если используешь стаггер через setTimeout
    let firstShownCard = null;

    for (let i = 0; i < countToShow; i++) {
      const card = hiddenCards[i];

      if (!firstShownCard) firstShownCard = card;

      // если без JS‑стаггера — просто сразу снимаем hidden
      // card.classList.remove('hidden');

      // вариант со ступенчатой анимацией
      setTimeout(() => {
        card.classList.remove("hidden");
      }, i * delayStep);
    }

    isExpanded = true;
    this.textContent = "Скрыть";
    this.classList.add("toggle");

    // прокрутка к первой новой карточке
    if (firstShownCard) {
      const totalDelay = (countToShow - 1) * delayStep + 50; // чтобы успела стартануть анимация
      setTimeout(() => {
        firstShownCard.scrollIntoView({
          behavior: "smooth",
          block: "start", // можно 'center', если хочется по центру
        });
      }, totalDelay);
    }
  } else {
    // Скрыть все карточки кроме первых 4
    visibleCards.forEach((card, index) => {
      if (index >= 4) {
        card.classList.add("hidden");
      }
    });

    productsContainer.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    isExpanded = false;
    this.textContent = "Посмотреть всё";
    this.classList.remove("toggle");
  }
});

const buttonNew = document.querySelector(".leaders__button");
const productsContainerNew = document.querySelector(".leaders__cards");
let isExpandedNew = false;

buttonNew.addEventListener("click", function () {
  const hiddenCards = productsContainerNew.querySelectorAll(
    ".leaders__card.hidden"
  );
  const visibleCards = productsContainerNew.querySelectorAll(
    ".leaders__card:not(.hidden)"
  );

  if (!isExpandedNew) {
    const countToShow = Math.min(4, hiddenCards.length);
    const delayStep = 80;
    let firstShownCard = null;

    for (let i = 0; i < countToShow; i++) {
      const card = hiddenCards[i];

      if (!firstShownCard) firstShownCard = card;
      setTimeout(() => {
        card.classList.remove("hidden");
      }, i * delayStep);
    }

    isExpandedNew = true;
    this.textContent = "Скрыть";
    this.classList.add("toggle");

    // прокрутка к первой новой карточке
    if (firstShownCard) {
      const totalDelay = (countToShow - 1) * delayStep + 50; // чтобы успела стартануть анимация
      setTimeout(() => {
        firstShownCard.scrollIntoView({
          behavior: "smooth",
          block: "start", // можно 'center', если хочется по центру
        });
      }, totalDelay);
    }
  } else {
    // Скрыть все карточки кроме первых 4
    visibleCards.forEach((card, index) => {
      if (index >= 4) {
        card.classList.add("hidden");
      }
    });

    productsContainerNew.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    isExpandedNew = false;
    this.textContent = "Посмотреть всё";
    this.classList.remove("toggle");
  }
});

// search
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search"); // твой input
  const cards = document.querySelectorAll(".receipts__card");
  let visibleCards = [];

  if (!searchInput) {
    console.error('Не найден input с id="search"');
    return;
  }

  searchInput.addEventListener("input", function (e) {
    const query = e.target.value.toLowerCase().trim();
    visibleCards = []; // сбрасываем

    cards.forEach((card) => {
      const title = card.querySelector(".receipts__card-title");
      if (title && title.textContent.toLowerCase().includes(query)) {
        card.style.display = "";
        card.classList.add("found");
        visibleCards.push(card);
      } else {
        card.style.display = "none";
        card.classList.remove("found");
      }
    });

    // Скролл к первому результату
    if (visibleCards.length > 0) {
      visibleCards[0].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }

    // Убираем подсветку
    setTimeout(() => {
      cards.forEach((card) => card.classList.remove("found"));
    }, 2000);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search"); // твой input
  const cards = document.querySelectorAll(".leaders__card");
  let visibleCards = [];

  if (!searchInput) {
    console.error('Не найден input с id="search"');
    return;
  }

  searchInput.addEventListener("input", function (e) {
    const query = e.target.value.toLowerCase().trim();
    visibleCards = []; // сбрасываем

    cards.forEach((card) => {
      const title = card.querySelector(".leaders__card-title");
      if (title && title.textContent.toLowerCase().includes(query)) {
        card.style.display = "";
        card.classList.add("found");
        visibleCards.push(card);
      } else {
        card.style.display = "none";
        card.classList.remove("found");
      }
    });

    // Скролл к первому результату
    if (visibleCards.length > 0) {
      visibleCards[0].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }

    // Убираем подсветку
    setTimeout(() => {
      cards.forEach((card) => card.classList.remove("found"));
    }, 2000);
  });
});
