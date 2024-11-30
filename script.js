document.addEventListener("DOMContentLoaded", () => {
    const toggleImage = document.getElementById("toggle-image");
    const clickSound = document.getElementById("click-sound");

    // URLs for the two images
    const image1 = "https://i.ibb.co/QfScBbn/1.png";
    const image2 = "https://i.ibb.co/CtTLLnL/2.png";

    // Preload images
    const preloadImage1 = new Image();
    const preloadImage2 = new Image();
    preloadImage1.src = image1;
    preloadImage2.src = image2;

    let isImage1 = true;

    toggleImage.addEventListener("click", () => {
        // Toggle image
        toggleImage.src = isImage1 ? image2 : image1;
        isImage1 = !isImage1;

        // Play click sound
        clickSound.currentTime = 0; // Reset sound to start
        clickSound.play();
    });
});
