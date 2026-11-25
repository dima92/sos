export const initBurger = () => {
  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".header__nav");
  const menuLinks = document.querySelectorAll(".nav__link, .header__btn");

  if (!burger || !menu) return;

  const toggleMenu = (forceClose = false) => {
    const isOpening = forceClose ? false : !menu.classList.contains("is-open");

    burger.classList.toggle("is-open", isOpening);
    menu.classList.toggle("is-open", isOpening);
    document.body.classList.toggle("disable-scroll", isOpening);
    burger.setAttribute("aria-expanded", String(isOpening));
  };

  burger.addEventListener("click", () => toggleMenu());

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => toggleMenu(true));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("is-open")) {
      toggleMenu(true);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 992 && menu.classList.contains("is-open")) {
      toggleMenu(true);
    }
  });
};
