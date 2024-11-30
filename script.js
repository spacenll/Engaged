// script.js
document.addEventListener("DOMContentLoaded", function () {
    const imageElement = document.getElementById("toggle-image");
    const soundElement = document.getElementById("click-sound");

    // مسارات الصور
    const image1 = "https://i.ibb.co/DtcbXVk/1.png";
    const image2 = "https://i.ibb.co/CtTLLnL/2.png";

    // التبديل بين الصور
    imageElement.addEventListener("click", function () {
        // تشغيل الصوت
        soundElement.currentTime = 0; // إعادة تشغيل الصوت من البداية
        soundElement.play();

        // تبديل الصورة
        if (imageElement.src.includes(image1)) {
            imageElement.src = image2;
        } else {
            imageElement.src = image1;
        }
    });
});
