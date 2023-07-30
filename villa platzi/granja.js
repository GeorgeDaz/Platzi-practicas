var vp = document.getElementById("granja_fondo");
var botonPollo = document.getElementById("pollo_boton");
var botonVaca = document.getElementById("vaca_boton");
var botonCerdo = document.getElementById("cerdo_boton");
var fondo = vp.getContext("2d");
var imagenFondo = "imagenGranja.jpg";
var imagenPollo = "pollo.png";
var imagenVaca = "Vaca.png";
var imagenCerdo = "cerdo.jpeg";

var imageFarm = new Image();
imageFarm.src = imagenFondo;
imageFarm.addEventListener("load", dibujarFondo);
var imageChicken = new Image();
imageChicken.src = imagenPollo;
botonPollo.addEventListener("click", dibujarPollo);
var imageCow = new Image();
imageCow.src = imagenVaca;
botonVaca.addEventListener("click", dibujarVaca);
var imagePig = new Image();
imagePig.src = imagenCerdo;
botonCerdo.addEventListener("click", dibujarCerdo);

function dibujarFondo() {
  fondo.drawImage(imageFarm, 0, 0);
}
function dibujarAnimal(animal) {
  fondo.drawImage(animal, aleatorio(0, 300), aleatorio(0, 150));
}
function dibujarPollo() {
  dibujarAnimal(imageChicken);
}
function dibujarVaca() {
  dibujarAnimal(imageCow);
}
function dibujarCerdo() {
  dibujarAnimal(imagePig);
}

function aleatorio(min, maxi) {
  var resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
