const Cifrar_base64=(texto)=>{
    return window.btoa(unescape(encodeURIComponent( str )));
}

  
  function Descifrar_base64( str ) {
    return decodeURIComponent(escape(window.atob( str )));
  }