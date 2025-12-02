// === NAV AUTO-HIDE ON SCROLL ===

let lastScroll = 0;
const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  // Si on descend -> cacher
  if (currentScroll > lastScroll && currentScroll > 80) {
    header.classList.add("hide");
    header.classList.remove("show");
  } 
  // Si on monte -> montrer
  else {
    header.classList.remove("hide");
    header.classList.add("show");
  }

  lastScroll = currentScroll;
});
