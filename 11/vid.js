document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('playVideo');
    const staticImage = document.getElementById('staticImage');
    const clickArea = document.querySelector('.click-area');
    let videoPlaying = false;

    clickArea.addEventListener('click', () => {
        if (!videoPlaying) {
            video.style.display = "block"; // Show video
            video.play(); // Start playing
            staticImage.style.display = "none"; // Hide static image
            videoPlaying = true;
        } else {
            // Redirect to the next page after second click
            window.location.href = "https://antarachat847.github.io/Water/"; 
        }
    });
});