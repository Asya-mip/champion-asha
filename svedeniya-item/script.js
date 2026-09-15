document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.images img');
    let modalImageElement = null;
    let backdropElement = null;

    if (!modalImageElement || !backdropElement) {
        modalImageElement = document.createElement('div');
        modalImageElement.classList.add('modal-image');
        backdropElement = document.createElement('div');
        backdropElement.classList.add('backdrop');

        document.body.appendChild(modalImageElement);
        document.body.appendChild(backdropElement);
    }

    function openModal(event) {
        event.preventDefault();
        const imageSrc = this.getAttribute('src');
        modalImageElement.innerHTML = '<img src="' + imageSrc + '" />';
        modalImageElement.style.display = 'block';
        backdropElement.style.display = 'block';
    }

    function closeModal() {
        modalImageElement.style.display = 'none';
        backdropElement.style.display = 'none';
    }

    images.forEach(image => {
        image.addEventListener('click', openModal);
    });

    backdropElement.addEventListener('click', closeModal);
});