document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".carousel__slider", {
    slidesPerView: 1.5,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    centerInsufficientSlides: true,
    navigation: {
      nextEl: ".carousel__next",
      prevEl: ".carousel__prev",
    },
  });
});
