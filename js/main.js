const menuBtn = document.querySelector(".nav__btn");
const menuMobile = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("nav__menu-open");
});

const swiper = new Swiper(".swiper", {
  loop: true,

  navigation: {
    nextEl: ".swiper-button-right",
    prevEl: ".swiper-button-left",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
            // spaceBetween: 20,
    },
    475: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    698: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
  },
});

