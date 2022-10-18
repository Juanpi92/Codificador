import { Codificar_base64, Descodificar_base64 } from "./base64.js";
import { Codificar_Cesar, Descodificar_Cesar } from "./cifrado_cesar.js";

const $formulario = document.querySelector(".formulario");
const $texto = document.querySelector("#texto");
const $accion = document.querySelectorAll('input[name="codificar"]');
const $boton = document.getElementById("boton_traducir");
$formulario.reset(); //inicializo todo el formulario

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
  $tipo_codigo.classList.remove("error_cadena");
  if ($tipo_codigo.value === "cesar") {
    $rango_cesar.classList.remove("none");
    $rango_cesar_label.classList.remove("none");
  } else {
    $rango_cesar.classList.add("none");
    $rango_cesar_label.classList.add("none");
  }
});

//Cambiar el texto del Boton
$accion.forEach((element) => {
  element.addEventListener("click", (event) => {
    $boton.value = event.target.value;
  });
});

//Boton traducir ejecucion
document.addEventListener("submit", (event) => {
  document.querySelector("#texto2").classList.remove("error_cadena");
  event.preventDefault(); //prevengo el envio del formulario
  let texto = $texto.value; //recojo el texto
  let $texto2 = document.querySelector("#texto2"); //Escojo el 2do textArea
  let indice_cesar = parseInt($rango_cesar.value); //recojo el indice
  let accion = document.querySelector('input[name="codificar"]:checked').value; //recojo si es cod o descod
  if ($tipo_codigo.value === "cesar") {
    //si escogio cifrado cesar
    switch (accion) {
      case "Codificar":
        let texto_cifrado = Codificar_Cesar(texto, indice_cesar);
        $texto2.textContent = texto_cifrado;
        break;
      case "Decodificar":
        let texto_descifrado = Descodificar_Cesar(texto, indice_cesar);
        $texto2.textContent = texto_descifrado;
        break;
      default:
        break;
    }
  } else {
    //Escogio base 64
    switch (accion) {
      case "Codificar":
        let texto_cifrado = Codificar_base64(texto);
        $texto2.textContent = texto_cifrado;
        break;
      case "Decodificar":
        let texto_descifrado = Descodificar_base64(texto);
        $texto2.textContent = texto_descifrado;
        break;
      default:
        break;
    }
  }
});
