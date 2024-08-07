import "../scss/main.scss";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

const swiper = new Swiper(".service__slider", {
  modules: [Navigation],
  slidesPerView: 3,
  spaceBetween: 37,
  navigation: {
    nextEl: ".slider-btn-next",
    prevEl: ".slider-btn-prev",
  },
});

const swiper2 = new Swiper(".testimonials__slider", {
  modules: [Navigation],
  slidesPerView: 2,
  spaceBetween: 80,
  navigation: {
    nextEl: ".slider-btn-next",
    prevEl: ".slider-btn-prev",
  },
});
