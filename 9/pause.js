document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        const hiddenText = document.querySelector('.hidden-text');

        if (hiddenText) { // Ensure the element exists
            hiddenText.addEventListener("click", function() {
                window.location.href = "https://antarachat847.github.io/Water/10/";
            });
        }
    }, 3000); // Delay event listener by 3 seconds to match text fade-in
});
