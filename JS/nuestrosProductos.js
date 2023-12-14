


const contenedorImg1 = document.querySelectorAll('.galeria-imgs_container');


const nuestrosProductosGaleriaBtn = document.querySelector('.btn-mostrar-mas');
const contentGaleria = document.querySelector('#galeria-imgs')
nuestrosProductosGaleriaBtn.addEventListener('click', (event) => {


    contentGaleria.style.overflow = "scroll";
    contentGaleria.style.height = "140vh"
    nuestrosProductosGaleriaBtn.style.display="none"
})

