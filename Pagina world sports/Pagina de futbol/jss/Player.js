var botonesLeerMas = document.querySelectorAll(".btn-leer-mas");

botonesLeerMas.forEach(function(btnLeermas){
  var contenidoOculto = btnLeermas.previousElementSibling;
  ocultarConcepto(contenidoOculto);
  
  btnLeermas.addEventListener("click",function() {
    
    if (contenidoOculto.style.display === "none") {
      contenidoOculto.style.display = "block";
      btnLeermas.textContent = "Leer menos";
    } else {
      contenidoOculto.style.display = "none";
      btnLeermas.textContent = "Leer más";
    }
  });
});

function ocultarConcepto(contenido){
contenido.style.display = "none"
contenido.nextElementSibling.textContent = "Leer mas ";

}

function mostrarConcepto(contenido){
  contenido.style.display = "block"
  contenido.nextElementSibling.textContent = "Leer menos ";
}








