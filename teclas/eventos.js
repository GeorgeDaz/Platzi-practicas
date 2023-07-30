var d = document.getElementById("area");
document.addEventListener("keyup", dibujarTeclado);
var lienzo = d.getContext("2d");
var color = "grey";
var inicioA = 150;
var inicioB = 150;
var ultimoPuntoA = 150;
var ultimoPuntoB = 150;

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
};
console.log(teclas);

function dibujarLinea(color, startingA, startingB, finaleA, finaleb) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(startingA, startingB);
  lienzo.lineTo(finaleA, finaleb);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento) {
  if (evento.keyCode == teclas.UP) {
    ultimoPuntoB -= 10;
    dibujarLinea(color, inicioA, inicioB, ultimoPuntoA, ultimoPuntoB);
    inicioA = ultimoPuntoA;
    inicioB = ultimoPuntoB;
    console.log("arriba");
  } else if (evento.keyCode == teclas.DOWN) {
    ultimoPuntoB += 10;
    dibujarLinea(color, inicioA, inicioB, ultimoPuntoA, ultimoPuntoB);
    inicioA = ultimoPuntoA;
    inicioB = ultimoPuntoB;
    console.log("abajo");
  } else if (evento.keyCode == teclas.LEFT) {
    ultimoPuntoA -= 10;
    dibujarLinea(color, inicioA, inicioB, ultimoPuntoA, ultimoPuntoB);
    inicioA = ultimoPuntoA;
    inicioB = ultimoPuntoB;
    console.log("izquierda");
  } else if (evento.keyCode == teclas.RIGHT) {
    ultimoPuntoA += 10;
    dibujarLinea(color, inicioA, inicioB, ultimoPuntoA, ultimoPuntoB);
    inicioA = ultimoPuntoA;
    inicioB = ultimoPuntoB;
    console.log("derecha");
  }
}
