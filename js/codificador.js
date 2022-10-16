import { Codificar_base64, Descodificar_base64 } from "./base64.js";
import { Codificar_Cesar, Descodificar_Cesar } from "./cifrado_cesar.js";

const $formulario = document.querySelector(".formulario");
const $texto = document.querySelector("#texto");
$formulario.reset(); //inicializo todo el formulario

const $rango_cesar = document.querySelector("#rango_cesar");
const $rango_cesar_label = document.querySelector("#rango_cesar_label");
const $tipo_codigo = document.querySelector("#tipo_codigo");
$rango_cesar_label.textContent = $rango_cesar.value; //Al inicio donde debe estar

//Evento validity
/*$tipo_codigo.setCustomValidity("Debe escoger tipo de Codigo");
$texto.setCustomValidity("Debe introducir un texto a codificar");*/

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
  } else if ($tipo_codigo.value === "base64") {
    $rango_cesar.classList.add("none");
    $rango_cesar_label.classList.add("none");
  } else {
    /*$tipo_codigo.classList.add("error_cadena");*/
  }
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
      case "c":
        let texto_cifrado = Codificar_Cesar(texto, indice_cesar);
        $texto2.textContent = texto_cifrado;
        break;
      case "d":
        let texto_descifrado = Descodificar_Cesar(texto, indice_cesar);
        $texto2.textContent = texto_descifrado;
        break;
      default:
        break;
    }
  } else {
    //Escogio base 64
    switch (accion) {
      case "c":
        let texto_cifrado = Codificar_base64(texto);
        $texto2.textContent = texto_cifrado;
        break;
      case "d":
        let texto_descifrado = Descodificar_base64(texto);
        $texto2.textContent = texto_descifrado;
        break;
      default:
        break;
    }
  }
});
