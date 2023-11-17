
document.addEventListener("DOMContentLoaded", function() {
    var texto = document.getElementById("efecto-lento");
    var letras = texto.textContent.trim().split("");
  
    texto.innerHTML = ""; // Limpiar el contenido original
  
    letras.forEach(function (letra, i) {
      var span = document.createElement("span");
      span.textContent = letra;
      span.style.transitionDelay = i * 0.1 + "s";
      texto.appendChild(span);
  
      // Agregar un espacio después de cada letra (excepto la última)
      if (i < letras.length - 1) {
        var espacio = document.createTextNode(" ");
        texto.appendChild(espacio);
      }
    });
  
    // Añadir una clase para activar la animación
    setTimeout(function () {
      texto.classList.add("animar");
    }, 100);
  });
  

  // script.js de sapan 


document.addEventListener("DOMContentLoaded", function() {
    var espanjab = document.getElementById("espanjab");
  
    if (espanjab) {
      setInterval(function() {
        espanjab.classList.remove("animar");
        void espanjab.offsetWidth; // Truco para reiniciar la animación
  
        // Cambiar el color al azul cuando aparece
        espanjab.style.color = "#0113ff";
  
        espanjab.classList.add("animar");
      }, 10000); // Repetir cada 10 segundos
    }
  });
  