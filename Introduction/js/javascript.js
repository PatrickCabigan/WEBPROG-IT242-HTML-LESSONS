function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-theme");
    
    // Check if it's working in the console
    if(body.classList.contains("dark-theme")) {
        console.log("Dark Mode Active");
    } else {
        console.log("Light Mode Active");
    }
}

// Research check from W3Schools
console.log("John Patrick's script is successfully linked!");