class Zapatilla {
  //Atributos
  id;
  nombre;
  precio;
  marca;
  img;
  cantidad;
  //Constructor
  constructor(id, nombre, precio, marca, img, cantidad) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.marca = marca;
    this.img = img;
    this.cantidad = cantidad;
  }

  //Metodos
  subTotal() {
    return this.precio * this.cantidad;
  }

  tieneDescuento() {
    if (this.cantidad > 5) {
      return (this.precio *= 0.85);
    }
  }

  sumarCantidad() {
    return this.cantidad++;
  }
  restarCantidad() {
    if (this.cantidad > 1) {
      return this.cantidad--;
    }
  }
}

let listaZapatillas = [];
function obtenerDatos() {
  const URLSTOCK = "./stock.json";
  fetch(URLSTOCK)
    .then((response) => response.json())
    .then((data) => {
      listaZapatillas = data;
      localStorage.setItem("productos", JSON.stringify(listaZapatillas));
      setTimeout(mostrarEnDOM, 500);
      setTimeout(agregarProductos, 500);
      setTimeout(mostrarEnCarrito, 500);
    });
}
