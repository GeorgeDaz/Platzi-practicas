var d = document.getElementById("dibujito");
var cantidadLineas = document.getElementById("cantidad_lineas");
var dibujar = document.getElementById("boton");
var lienzo = d.getContext("2d");
console.log(lienzo);
var color = "grey";

dibujar.addEventListener("click", dibujoPorClick);
dibujarLinea(color, 1, 1, 1, 299);
dibujarLinea(color, 1, 299, 299, 299);

function dibujarLinea(color, startingA, startingB, finaleA, finaleb) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(startingA, startingB);
  lienzo.lineTo(finaleA, finaleb);
  lienzo.stroke();
  lienzo.closePath();
}
function dibujoPorClick() {
  var lineas = cantidadLineas.value;
  var ancho = d.width;
  var espacio = ancho / lineas;
  for (let i = 0; i < lineas; i++) {
    startingB = espacio * i;
    finaleA = espacio * (i + 1);
    dibujarLinea(color, 0, startingB, finaleA, 300);
  }
}
