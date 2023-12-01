document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".carousel-slide");
    let currentIndex = 0;
    const intervalTime = 5000; // Cambiar cada 5 segundos

    function mostrarCarrusel() {

        slides[currentIndex].style.opacity = "0"
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].style.opacity = "1";
    }
    // Cambiar de slide automáticamente
    setInterval(mostrarCarrusel, intervalTime);
});
