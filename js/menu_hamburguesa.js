export default function Menu_Hamburger(buton, panel, buton2) {
  document.addEventListener("click", (event) => {
    if (event.target.matches(buton)) {
      event.target.classList.toggle("close");
      document.querySelector(panel).classList.toggle("modal_active");
    }
    if (event.target.matches(buton2)) {
      const $texto2 = document.getElementById("texto2");
      navigator.clipboard.writeText($texto2.value);
    }
  });
}
