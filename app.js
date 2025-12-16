const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", (e) => {
  e.preventDefault();
  menu.classList.toggle("open");

  const isOpen = menu.classList.contains("open");
  burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
});


menu.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    menu.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  });
});