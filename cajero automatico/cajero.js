var dineroRetirar = document.getElementById("dinero_retirar");
var botonRetirar = document.getElementById("boton");
var resultado = document.getElementById("resultado");
botonRetirar.addEventListener("click", transaccion);

var stock = {
  cincuenta: 52,
  veinte: 30,
  diez: 180,
};

function transaccion() {
  var dineroRetirado = [];
  var suma = dineroRetirar.value;
  if (suma % 10 == 0) {
    while (suma - 50 >= 0 && stock.cincuenta > 0) {
      // var imagen50 = document.createElement("img");
      imagen50 = "50.png";
      // resultado.appendChild(imagen50);
      dineroRetirado.push(imagen50);
      suma = suma - 50;
      stock.cincuenta -= 1;
    }
    while (suma - 20 >= 0 && stock.veinte > 0) {
      imagen20 = "20.png";
      suma = suma - 20;
      dineroRetirado.push(imagen20);
      stock.veinte -= 1;
    }
    while (suma - 10 >= 0 && stock.diez > 0) {
      imagen10 = "10.png";
      suma = suma - 10;
      dineroRetirado.push(imagen10);
      stock.diez -= 1;
    }
  } else {
    console.log(
      alert(
        "No es posible retirar el monto, recuerde que solo puede retirar multiplos de $10"
      )
    );
  }
  console.log(dineroRetirado);

  // Limpiamos el contenido anterior del resultado
  resultado.innerHTML = "";

  // Creamos y mostramos las imágenes
  dineroRetirado.forEach(function (rutaImagen) {
    var imagen = document.createElement("img");
    imagen.src = rutaImagen;
    resultado.appendChild(imagen);
  });
  // resultado.innerHTML = dineroRetirado;
  // document.write(dineroRetirado);
}
