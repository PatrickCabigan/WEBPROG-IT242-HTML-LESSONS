
function toggleDarkMode() {
    // We target the 'body' element
    var element = document.body;
    
    // We toggle the class 'dark-mode' defined in our CSS
    element.classList.toggle("dark-mode");
    
    // Logic check in console (F12 to see)
    console.log("Aesthetic mode has been toggled!");
}

// Optional: Console log to verify the file is connected upon loading
window.onload = function() {
    console.log("javascript.js is successfully connected to index.html");
};