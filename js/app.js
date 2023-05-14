//Array carrito

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//Referencias globales

let contenedor = document.getElementById("contenedor__productos");
let contador__carrito = document.getElementById("contador__carrito");
let modal = document.getElementById("modal-contenido");
let botonVaciar = document.getElementById("vaciar");

//Actualiza el contador del carrito

function contarContenidoCarrito() {
  contador__carrito.innerHTML = `${carrito.length}` || 0;
}

//Muestra en el dom los productos

function mostrarEnDOM() {
  let productos = JSON.parse(localStorage.getItem("productos"));
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

//Muestra el contenido del carrito en un modal

function mostrarEnCarrito() {
  let enCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
  let idBoton = 1;
  modal.innerHTML = "";
  enCarrito.forEach((item) => {
    modal.innerHTML += `<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${item.img}" class="img-fluid rounded-start" alt="${item.nombre}">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${item.nombre}</h5>
          <p class="card-text">$${item.precio}</p>
          <p class="card-text"><small class="text-muted">Cantidad: </small>${item.cantidad}</p>
          <button onclick='quitarProducto(${item.id})'  id="${idBoton}" data-id="${idBoton}" type="button" class="btn btn-danger mt-auto btnQuitar" 
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

//Agrega un producto al carrito por medio del boton Agregar al carrito

function agregarAlCarrito(boton) {
  boton.addEventListener("click", () => {
    const producto = listaZapatillas.find((item) => {
      return item.id === +boton.dataset.id;
    });
    carrito.push(producto);
    console.log(`agregaste ${producto.nombre}`);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    contarContenidoCarrito();
    mostrarEnCarrito();
  });
}

// Posteriormente sera usada para escuchar el evento DOMCONTENTLOADED

function agregarProductos() {
  agregarAlCarrito(boton1);
  agregarAlCarrito(boton2);
  agregarAlCarrito(boton3);
  agregarAlCarrito(boton4);
  agregarAlCarrito(boton5);
  agregarAlCarrito(boton6);
}

//Busca un producto y lo elimina

function quitarProducto(id) {
  let idBuscado = carrito.findIndex((producto) => {
    return producto.id === id;
  });

  console.log(idBuscado);
  carrito.splice(idBuscado, 1);

  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarEnCarrito();
  contarContenidoCarrito();
}

//Vacia el carrito y vuelve el contador a 0

function vaciarCarrito() {
  carrito = [];
  localStorage.setItem("carrito", JSON.stringify(carrito));
  contarContenidoCarrito();
  mostrarEnCarrito();
}
