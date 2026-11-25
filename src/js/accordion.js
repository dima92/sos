export function initFeaturesAccordion() {
  const items = document.querySelectorAll(".features-accordion__item");
  if (!items.length) return;

  items.forEach((item) => {
    const header = item.querySelector(".features-accordion__header");

    header.addEventListener("click", () => {
      const isAlreadyActive = item.classList.contains("is-active");

      items.forEach((el) => el.classList.remove("is-active"));

      if (!isAlreadyActive) {
        item.classList.add("is-active");
      }
    });
  });
}
