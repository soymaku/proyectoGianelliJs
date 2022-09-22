const productos = [
  {id: 1, nombre: 'Cuadro Subrosa MR1', desc: 'Cuadro Subrosa signature Matt Ray V1, Full CrMo 4130, apto para cubiertas 2.40, caja MID',  precio: 300, img: 'subrosaMr1.jpg'},
  {id: 2, nombre: 'Horquilla Shadow Captive V2', desc: 'Horquilla Shadow Captive V2, con adaptadores para intercambiar entre 26mm y 32mm de Offset. Full CrMo 4130. Solo compatible con ejes hembra.',  precio: 170, img: 'shadowCaptiveV2.jpg'},
  {id: 3, nombre: 'Manubrio Subrosa Ray Bars', desc: 'Manubrio Subrosa signature Matt Ray, disponible en 8.75" y 9.3". Full CrMo 4130.' ,  precio: 110, img: 'subrosaRayBars.jpg'},
  {id: 4, nombre: 'Llantas Shadow', desc: 'Par de llantas, con aros Shadow Truss y mazas Shadow Symbol.',  precio: 290, img: 'shadowWheel.jpg'},
  {id: 5, nombre: 'Stem Shadow VVS', desc: 'El Stem Shadow VVS es un stem front load de la Signature de Matt Ray.',  precio: 60, img: 'shadowStem.jpg'},
  {id: 6, nombre: 'Asiento Subrosa Matt Ray', desc: 'Un asiento hecho especialmente para los fans de Matt Ray que disfrutan un estilo fino.',  precio: 65, img: 'subrosaMrSeat.jpg'},
  {id: 7, nombre: 'Palancas Shadow Finest', desc: 'Estas palancas, fuertes y finas, fueron construidas especialmente para mantener tus pies centrados y obtener mucho más control. Son compatibles con RHD Y LHD. Su estructura es ideal para realizar crank slides',  precio: 200, img: 'shadowFinestCranks.jpg'},
  {id: 8, nombre: 'Cadena Shadow Interlock Supreme', desc: 'Shadow siempre tuvo la meta de crear la mejor cadena para BMX. Esta cadena es increiblemente fuerte, tanto para sufrir tensiones como grinds. Fue hecha con un material especial para tener mayor resistencia a los daños. La cadena mas unica y fuerte jamás hecha para BMX.',  precio: 60, img: 'shadowChain.jpg'},
  {id: 9, nombre: 'Plato Shadow Sabotage', desc: 'Este plato fue basado en platos Old School, con nuevas tecnologias y materiales. Resistentes a los fuertes impactos',  precio: 38, img: 'shadowSprocket.jpg'},
];
const contenedor = document.querySelector('.main__content');
const carritoDiv = document.querySelector('.carrito')
const precioTotal = document.querySelector('#carritoPrecioTotal')
const btnComprar = document.querySelector('.aside__comprar-btn')
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

//Le doy funcion al boton "comprar"


//Aumento el precio de mis productos
/*const aumentarPrecios = productos.map(producto=>{
  return {
  id: producto.id, 
  nombre: producto.nombre, 
  desc: producto.desc, 
  precio: producto.precio * 1.05, 
  img: producto.img
  }
});*/

//Creo las cards de mis productos
for (const producto of productos) {
  let div = document.createElement('div')
  div.innerHTML = `<div class='productos'>
  <img src="./assets/${producto.img}" alt="">
  <h3 class='productos__title'>${producto.nombre}</h3>
  <p class='productos__desc'>${producto.desc}</h3>
  <p class='productos__precio'>$ ${producto.precio}</p>
  <button class='productos__comprar' id='btn-agregar${producto.id}'>Agregar al carrito</button>
  </div>`;
  contenedor.append(div)
};

//Le doy utilidad al boton "agregar al carrito"
function agregarFuncionAlBoton(){
  productos.forEach(producto=>{
    document.querySelector(`#btn-agregar${producto.id}`).addEventListener('click',()=>{
      agregarAlCarrito(producto);
    })
  })
}

agregarFuncionAlBoton();



//Hago funcionar mi carrito
function agregarAlCarrito(producto){
  let existe = carrito.some(prod=>prod.id === producto.id)
  if(existe === false){
    producto.cantidad = 1;
    carrito.push(producto)
  }
  else{
    let prodFind = carrito.find(prod=> prod.id === producto.id);
    prodFind.cantidad++;
  }
  console.log(carrito);
  renderizarCarrito();
}

//Le doy forma al carrito en el HTML
function renderizarCarrito(){
  carritoDiv.innerHTML= '';
  carrito.forEach(producto=>{
    carritoDiv.innerHTML +=`<div class='carrito__producto'>
    <h3 class='carrito__producto-title'>${producto.nombre}</h3>
    <p class='carrito__producto-cant'>Cantidad: ${producto.cantidad}</p>
    <p class='carrito__producto-price'>$${producto.precio * producto.cantidad}</p>
    <button class='carrito__producto-btn' id='btn-borrar${producto.id}'>X</button>
    </div>`;
  })
  localStorage.setItem('carrito',JSON.stringify(carrito))
  borrarProducto()
  precioTotal.innerText = carrito.reduce((acc, prod )=> acc + prod.precio * prod.cantidad, 0)
}

//Le doy utilidad al boton "borrar"
function borrarProducto(){
  carrito.forEach(producto=>{
    document.querySelector(`#btn-borrar${producto.id}`).addEventListener('click',()=>{
    let indice = carrito.findIndex(e=>e.id===producto.id)
    carrito.splice(indice,1)
    renderizarCarrito()
    })
  })
}

btnComprar.addEventListener('click', ()=>{
  alert('Gracias por comprar. ¡En los proximos 5 días hábiles estará llegando tu pedido!')
  carrito.lenght = 0;
  renderizarCarrito();
})


renderizarCarrito();  