function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    
    // Save preference to console for debugging
    console.log("Theme toggled by John Patrick");
}

// Ensure smooth transitions when loading
window.addEventListener('DOMContentLoaded', event => {
    console.log('Aesthetic Profile Loaded Successfully');
});