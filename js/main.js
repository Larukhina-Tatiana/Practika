// const menuBtn = document.querySelector(".nav__menu-btn");
// const menuMobile = document.querySelector(".nav__menu-mobile");

// menuBtn.addEventListener("click", () => {
//   menuMobile.classList.toggle("menu--open");
// });

const swiper = new Swiper(".swiper", {
  loop: true,

  navigation: {
    nextEl: ".swiper-button-right",
    prevEl: ".swiper-button-left",
  },
  breakpoints: {
    0: {
      slidesPerView: 3,
            spaceBetween: 16,
    },
    // 768: {
    //   slidesPerView: 2,
    //   spaceBetween: 20,
    // },
  },
});

