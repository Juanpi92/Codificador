import { Codificar_Cesar, Descodificar_Cesar } from "./cifrado_cesar.js";

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
document.addEventListener("submit", (event) => {
  event.preventDefault(); //prevengo el envio del formulario
  let texto = document.querySelector("#texto").value; //recojo el texto
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
    //si escogio cifrado base64
  }
});
