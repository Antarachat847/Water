document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    let isBlue = false; // Track the current background color

    document.addEventListener("click", function() {
        if (!isBlue) {
            body.style.backgroundColor = "#0e1953"; // Change to dark blue
        } else {
            body.style.backgroundColor = "#F5E6C8"; // Change back to cream
        }
        isBlue = !isBlue; // Toggle state
    });
});