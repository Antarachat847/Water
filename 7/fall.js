document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    let isBlue = false; // Track the current background color

    document.addEventListener("click", function() {
        if (!isBlue) {
            body.style.backgroundColor = "#eae7d6"; //cream
        } else {
            body.style.backgroundColor = "#0e1953"; // Change back to blue
        }
        isBlue = !isBlue; // Toggle state
    });
});