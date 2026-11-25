import Swiper from "swiper";
import { Navigation, Pagination, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

export function initAboutSlider() {
  const sliderEl = document.querySelector(".about-slider");
  if (!sliderEl) return;

  new Swiper(sliderEl, {
    modules: [Navigation, Pagination, EffectCards],
    effect: "cards",
    grabCursor: true,
    cardsEffect: {
      perSlideOffset: 12,
      perSlideRotate: 0,
      slideShadows: false,
    },
    pagination: {
      el: ".about-slider__pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".about-slider__next",
    },
  });
}
