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