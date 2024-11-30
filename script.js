document.addEventListener("DOMContentLoaded", () => {
    const toggleImage = document.getElementById("toggle-image");
    const clickSound = document.getElementById("click-sound");
    const overlay = document.getElementById("overlay");
    const countdownElement = document.getElementById("countdown");

    // URLs for the two images
    const image1 = "https://i.ibb.co/QfScBbn/1.png";
    const image2 = "https://i.ibb.co/CtTLLnL/2.png";

    // Preload images
    const preloadImage1 = new Image();
    const preloadImage2 = new Image();
    preloadImage1.src = image1;
    preloadImage2.src = image2;

    let isImage1 = true;

    // Countdown logic
    let countdown = 5;
    const countdownInterval = setInterval(() => {
        countdown--;
        countdownElement.textContent = countdown;

        if (countdown <= 0) {
            clearInterval(countdownInterval);
            overlay.style.display = "none"; // Hide overlay after countdown
        }
    }, 1000);

    // Toggle image on click
    toggleImage.addEventListener("click", () => {
        if (overlay.style.display === "none") {
            // Toggle image
            toggleImage.src = isImage1 ? image2 : image1;
            isImage1 = !isImage1;

            // Play click sound
            clickSound.currentTime = 0; // Reset sound to start
            clickSound.play();
        }
    });
});
