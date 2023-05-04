(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);
  refs.menu.addEventListener("click", (click) => {
    if (click.target === click.currentTarget) toggleMenu();
  });
  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();
