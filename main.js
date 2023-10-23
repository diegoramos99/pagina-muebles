document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".carousel-slide");
    let currentIndex = 0;
    const intervalTime = 5000; // Cambiar cada 5 segundos

    function mostrarCarrusel() {

        slides[currentIndex].style.opacity = "0"
        currentIndex = (currentIndex + 1) % slides.length;
        console.log(currentIndex);
        slides[currentIndex].style.opacity = "1";
    }
    // Cambiar de slide automáticamente
    setInterval(mostrarCarrusel, intervalTime);
});

// selecionamos cada imagen de la galeria
     const contenedorImg1=document.querySelectorAll('.galeria-imgs_container');


// aca creamos ell contenido de cada ventana emergente en index-galeria 
const contenidoVentanaEmergente1=
`<div class="emergente-titulo hijos">
<h2>muebele de madera</h2>
</div>
<div class="emergente-caracteristicas hijos">madera del algun tipo</div>
<div class="emergente-caracteristicas hijos">mueble para un determinado ambiente</div>
<div class="emergente-caracteristicas hijos">costo estimado de muebels de este tipo</div>`

    
    contenedorImg1.forEach(function(elemento){
        const ventanaEmergente=elemento.querySelector(".proceso-trabajo_item_ventana-emergente1");
        elemento.addEventListener('click',function(){
            
            ventanaEmergente.innerHTML=contenidoVentanaEmergente1;    
            elemento.style.overflow = "visible"
            
            ventanaEmergente.classList.toggle("proceso-trabajo_item_ventana-emergente1_evento")
                    
        })
      
     })

// codigo para nuestrosProductos.html

const nuestrosProductosGaleriaBtn=document.querySelector('#galeriaBtn');
const contentGaleria=document.querySelector('#galeria-imgs')
nuestrosProductosGaleriaBtn.addEventListener('click',(event)=>{
    // event.preventDefault();
  
  contentGaleria.style.height="max-content"

})



   

     
