import "../styles/main.scss";

import { initBurger } from "./burger";
import { initLangDropdown } from "./dropdown";
import { initFeaturesAccordion } from "./accordion";
import { initAboutSlider } from "./slider";

document.addEventListener("DOMContentLoaded", () => {
  initBurger();
  initLangDropdown();
  initFeaturesAccordion();
  initAboutSlider();
});
