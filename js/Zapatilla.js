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

const listaZapatillas = [
  new Zapatilla(
    1,
    "Adidas Response 3.0",
    47999,
    "Adidas",
    "response-3.0.webp",
    1
  ),
  new Zapatilla(2, "Adidas Questar", 39999, "Adidas", "questar.webp", 1),
  new Zapatilla(
    3,
    "Adidas Nebzed Super Boost",
    36999,
    "Adidas",
    "nebzed-super-boost.webp",
    1
  ),
  new Zapatilla(
    4,
    "Adidas Grand Court",
    25999,
    "Adidas",
    "grand-court-6393-mark.webp",
    1
  ),
  new Zapatilla(
    5,
    "Adidas Duramo Protect",
    41999,
    "Adidas",
    "duramo-protect-3985-dash.jpg",
    1
  ),
  new Zapatilla(6, "Adidas Breaknet", 25999, "Adidas", "breaknet.webp", 1),
];

//Carga los productos al localStorage
localStorage.setItem("productos", JSON.stringify(listaZapatillas));
