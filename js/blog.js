document.addEventListener('DOMContentLoaded', function() {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const moreContent = this.nextElementSibling;
            moreContent.style.display = moreContent.style.display === 'block' ? 'none' : 'block';
            this.textContent = moreContent.style.display === 'block' ? 'Read Less' : 'Read More';
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("bck-to-top");
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.add("visible");
      } else {
        backToTopButton.classList.remove("visible");
      }
    });
  
    backToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });
  