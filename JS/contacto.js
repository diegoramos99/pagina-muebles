function handleResize() {
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

    if (screenWidth >= 700) {
        console.log("La pantalla tiene el ancho y alto deseados. "+screenWidth);
        const numeroWhatsappWeb=`<a href="https://web.whatsapp.com/send?phone=541133472648" target="_blank"><i class="bi bi-whatsapp"></i></a>`
        const iconoWhatsapp=document.querySelector(".iconoWhatsapp_superior")
       iconoWhatsapp.innerHTML=numeroWhatsappWeb
    }else{
        const numeroWhatsapp=`<a href="whatsapp://send?phone=541133472648" target="_blank"><i class="bi bi-whatsapp"></i></a>`
        const iconoWhatsapp=document.querySelector(".iconoWhatsapp_superior")
        iconoWhatsapp.innerHTML=numeroWhatsapp
    }
}

window.addEventListener('resize', handleResize);

handleResize();