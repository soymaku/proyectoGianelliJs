const productos = [
  {id: 1, nombre: 'Cuadro Subrosa MR1', desc: 'Cuadro Subrosa signature Matt Ray V1, Full CrMo 4130, apto para cubiertas 2.40, caja MID',  precio: 300, img: 'subrosaMr1.jpg'},
  {id: 2, nombre: 'Horquilla Shadow Captive V2', desc: 'Horquilla Shadow Captive V2, con adaptadores para intercambiar entre 26mm y 32mm de Offset. Full CrMo 4130. Solo compatible con ejes hembra.',  precio: 170, img: 'shadowCaptiveV2.jpg'},
  {id: 3, nombre: 'Manubrio Ray bars', desc: 'Manubrio Subrosa signature Matt Ray, disponible en 8.75" y 9.3". Full CrMo 4130.' ,  precio: 110, img: 'subrosaRayBars.jpg'},
  {id: 4, nombre: 'Llantas Shadow', desc: 'Par de llantas, con aros Shadow Truss y mazas Shadow Symbol.',  precio: 290, img: 'shadowWheel.jpg'},
  {id: 5, nombre: 'Stem Shadow VVS', desc: 'El Stem Shadow VVS es un stem front load de la Signature de Matt Ray.',  precio: 60, img: 'shadowStem.jpg'},
  {id: 6, nombre: 'Asiento Subrosa Matt Ray', desc: 'Un asiento hecho especialmente para los fans de Matt Ray que disfrutan un estilo fino.',  precio: 65, img: 'subrosaMrSeat.jpg'},
  {id: 7, nombre: 'Palancas Shadow Finest', desc: 'Estas palancas, fuertes y finas, fueron construidas especialmente para mantener tus pies centrados y obtener mucho más control. Son compatibles con RHD Y LHD. Su estructura es ideal para realizar crank slides',  precio: 200, img: 'shadowFinestCranks.jpg'},
  {id: 8, nombre: 'Cadena Shadow Interlock Supreme', desc: 'Shadow siempre tuvo la meta de crear la mejor cadena para BMX. Esta cadena es increiblemente fuerte, tanto para sufrir tensiones como grinds. Fue hecha con un material especial para tener mayor resistencia a los daños. La cadena mas unica y fuerte jamás hecha para BMX.',  precio: 60, img: 'shadowChain.jpg'},
  {id: 9, nombre: 'Plato Shadow Sabotage', desc: 'Este plato fue basado en platos Old School, con nuevas tecnologias y materiales. Resistentes a los fuertes impactos',  precio: 38, img: 'shadowSprocket.jpg'},
];
const contenedor = document.querySelector('.main__content');
const aumentarPrecios = productos.map(producto=>{
  return {
  id: producto.id, 
  nombre: producto.nombre, 
  desc: producto.desc, 
  precio: producto.precio * 1.05, 
  img: producto.img
}
});

for (const producto of aumentarPrecios) {
  let div = document.createElement('div')
  div.innerHTML = `<div class='productos'>
  <img src="./assets/${producto.img}" alt="">
  <h3 class='productos__title'>${producto.nombre}</h3>
  <p class='productos__desc'>${producto.desc}</h3>
  <p class='productos__precio'>$ ${producto.precio}</p>
  <a href='#'>Comprar</a>
  </div>`;
  contenedor.append(div)
};

