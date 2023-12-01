// const mobileMenu = document.querySelector(".mobile-menu");
// const menuBtnOpen = document.querySelector(".menu-btn-open");
// const menuBtnClose = document.querySelector(".menu-btn-close");
// const mobileMenuLinks = document.querySelectorAll(".mobile-menu__link");

// const toggleMenu = () => mobileMenu.classList.toggle("is-open");

// menuBtnOpen.addEventListener("click", toggleMenu);
// menuBtnClose.addEventListener("click", toggleMenu);
// mobileMenuLinks.addEventListener("click", toggleMenu);
const mobileMenu = document.querySelector(".mobile-menu");
const menuBtnOpen = document.querySelector(".menu-btn-open");
const menuBtnClose = document.querySelector(".menu-btn-close");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu__link");

const toggleMenu = () => {
  mobileMenu.classList.toggle("is-open");
  document.body.classList.toggle("is-scroll-disabled");
};

menuBtnOpen.addEventListener("click", toggleMenu);
menuBtnClose.addEventListener("click", toggleMenu);

mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      const offsetTop = targetSection.offsetTop;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });

      toggleMenu();
    }
  });
});
