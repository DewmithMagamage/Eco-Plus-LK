document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const overlay = document.querySelector('.overlay');
    const extendedView = document.querySelector('.extended-view');
    const closeBtn = document.querySelector('.close-btn');
    const colorPicker = document.getElementById('color');
    const fontSelect = document.getElementById('font');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const imgSrc = thumbnail.querySelector('img').src;
            const imgAlt = thumbnail.querySelector('img').alt;
            const description = thumbnail.dataset.description;
            const title = thumbnail.dataset.title;

            extendedView.querySelector('img').src = imgSrc;
            extendedView.querySelector('img').alt = imgAlt;
            extendedView.querySelector('h2').textContent = title;
            extendedView.querySelector('p').textContent = description;

            overlay.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
    });

    colorPicker.addEventListener('input', (event) => {
        extendedView.style.backgroundColor = event.target.value;
    });

    fontSelect.addEventListener('change', (event) => {
        extendedView.style.fontFamily = event.target.value;
    });

    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            overlay.style.display = 'none';
        }
    });
});
