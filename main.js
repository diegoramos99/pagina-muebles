function handleResize() {
    // Obtiene el ancho y alto actual de la pantalla
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

    // Verifica si la pantalla tiene el ancho y alto deseados
    if (screenWidth >= 700) {
        // Agrega el código que deseas ejecutar cuando la pantalla tiene el ancho y alto deseados
        const numeroWhatsappWeb=`<a href="https://web.whatsapp.com/send?phone=541133472648" target="_blank"><i class="bi bi-whatsapp"></i></a>`
        const iconoWhatsapp=document.querySelector(".iconoWhatsapp")
       iconoWhatsapp.innerHTML=numeroWhatsappWeb
    }else{
        const numeroWhatsapp=`<a href="whatsapp/send?phone=541133472648" target="_blank"><i class="bi bi-whatsapp"></i></a>`
        const iconoWhatsapp=document.querySelector(".iconoWhatsapp")
        iconoWhatsapp.innerHTML=numeroWhatsapp
    }
}

// Agrega un escucha de eventos para el evento 'resize'
window.addEventListener('resize', handleResize);

// Puedes llamar a handleResize() también al cargar la página para manejar el tamaño inicial de la pantalla
handleResize();
