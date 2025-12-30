// Dynamic Greeting Logic
document.addEventListener("DOMContentLoaded", function() {
    const greeting = document.getElementById("greeting");
    const hour = new Date().getHours();
    
    if (hour < 12) greeting.innerHTML = "Good Morning!";
    else if (hour < 18) greeting.innerHTML = "Good Afternoon!";
    else greeting.innerHTML = "Good Evening!";
});

// Back to Top Button Visibility
let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

// Scroll to Top action
mybutton.onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};