export function Codificar_base64(texto) {
  try {
    return window.btoa(unescape(encodeURIComponent(texto)));
  } catch (error) {
    return "No se pudo codificar, introduzca una cadena valida";
  }
}

export function Descodificar_base64(texto) {
  try {
    return decodeURIComponent(escape(window.atob(texto)));
  } catch (error) {
    return "No se pudo descodificar, introduzca una cadena valida";
  }
}
