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
    return (this.precio * this.cantidad).toFixed(2);
  }

  tieneDescuento() {
    if (this.cantidad > 4) {
      return `Tiene descuento de 15%, su precio por prenda pasa a ser de  $${(this.precio *= 0.85).toFixed()}`;
    } else {
      return `$${this.precio}`;
    }
  }
}
