
// selecionamos cada imagen de la galeria

const contenedorImg1 = document.querySelectorAll('.galeria-imgs_container');

// contenido de cada etiqueta de la ventana emergente---------


let contendidosContainer = [
    contendio1 = [
        titulo = "estante de abeto",
        caracteristica1 = "es grande ",
        caracteristica2 = "para cocina",
        caracteristica3 = "hay de color negro"
    ],
    contendio2 = [
        titulo = "estante de pino",
        caracteristica1 = "es chico ",
        caracteristica2 = "para panaderia",
        caracteristica3 = "hay de color blanco"
    ],
    contendio3 = [
        titulo = "estante de roble",
        caracteristica1 = "es grande ",
        caracteristica2 = "para cocina",
        caracteristica3 = "hay de color negro"
    ],
    contendio4 = [
        titulo = "estante de manazna",
        caracteristica1 = "es grande ",
        caracteristica2 = "para cocina",
        caracteristica3 = "hay de color negro"
    ],
    contendio5 = [
        titulo = "estante de cualquier cosa",
        caracteristica1 = "es grande ",
        caracteristica2 = "para cocina",
        caracteristica3 = "hay de color negro"
    ],
    contendio6 = [
        titulo = "estante de 12312124",
        caracteristica1 = "es grande ",
        caracteristica2 = "para cocina",
        caracteristica3 = "hay de color negro"
    ],
    contendio7 = [
        titulo = "estante de sdgadhjyj",
        caracteristica1 = "es grande ",
        caracteristica2 = "para cocina",
        caracteristica3 = "hay de color negro"
    ],
    contendio8 = [
        titulo = "estante de hierro",
        caracteristica1 = "es grande ",
        caracteristica2 = "para cocina",
        caracteristica3 = "hay de color negro"
    ],
    contendio9 = [
        titulo = "estante de ceramica",
        caracteristica1 = "es grande ",
        caracteristica2 = "para cocina",
        caracteristica3 = "hay de color negro"
    ],
    contendio10 = [
        titulo = "estante de abeto",
        caracteristica1 = "es grande ",
        caracteristica2 = "para cocina",
        caracteristica3 = "hay de color negro"
    ],
    contendio11 = [
        titulo = "estante de pino",
        caracteristica1 = "es chico ",
        caracteristica2 = "para panaderia",
        caracteristica3 = "hay de color blanco"
    ],
    contendio12 = [
        titulo = "estante de roble",
        caracteristica1 = "es grande ",
        caracteristica2 = "para cocina",
        caracteristica3 = "hay de color negro"
    ],
    contendio13 = [
        titulo = "estante de manazna",
        caracteristica1 = "es grande ",
        caracteristica2 = "para cocina",
        caracteristica3 = "hay de color negro"
    ],
    contendio14 = [
        titulo = "estante de cualquier cosa",
        caracteristica1 = "es grande ",
        caracteristica2 = "para cocina",
        caracteristica3 = "hay de color negro"
    ],
    contendio15 = [
        titulo = "estante de 12312124",
        caracteristica1 = "es grande ",
        caracteristica2 = "para cocina",
        caracteristica3 = "hay de color negro"
    ],
    contendio16 = [
        titulo = "estante de sdgadhjyj",
        caracteristica1 = "es grande ",
        caracteristica2 = "para cocina",
        caracteristica3 = "hay de color negro"
    ],
    contendio17 = [
        titulo = "estante de hierro",
        caracteristica1 = "es grande ",
        caracteristica2 = "para cocina",
        caracteristica3 = "hay de color negro"
    ],
    contendio18 = [
        titulo = "estante de ceramica",
        caracteristica1 = "es grande ",
        caracteristica2 = "para cocina",
        caracteristica3 = "hay de color negro"
    ],
    contendio19 = [
        titulo = "estante de hierro",
        caracteristica1 = "es grande ",
        caracteristica2 = "para cocina",
        caracteristica3 = "hay de color negro"
    ],
    contendio20 = [
        titulo = "estante de ceramica",
        caracteristica1 = "es grande ",
        caracteristica2 = "para cocina",
        caracteristica3 = "hay de color negro"
    ],
    contendio21 = [
        titulo = "estante de hierro",
        caracteristica1 = "es grande ",
        caracteristica2 = "para cocina",
        caracteristica3 = "hay de color negro"
    ],
    contendio22 = [
        titulo = "estante de ceramica",
        caracteristica1 = "es grande ",
        caracteristica2 = "para cocina",
        caracteristica3 = "hay de color negro"
    ],
    contendio23 = [
        titulo = "estante de hierro",
        caracteristica1 = "es grande ",
        caracteristica2 = "para cocina",
        caracteristica3 = "hay de color negro"
    ],
    contendio24 = [
        titulo = "estante de ceramica",
        caracteristica1 = "es grande ",
        caracteristica2 = "para cocina",
        caracteristica3 = "hay de color negro"
    ],
    contendio25 = [
        titulo = "estante de metalpesado",
        caracteristica1 = "es mucho muy grande ",
        caracteristica2 = "para living",
        caracteristica3 = "hay de color rojo"
    ],
    contendio26 = [
        titulo = "estante de mas pesado que el anterior",
        caracteristica1 = "es mucho muy grande ",
        caracteristica2 = "para living",
        caracteristica3 = "hay de color rojo"
    ]
]

// codigo para nuestrosProductos.html

const nuestrosProductosGaleriaBtn = document.querySelector('.btn-mostrar-mas');
const contentGaleria = document.querySelector('#galeria-imgs')
nuestrosProductosGaleriaBtn.addEventListener('click', (event) => {


    contentGaleria.style.overflow = "scroll";
    contentGaleria.style.height = "140vh"

})

function prepararVentana(indice1 ,ventana) {
    // revisar el id de cada nueva imagen agregada en el archivo html
    const GALERIA_VENTANA_EMERGENTE = document.querySelector("#galeria-imgs_container" + ventana);
    const VENTANA = GALERIA_VENTANA_EMERGENTE.querySelector(".proceso-trabajo_item_ventana-emergente1");
    let contenidoVentanaEmergente244 = `<div class="emergente-titulo hijos">
         <h2>${contendidosContainer[indice1][0]}</h2>
         </div>
         <div class="emergente-caracteristicas hijos">${contendidosContainer[indice1][1]}</div>
         <div class="emergente-caracteristicas hijos">${contendidosContainer[indice1][2]}</div>
         <div class="emergente-caracteristicas hijos">${contendidosContainer[indice1][3]}</div>`

    GALERIA_VENTANA_EMERGENTE.addEventListener("click", function () {
        VENTANA.innerHTML = contenidoVentanaEmergente244;
        VENTANA.classList.toggle("proceso-trabajo_item_ventana-emergente1_evento")
    })
}

for (let index = 0; index < contendidosContainer.length; index++) {
    prepararVentana(index,index+1)
    
}




