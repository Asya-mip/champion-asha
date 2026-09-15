document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('.nav-menu');

    window.addEventListener('scroll', () => {
        if(window.scrollY > 50) {
            header.classList.add('active-header');
        } else {
            header.classList.remove('active-header');
        }
    });
});

window.onload = () => {
    const carousel = {
        container: document.querySelector('.about-club__carousel'),
        images: Array.from(document.querySelectorAll('.about-club__carousel img')),
        intervalTime: 5000 
    };

    let currentIndex = 0;

    function fadeInOut() {
        carousel.images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % carousel.images.length;
        carousel.images[currentIndex].classList.add('active');
    }

    // Запускаем цикл автопросмотра
    setInterval(fadeInOut, carousel.intervalTime);
};

document.addEventListener('DOMContentLoaded', function() {
    const headerItems = document.querySelectorAll('.disciplines-header__item');

    headerItems.forEach((item) => {
        item.addEventListener('click', () => {
            handleClick(item);
        });
    });
});

function handleClick(clickedItem) {
    // Найдем оба заголовочных пункта и уберем класс active
    const headerJudo = document.querySelector('.disciplines-header__item-judo');
    const headerSambo = document.querySelector('.disciplines-header__item-sambo');
    headerJudo.classList.remove('active');
    headerSambo.classList.remove('active');

    // Найдем два раздела с описанием и скрытые по умолчанию
    const descJudo = document.querySelector('.disciplines-description__item-judo');
    const descSambo = document.querySelector('.disciplines-description__item-sambo');
    descJudo.style.display = 'none';
    descSambo.style.display = 'none';

    // Определим, какой пункт был нажат
    if (clickedItem.contains(headerJudo)) {
        headerJudo.classList.add('active');
        descJudo.style.display = 'flex'; // Показываем описание Дзюдо
    } else if (clickedItem.contains(headerSambo)) {
        headerSambo.classList.add('active');
        descSambo.style.display = 'flex'; // Показываем описание Самбо
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const galleryTrack = document.querySelector('.gallery-track');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;
    const totalImages = galleryTrack.childNodes.length;
    const imagesPerSlide = 3;

    // Функция обновления состояния галереи остается той же
    function updateGallery() {
        galleryTrack.style.transform = `translateX(${Math.floor(currentIndex / imagesPerSlide) * -28}%)`;
    }

    // Обработчики кнопок навигации тоже остаются такими же
    prevButton.addEventListener('click', () => {
        currentIndex -= imagesPerSlide;
        if (currentIndex < 0) {
            currentIndex = totalImages - (Math.abs(currentIndex) % totalImages);
        }
        updateGallery();
    });

    nextButton.addEventListener('click', () => {
        currentIndex += imagesPerSlide;
        if (currentIndex >= totalImages) {
            currentIndex = currentIndex % totalImages;
        }
        updateGallery();
    });

    // Дополнительные переменные для отслеживания действий мыши
    let startMouseX = null;
    let isDragging = false;

    // Начало перетаскивания мышью
    galleryTrack.addEventListener('mousedown', e => {
        startMouseX = e.clientX;
        isDragging = true;
    });

    // Движение мыши
    galleryTrack.addEventListener('mousemove', e => {
        if (!isDragging || !startMouseX) return;
        const mouseMoveX = e.clientX;
        const diffX = mouseMoveX - startMouseX;

        if (Math.abs(diffX) > 50) {
            if (diffX > 0) { // Перетаскивание вправо
                prevButton.click();
            } else { // Перетаскивание влево
                nextButton.click();
            }
            isDragging = false;
        }
    });

    // Окончание перетаскивания
    galleryTrack.addEventListener('mouseup', () => {
        startMouseX = null;
        isDragging = false;
    });

    // Поддержка сенсорных устройств сохраняется из предыдущего примера
    let startTouchX = null;
    let isSwiping = false;

    galleryTrack.addEventListener('touchstart', e => {
        startTouchX = e.touches[0].clientX;
        isSwiping = true;
    });

    galleryTrack.addEventListener('touchmove', e => {
        if (!isSwiping || !startTouchX) return;
        const touchMoveX = e.touches[0].clientX;
        const diffX = touchMoveX - startTouchX;

        if (Math.abs(diffX) > 50) {
            if (diffX > 0) { // Свайп вправо
                prevButton.click();
            } else { // Свайп влево
                nextButton.click();
            }
            isSwiping = false;
        }
    });

    galleryTrack.addEventListener('touchend', () => {
        startTouchX = null;
        isSwiping = false;
    });

    // Первоначальная инициализация
    updateGallery();
});

document.querySelector('.nav-menu__burger').addEventListener('click', function() {
    document.querySelector('.nav-menu__link-mobile').classList.toggle('active');
    document.querySelector('.nav-menu').classList.toggle('active');
    document.querySelector('.nav-menu__close').classList.toggle('active');
    document.querySelector('.nav-menu__burger').classList.toggle('active');
});

document.querySelector('.nav-menu__close').addEventListener('click', function() {
    document.querySelector('.nav-menu__link-mobile').classList.remove('active');
    document.querySelector('.nav-menu').classList.remove('active');
    document.querySelector('.nav-menu__close').classList.remove('active');
    document.querySelector('.nav-menu__burger').classList.remove('active');
});