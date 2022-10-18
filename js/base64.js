export function Codificar_base64(texto) {
  try {
    return window.btoa(unescape(encodeURIComponent(texto)));
  } catch (error) {
    document.querySelector("#texto2").classList.add("error_cadena");
    return "Não foi possível codificar, insira um texto válido";
  }
}

export function Descodificar_base64(texto) {
  try {
    return decodeURIComponent(escape(window.atob(texto)));
  } catch (error) {
    document.querySelector("#texto2").classList.add("error_cadena");
    return "Não foi possível decodificar, insira um texto válido";
  }
}
