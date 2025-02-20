document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('playVideo');
    const staticImage = document.getElementById('staticImage');
    const clickArea = document.querySelector('.click-area');
    let videoStarted = false;

    clickArea.addEventListener('click', () => {
        if (!videoStarted) {
            video.style.display = "block"; // Show video
            video.play(); // Start playing
            staticImage.style.display = "none"; // Hide static image
            videoStarted = true;
        }
    });

    // Second click anywhere on the video should redirect
    video.addEventListener('click', () => {
        window.location.href = "https://antarachat847.github.io/Water/";
    });
});
;
