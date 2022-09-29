let botonDeCierreDetallesDeTrofeos = document.querySelector('.product-detail-close');
let DetallesDeTrofeos = document.querySelector('#detalles-de-trofeos');
let BotonDeCierreDetallesDePl = document.querySelector('.trophie-Pl-close');
let DetallesDePl = document.querySelector('#detalles-de-Pl');
let BotonDeCierreDetallesDeMc = document.querySelector('.trophie-Mc-close');
let DetallesDeMc = document.querySelector('#detalles-de-Mc');
let ImagenUcl = document.querySelector('.ImgUcl');
let ImagenPl =document.querySelector('.ImgPl');
let ImagenMc =document.querySelector('.ImgMc');

ImagenUcl.addEventListener('click',abrirDetalles);
ImagenPl.addEventListener('click',abrirDetallesPl);
ImagenMc.addEventListener('click',abrirDetallesMc);
botonDeCierreDetallesDeTrofeos.addEventListener('click',closeTrophieDetailAside);
BotonDeCierreDetallesDePl.addEventListener('click',closeTrophiePlDetail);
BotonDeCierreDetallesDeMc.addEventListener('click',closeTrophieMcDetail);

function abrirDetalles ()  {
   let IsDetallesDePlClosed = DetallesDePl.classList.contains('inactive');
   let IsDetallesDeMcClosed = DetallesDeMc.classList.contains('inactive');
   if(!IsDetallesDePlClosed){
      closeTrophiePlDetail ();
   }
   if(!IsDetallesDeMcClosed){
      closeTrophieMcDetail ();
   }

   DetallesDeTrofeos.classList.remove('inactive');
}
function closeTrophieDetailAside () {
   DetallesDeTrofeos.classList.add('inactive');
}

function abrirDetallesPl () {
   let IsDetallesDeTrofeosClosed = DetallesDeTrofeos.classList.contains('inactive');
   let IsDetallesDeMcClosed = DetallesDeMc.classList.contains('inactive');
   if(!IsDetallesDeTrofeosClosed){
      closeTrophieDetailAside ();
   }
   if(!IsDetallesDeMcClosed){
      closeTrophieMcDetail ();
   }
   DetallesDePl.classList.remove('inactive');
}
function closeTrophiePlDetail () {
   DetallesDePl.classList.add('inactive');
}

function abrirDetallesMc () {
   let IsDetallesDeTrofeosClosed = DetallesDeTrofeos.classList.contains('inactive');
   let IsDetallesDePlClosed = DetallesDePl.classList.contains('inactive');
   if(!IsDetallesDeTrofeosClosed){
      closeTrophieDetailAside ();
   }
   if(!IsDetallesDePlClosed){
      closeTrophiePlDetail ();
   }
   DetallesDeMc.classList.remove('inactive');
}
function closeTrophieMcDetail () {
   DetallesDeMc.classList.add('inactive');
}