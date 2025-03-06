document.addEventListener("DOMContentLoaded", function() {
    const burger = document.getElementById("burger");
    const navLink = document.getElementById("nav-link");

    burger.addEventListener("click", function() {
        navLink.classList.toggle("active");
    });
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message sent successfully!");
    this.reset();
});

document.getElementById("clear-btn").addEventListener("click", function() {
    document.getElementById("contact-form").reset();
});
