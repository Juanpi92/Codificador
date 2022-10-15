const $formulario = document.querySelector(".formulario");
$formulario.reset(); //inicializo todo
const $rango_cesar = document.querySelector("#rango_cesar");
const $rango_cesar_label = document.querySelector("#rango_cesar_label");
const $tipo_codigo = document.querySelector("#tipo_codigo");
$rango_cesar_label.textContent = $rango_cesar.value; //Al inicio donde debe estar

//Cambiar el valor del label al cambiar el rango
$rango_cesar.addEventListener("change", () => {
  $rango_cesar_label.textContent = $rango_cesar.value;
});

//Aparecer o desaparecer el rango en funcion de lo escogido
$tipo_codigo.addEventListener("change", () => {
  if ($tipo_codigo.value === "cesar") {
    $rango_cesar.classList.remove("none");
    $rango_cesar_label.classList.remove("none");
  } else {
    $rango_cesar.classList.add("none");
    $rango_cesar_label.classList.add("none");
  }
});

//Boton traducir ejecucion
document.addEventListener("submit", () => {
  event.preventDefault(); //prevengo el envio del formulario
  let texto = document.querySelector("#texto").value;

  console.log(texto);
  $formulario.reset(); //inicializo todo
});
