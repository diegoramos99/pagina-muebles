document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".carousel-slide");
    let currentIndex = 0;
    const intervalTime = 5000; // Cambiar cada 5 segundos

    // Mostrar el primer slide
    slides[currentIndex].style.display = "block";

    function nextSlide() {
        slides[currentIndex].style.display = "none";
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].style.display = "block";
    }

    // Cambiar de slide automáticamente
    setInterval(nextSlide, intervalTime);
});