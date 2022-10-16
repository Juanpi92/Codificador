export function Codificar_Cesar(texto, indice) {
  //Letras Mayusculas van de 65-90 y las minusculas de 97-122
  let codigo_caracter;
  let nuevo_codigo_caracter;
  let texto_codificado = "";
  for (let index = 0; index < texto.length; index++) {
    codigo_caracter = texto.charCodeAt(index); //Convierto el caracter a codigo
    if (
      (codigo_caracter >= 65 && codigo_caracter <= 90) ||
      (codigo_caracter >= 97 && codigo_caracter <= 122)
    ) {
      //es una letra
      if (codigo_caracter >= 65 && codigo_caracter <= 90) {
        //es Mayuscula
        nuevo_codigo_caracter = codigo_caracter + indice; //Corro los lugares
        if (nuevo_codigo_caracter > 90) {
          //Hay que dar la vuelta
          nuevo_codigo_caracter = 64 + nuevo_codigo_caracter - 90;
          texto_codificado += String.fromCharCode(nuevo_codigo_caracter);
        } else {
          //No Hay que dar la vuelta
          texto_codificado += String.fromCharCode(nuevo_codigo_caracter);
        }
      } else {
        //es minuscula
        nuevo_codigo_caracter = codigo_caracter + indice; //Corro los lugares
        if (nuevo_codigo_caracter > 122) {
          //Hay que dar la vuelta
          nuevo_codigo_caracter = 96 + nuevo_codigo_caracter - 122;
          texto_codificado += String.fromCharCode(nuevo_codigo_caracter);
        } else {
          //No Hay que dar la vuelta
          texto_codificado += String.fromCharCode(nuevo_codigo_caracter);
        }
      }
    } else {
      //No es una letra
      texto_codificado += texto.charAt(index);
    }
  }
  return texto_codificado;
}

export function Descodificar_Cesar(texto, indice) {
  //Letras Mayusculas van de 65-90 y las minusculas de 97-122
  let codigo_caracter;
  let nuevo_codigo_caracter;
  let texto_descodificado = "";
  for (let index = 0; index < texto.length; index++) {
    codigo_caracter = texto.charCodeAt(index); //Convierto el caracter a codigo
    if (
      (codigo_caracter >= 65 && codigo_caracter <= 90) ||
      (codigo_caracter >= 97 && codigo_caracter <= 122)
    ) {
      //es una letra
      if (codigo_caracter >= 65 && codigo_caracter <= 90) {
        //es mayuscula
        nuevo_codigo_caracter = codigo_caracter - indice; //Corro los lugares

        if (nuevo_codigo_caracter < 65) {
          //Hay que dar la vuelta
          nuevo_codigo_caracter = 90 - (64 - nuevo_codigo_caracter);
          texto_descodificado += String.fromCharCode(nuevo_codigo_caracter);
        } else {
          //No Hay que dar la vuelta
          texto_descodificado += String.fromCharCode(nuevo_codigo_caracter);
        }
      } else {
        //es minuscula
        nuevo_codigo_caracter = codigo_caracter - indice; //Corro los lugares
        if (nuevo_codigo_caracter < 97) {
          //Hay que dar la vuelta
          nuevo_codigo_caracter = 122 - (96 - nuevo_codigo_caracter);
          texto_descodificado += String.fromCharCode(nuevo_codigo_caracter);
        } else {
          //No Hay que dar la vuelta
          texto_descodificado += String.fromCharCode(nuevo_codigo_caracter);
        }
      }
    } else {
      //No es una letra
      texto_descodificado += texto.charAt(index);
    }
  }
  return texto_descodificado;
}
