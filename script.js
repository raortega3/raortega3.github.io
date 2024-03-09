document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll(".fade-image");
    var blackScreen = document.querySelector(".black-screen");

    // Initial fade in
    images[0].style.opacity = "1";
    blackScreen.style.opacity = "0";

    // Fade to next image after 3 seconds
    setTimeout(function() {
        images[0].style.opacity = "0";
        images[1].style.opacity = "1";
    }, 3000);

    // Fade to black after another 3 seconds
    setTimeout(function() {
        blackScreen.style.opacity = "1";
    }, 6000);
});
