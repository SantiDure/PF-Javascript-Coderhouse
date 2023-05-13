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
    return precio * cantidad;
  }

  tieneDescuento() {
    this.precio >= 45000 ? this.precio * 0.9 : this.precio;
  }
}

const listaZapatillas = [
  new Zapatilla(
    1,
    "Adidas Response 3.0",
    47999,
    "Adidas",
    "../assets/adidas/response-3.0.webp",
    1
  ),
  new Zapatilla(
    2,
    "Adidas Questar",
    39999,
    "Adidas",
    "../assets/adidas/questar.webp",
    1
  ),
  new Zapatilla(
    3,
    "Adidas Nebzed Super Boost",
    36999,
    "Adidas",
    "../assets/adidas/nebzed-super-boost.webp",
    1
  ),
  new Zapatilla(
    4,
    "Adidas Grand Court",
    25999,
    "Adidas",
    "../assets/adidas/grand-court-6393-mark.webp",
    1
  ),
  new Zapatilla(
    5,
    "Adidas Duramo Protect",
    41999,
    "Adidas",
    "../assets/adidas/duramo-protect-3985-dash.jpg",
    1
  ),
  new Zapatilla(
    6,
    "Adidas Breaknet",
    25999,
    "Adidas",
    "../assets/adidas/breaknet.webp",
    1
  ),
];

//Carga los productos al localStorage
localStorage.setItem("productos", JSON.stringify(listaZapatillas));
