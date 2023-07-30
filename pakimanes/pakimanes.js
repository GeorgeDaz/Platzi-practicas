var imagenes = [];
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.jpeg";
imagenes["Vaquisauro"] = "Vaca.png";

class Pakiman {
  constructor(name, type, attack, defense, life) {
    this.name = name;
    this.type = type;
    this.attack = attack;
    this.defense = defense;
    this.life = life;
    this.imagen = new Image();
    this.imagen.src = imagenes[name];
  }
  hablar() {
    alert(this.name);
  }
  mostrar() {
    document.body.appendChild(this.imagen);
    document.write("<p>");
    document.write("Nombre: " + this.name + "<br>");
    document.write("Tipo: " + this.type + "<br>");
    document.write("Ataque: " + this.attack + "<br>");
    document.write("Defensa: " + this.defense + "<br>");
    document.write("Vida: " + this.life + "<hr>");
    document.write("</p>");
  }
}
var pokacho = new Pakiman("Pokacho", "Electric", 150, 70, 250);
var tocinauro = new Pakiman("Tocinauro", "Tierra", 180, 350, 500);
var vaquisauro = new Pakiman("Vaquisauro", "Tierra", 100, 800, 1000);

pokacho.mostrar();
tocinauro.mostrar();
vaquisauro.mostrar();
