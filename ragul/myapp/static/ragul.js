document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery-item img');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.getElementById('close');
    const captionText = document.getElementById('caption'); 

    images.forEach((image) => {
        image.addEventListener('click', () => {
            modal.style.display = 'flex'; 
            modalImg.src = image.src;
            captionText.innerHTML = image.getAttribute('data-caption') || image.alt;
        });
    });
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

