// Obtiene una referencia al elemento textarea en el documento HTML
const textarea = document.querySelector(".textArea");
        
// Añade un event listener para el evento 'keyup' al textarea
textarea.addEventListener("keyup", e => {
    // Establece una altura predeterminada de 63 píxeles para evitar un crecimiento infinito
    textarea.style.height = "63px";
    
    // Obtiene la altura total del contenido dentro del textarea
    let scHeight = e.target.scrollHeight;
    
    // Actualiza la altura del textarea para que coincida con el contenido
    textarea.style.height = `${scHeight}px`;
});





function obtenerTextoOriginal() {
    var texto = document.querySelector(".textArea").value;
    var textoEncriptado = "";
    

    for (var i = 0; i < texto.length; i++) {
        var letra = texto[i];
        switch (letra) {
        case "e":
            textoEncriptado += "enter";
            break;
        case "i":
            textoEncriptado += "imes";
            break;
        case "a":
            textoEncriptado += "ai";
            break;
        case "o":
            textoEncriptado += "ober";
            break;
        case "u":
            textoEncriptado += "ufat";
            break;
        default:
            textoEncriptado += letra;
        }
        
    }

    document.querySelector(".textArea2").textContent = textoEncriptado;
    document.querySelector(".caja3").style.display = "none";

}

function copiarTextoEncriptado() {
    var textoEncriptado = document.querySelector(".textArea2").textContent;
    var textareaTemp = document.createElement("textarea");
    textareaTemp.value = textoEncriptado;
    document.body.appendChild(textareaTemp);
    textareaTemp.select();
    document.execCommand("copy");
    document.body.removeChild(textareaTemp);
  }

  function desencriptarTexto() {
    var textoEncriptado = document.querySelector(".textArea").value;
    var textoDesencriptado = "";
  
    for (var i = 0; i < textoEncriptado.length; i++) {
      var letra = textoEncriptado[i];
  
      switch (letra) {
        case "e":
          if (textoEncriptado.slice(i, i + 5) === "enter") {
            textoDesencriptado += "e";
            i += 4;
          } else {
            textoDesencriptado += letra;
          }
          break;
        case "i":
          if (textoEncriptado.slice(i, i + 4) === "imes") {
            textoDesencriptado += "i";
            i += 3;
          } else {
            textoDesencriptado += letra;
          }
          break;
        case "a":
          if (textoEncriptado.slice(i, i + 2) === "ai") {
            textoDesencriptado += "a";
            i += 1;
          } else {
            textoDesencriptado += letra;
          }
          break;
        case "o":
          if (textoEncriptado.slice(i, i + 4) === "ober") {
            textoDesencriptado += "o";
            i += 3;
          } else {
            textoDesencriptado += letra;
          }
          break;
        case "u":
          if (textoEncriptado.slice(i, i + 4) === "ufat") {
            textoDesencriptado += "u";
            i += 3;
          } else {
            textoDesencriptado += letra;
          }
          break;
        default:
          textoDesencriptado += letra;
      }
    }
  
    document.querySelector(".textArea2").textContent = textoDesencriptado;
  }
  