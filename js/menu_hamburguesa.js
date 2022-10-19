export default function Menu_Hamburger(buton, panel) {
  document.addEventListener("click", (event) => {
    if (event.target.matches(buton)) {
      event.target.classList.toggle("close");
      document.querySelector(panel).classList.toggle("modal_active");
    }
  });
}
