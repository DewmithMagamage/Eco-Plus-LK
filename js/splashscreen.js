document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelector('.transition-overlay').classList.add('active');
        setTimeout(() => {
            window.location.href = "home.html";
        }, 1000); 
    }, 4000); 
});
