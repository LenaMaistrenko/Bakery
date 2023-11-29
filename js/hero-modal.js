const heroModal = document.querySelector(".backdrop");
const heroModalBtnOpen = document.querySelector(".hero-modal-btn-open");
const heroModalBtnClose = document.querySelector(".hero-modal-btn-close");

const toggleHeroModal = () => heroModal.classList.toggle("is-hidden");

heroModalBtnClose.addEventListener("click", toggleHeroModal);
heroModalBtnOpen.addEventListener("click", toggleHeroModal);
