// Dynamic Greeting based on time
document.addEventListener("DOMContentLoaded", function() {
    const greeting = document.getElementById("greeting");
    const hour = new Date().getHours();
    if (hour < 12) greeting.innerText = "Good Morning, I'm Patrick!";
    else if (hour < 18) greeting.innerText = "Good Afternoon, I'm Patrick!";
    else greeting.innerText = "Good Evening, I'm Patrick!";
});

// Back to Top Button Logic
let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

mybutton.onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};