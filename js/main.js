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


const slider = document.querySelector(".hero__list");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

const mySiema = new Siema({
  selector: slider,
  loop: true,
  duration: 1000,
  easing: "cubic-bezier(.17,.67,.32,1.34)"
});

next.addEventListener("click", onNextClick);
prev.addEventListener("click", onPrevClick);

function onNextClick() {
  mySiema.next();
}

function onPrevClick() {
  mySiema.prev();
}

const lightbox = new SimpleLightbox(".kittens__item a", {
  // closeText: "&#128514;",
  fadeSpeed: 1000
});

AOS.init();