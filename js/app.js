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
          <button  id="quitar${idBoton}" data-id="${idBoton}" type="button" class="btn btn-danger mt-auto btnQuitar" 
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

function agregarProductos() {
  document.onload = agregarAlCarrito(boton1);
  document.onload = agregarAlCarrito(boton2);
  document.onload = agregarAlCarrito(boton3);
  document.onload = agregarAlCarrito(boton4);
  document.onload = agregarAlCarrito(boton5);
  document.onload = agregarAlCarrito(boton6);
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
    hayProductos();
  });
}

//Vacia el carrito y vuelve el contador a 0
function vaciarCarrito() {
  carrito = [];
  localStorage.setItem("carrito", JSON.stringify(carrito));
  contarContenidoCarrito();
  mostrarEnCarrito();
}

//Busca un producto y lo elimina

function quitarProducto(boton) {
  if (carrito.length > 0) {
    const producto = carrito.findIndex((producto) => {
      producto.id === +boton.dataset.id;

      console.log(producto);
      console.log("ESTOY EN QUITAR PRODUCTO");
      if (producto >= 0) {
        carrito.splice(producto, 1);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        contarContenidoCarrito();
        mostrarEnCarrito();
        hayProductos();
      }
    });
  }
}
function hayProductos() {
  if (carrito.length > 0) {
    let quitarUno = document.getElementById("quitar1");
    quitarUno.onload = quitarProducto(quitar1);
    if (carrito.length > 1 && quitar1) {
      let quitarDos = document.getElementById("quitar2");
      quitarDos.onload = quitarProducto(quitar2);
    }
    if (carrito.length > 2 && quitar2) {
      let quitarTres = document.getElementById("quitar3");
      quitarTres.onload = quitarProducto(quitar3);
    }
    if (carrito.length > 3 && quitar3) {
      let quitarCuatro = document.getElementById("quitar4");
      quitarCuatro.onload = quitarProducto(quitar4);
    }
    if (carrito.length > 4 && quitar4) {
      let quitarCinco = document.getElementById("quitar5");
      quitarCinco.onload = quitarProducto(quitar5);
    }
    if (carrito.length > 5 && quitar5) {
      let quitarSeis = document.getElementById("quitar6");
      quitarSeis.onload = quitarProducto(quitar6);
    }
  }
}
