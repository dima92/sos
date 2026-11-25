export function initLangDropdown() {
  const dropdown = document.querySelector(".lang-dropdown");
  if (!dropdown) return;

  const toggleBtn = dropdown.querySelector(".lang-dropdown__toggle");
  const currentText = dropdown.querySelector(".lang-dropdown__current");
  const options = dropdown.querySelectorAll(".lang-dropdown__item");

  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = dropdown.classList.toggle("is-open");
    toggleBtn.setAttribute("aria-expanded", isOpen);
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      const selectedLang = option.textContent.trim();
      const prevLang = currentText.textContent.trim();

      currentText.textContent = selectedLang;
      option.textContent = prevLang;

      dropdown.classList.remove("is-open");
      toggleBtn.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("is-open");
      toggleBtn.setAttribute("aria-expanded", "false");
    }
  });
}
