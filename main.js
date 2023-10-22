document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".carousel-slide");
    let currentIndex = 0;
    const intervalTime = 5000; // Cambiar cada 5 segundos

    //Mostrar el primer slide
    //slides[currentIndex].style.display = "block";
   // slides[currentIndex].classList.add("opacity")

    function mostrarCarrusel() {
        //elemento.classList.replace("carousel-slide", "carousel-slide-1");
       // slides[currentIndex].classList.remove("opacity");
        slides[currentIndex].style.opacity = "0";

        currentIndex = (currentIndex + 1) % slides.length;
        console.log(currentIndex);
        
        slides[currentIndex].style.opacity = "1";
        //slides[currentIndex].classList.add("opacity");

    }

    // Cambiar de slide automáticamente
    setInterval(mostrarCarrusel, intervalTime);
});

// selecionamos cada imagen de la galeria
     const contenedorImg1=document.querySelectorAll('.galeria-imgs_container');


// aca creamos ell contenido de cada ventana emergente
const contenidoVentanaEmergente1=
`<div class="emergente-titulo hijos">
<h2>muebele de madera</h2>
</div>
<div class="emergente-caracteristicas hijos">madera del algun tipo</div>
<div class="emergente-caracteristicas hijos">mueble para un determinado ambiente</div>
<div class="emergente-caracteristicas hijos">costo estimado de muebels de este tipo</div>`

    

    contenedorImg1.forEach(function(elemento){
        const ventanaEmergente=elemento.querySelector(".proceso-trabajo_item_ventana-emergente1");
        elemento.addEventListener('mouseover',function(){
            
            elemento.style.overflow = "visible"
            setTimeout(() => {
                ventanaEmergente.innerHTML=contenidoVentanaEmergente1;
            }, 1000);
            
        })
        elemento.addEventListener('mouseout',function(){
            elemento.style.overflow = "hidden"

        })    
     })
   

     
