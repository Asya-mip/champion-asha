document.addEventListener('DOMContentLoaded', function() {
    const tabsLinks = document.querySelectorAll('#tabs .tab-link');
    const contentSections = document.getElementById('content').children;

    // Обработчик кликов по вкладкам
    tabsLinks.forEach((link, index) => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Предотвращаем стандартный переход по ссылке

            // Удаляем класс active у всех ссылок
            tabsLinks.forEach(link => link.classList.remove('active'));

            // Добавляем класс active текущей ссылке
            link.classList.add('active');

            // Скрываем все активные элементы
            for(let i = 0; i < contentSections.length; i++) {
                contentSections[i].classList.add('hidden');
            }

            // Получаем целевую секцию
            let targetSectionID = link.getAttribute('href').substring(1); // "#tab1" → "tab1"

            // Показываем выбранную секцию
            document.getElementById(targetSectionID).classList.remove('hidden');
        });
    });
});