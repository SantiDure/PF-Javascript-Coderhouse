//Array carrito

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//Referencias globales

const contenedor = document.getElementById("contenedor__productos");
const contador__carrito = document.getElementById("contador__carrito");
const modalContenido = document.getElementById("modal-contenido");
const modal = document.getElementById("exampleModal");
const botonVaciar = document.getElementById("vaciar");
const restar = document.getElementById("menos");
const sumar = document.getElementById("mas");
const btnFinalizarCompra = document.getElementById("btnFinalizar");

//Obteniendo los datos desde el json
let listaZapatillas = [];
function obtenerDatos() {
  const URLSTOCK = "./stock.json";
  fetch(URLSTOCK)
    .then((response) => response.json())
    .then((data) => {
      listaZapatillas = data;
      localStorage.setItem("productos", JSON.stringify(listaZapatillas));
      mostrarEnDOM();
      agregarProductos();
      mostrarEnCarrito();
    });
}

//Actualiza el contador del carrito

function contarContenidoCarrito() {
  contador__carrito.innerHTML = `${carrito.length}` || 0;
}

//Muestra en el dom los productos

function mostrarEnDOM() {
  productos = [];
  let stock = JSON.parse(localStorage.getItem("productos"));
  stock.forEach((zapa) => {
    let nuevoProducto = new Zapatilla(
      zapa.id,
      zapa.nombre,
      zapa.precio,
      zapa.marca,
      zapa.img,
      zapa.cantidad
    );
    productos.push(nuevoProducto);
  });
  let idBoton = 1;
  productos.forEach((item) => {
    contenedor.innerHTML += `<div class="col mb-5">
    <div class="card h-100">
      <!-- Product image-->
      <img
        class="card-img-top"
        src="${item.img}"
        alt="${item.nombre}"
      />
      <!-- Product details-->
      <div class="card-body p-4">
        <div class="text-center">
          <!-- Product name-->
          <h5 class="fw-bolder">${item.nombre}</h5>
          <!-- Product price-->
          $${item.precio}
        
        </div>
      </div>
      <!-- Product actions-->
      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center">
          <button  id="boton${idBoton}" data-id="${idBoton}" class="btn btn-outline-dark mt-auto btnAgregar" href="#"
            >Agregar al carrito</button
          >
        </div>
      </div>
    </div>
    </div>`;

    idBoton++;
    contarContenidoCarrito();
  });
}

function sumarUno(id) {
  let idBuscado = carrito.find((producto) => {
    return producto.id === id;
  });
  idBuscado.cantidad++;

  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarEnCarrito();
  contarContenidoCarrito();
}

function restarUno(id) {
  let idBuscado = carrito.find((producto) => {
    return producto.id === id;
  });
  if (idBuscado.cantidad > 1) {
    idBuscado.cantidad--;

    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarEnCarrito();
    contarContenidoCarrito();
  }
}

//Muestra el contenido del carrito en un modal

function mostrarEnCarrito() {
  let carrito = [];
  let enCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
  enCarrito.forEach((zapa) => {
    let nuevoProducto = new Zapatilla(
      zapa.id,
      zapa.nombre,
      zapa.precio,
      zapa.marca,
      zapa.img,
      zapa.cantidad
    );
    carrito.push(nuevoProducto);
  });
  let idBoton = 1;
  modalContenido.innerHTML = "";
  carrito.forEach((item) => {
    modalContenido.innerHTML += `<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${item.img}" class="img-fluid rounded-start" alt="${
      item.nombre
    }">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title mb-3">${item.nombre}</h5>
          <p class="card-text">Precio unitario: ${item.tieneDescuento()}</p>
          <p class="card-text">Sub total: $${item.subTotal()}</p>
          <p class="card-text"><small class="text-muted">Cantidad: </small><button id='menos'  class='btn btn-success menos' onclick="restarUno(${
            item.id
          })" type='button'> - </button>  ${
      item.cantidad
    }  <button id='mas' class='btn btn-success mas' onclick="sumarUno(${
      item.id
    })" type='button'> + </button></p>
          <button onclick='quitarProducto(${
            item.id
          })'  id="${idBoton}"  type="button" class="btn btn-danger mt-auto " 
            >Quitar</button
          >
        </div>
      </div>
    </div>
  </div>`;
    idBoton++;
    contarContenidoCarrito();
  });
}

//comprueba si existe
function existe(id) {
  const index = carrito.findIndex((i) => {
    return i.id === id;
  });
  return index;
}

//Agrega un producto al carrito por medio del boton Agregar al carrito

function agregarAlCarrito(boton, id) {
  boton.addEventListener("click", () => {
    const producto = listaZapatillas.find((item) => {
      return item.id === +boton.dataset.id;
    });
    const yaExiste = existe(id);
    if (yaExiste < 0) {
      carrito.push(producto);
    } else {
      let idBuscado = carrito.find((producto) => {
        return producto.id === id;
      });
      idBuscado.cantidad++;
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
    contarContenidoCarrito();
    mostrarEnCarrito();
    Swal.fire(
      "Producto agregado al carrito!",
      `Agregaste ${producto.nombre}`,
      "success"
    );
  });
}

// Posteriormente sera usada para escuchar el evento DOMCONTENTLOADED

function agregarProductos() {
  agregarAlCarrito(boton1, 1);
  agregarAlCarrito(boton2, 2);
  agregarAlCarrito(boton3, 3);
  agregarAlCarrito(boton4, 4);
  agregarAlCarrito(boton5, 5);
  agregarAlCarrito(boton6, 6);
}

//Busca un producto y lo elimina

function quitarProducto(id) {
  let idBuscado = carrito.findIndex((producto) => {
    return producto.id === id;
  });

  carrito.splice(idBuscado, 1);

  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarEnCarrito();
  contarContenidoCarrito();
  Swal.fire("Quitaste un producto!", "", "info");
}

//Vacia el carrito y vuelve el contador a 0

function vaciarCarrito() {
  carrito = [];
  localStorage.setItem("carrito", JSON.stringify(carrito));
  contarContenidoCarrito();
  mostrarEnCarrito();
  Swal.fire("Se vació tu carrito!", "", "warning");
}

//Eventos sueltos

document.addEventListener("DOMContentLoaded", obtenerDatos);

btnFinalizarCompra.addEventListener("click", () => {
  // modal.classList.remove("show");
  Swal.fire({
    title: "Completa tus datos",
    html:
      '<input type="text" id="nombre" name="nombre" class="swal2-input" placeholder="Nombre">' +
      '<input type="text" id="apellido" name="apellido" class="swal2-input" placeholder="Apellido">' +
      '<input type="email" id="email" name="email" class="swal2-input" placeholder="Correo electrónico">' +
      '<input type="text" id="telefono" name="telefono" class="swal2-input" placeholder="Teléfono">' +
      '<input type="number" id="codigo-postal" name="codigo-postal" class="swal2-input" placeholder="Código postal">' +
      '<input type="text" id="lugar-residencia" name="lugar-residencia" class="swal2-input" placeholder="Lugar de residencia">',

    showCancelButton: true,
    preConfirm: () => {
      const nombre = Swal.getPopup().querySelector("#nombre").value;
      const apellido = Swal.getPopup().querySelector("#apellido").value;
      const email = Swal.getPopup().querySelector("#email").value;
      const telefono = Swal.getPopup().querySelector("#telefono").value;
      const codigoPostal =
        Swal.getPopup().querySelector("#codigo-postal").value;
      const lugarResidencia =
        Swal.getPopup().querySelector("#lugar-residencia").value;

      if (
        !nombre ||
        !apellido ||
        !email ||
        !telefono ||
        !codigoPostal ||
        !lugarResidencia
      ) {
        Swal.showValidationMessage("Completa todos los campos");
        return false;
      }

      // Aquí puedes realizar acciones con los datos ingresados por el usuario
      console.log("Nombre:", nombre);
      console.log("Apellido:", apellido);
      console.log("Correo electrónico:", email);
      console.log("Teléfono:", telefono);
      console.log("Código postal:", codigoPostal);
      console.log("Lugar de residencia:", lugarResidencia);
    },
  }).then((result) => {
    if (result.isDismissed) {
      // El usuario ha cancelado la alerta
      console.log("Alerta cancelada");
    }
  });
});

botonVaciar.addEventListener("click", vaciarCarrito);
