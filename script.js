window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY + window.innerHeight / 2; // положення скроллу плюс половина висоти екрана
    const images = document.querySelectorAll('.fullscreen-image-wrapper');

    images.forEach(image => {
        const imageTop = image.offsetTop; // положення верхнього краю фото відносно верху документа
        const imageBottom = imageTop + image.offsetHeight; // положення нижнього краю фото відносно верху документа
        const overlay = image.querySelector('.image-overlay');

        if (scrollPosition >= imageTop && scrollPosition <= imageBottom) {
            overlay.style.opacity = '1';
        } else {
            overlay.style.opacity = '0';
        }
    });
});


/// Об'єкт-обробник подій
const contentLoader = {
    handleEvent: function(event) {
        const contentArea = document.getElementById('contentArea');
        contentArea.innerHTML = '<img src="/images/trash-can.png" alt="Loaded Content">';
        // Додаємо клас для стилізації, щоб показати, що вміст оновився
        contentArea.classList.add('updated');
    }
};

// Призначаємо обробник події
const loadButton = document.getElementById('loadContent');
loadButton.addEventListener('click', contentLoader);

// Видаляємо обробник події
const removeHandlerButton = document.getElementById('removeHandler');
removeHandlerButton.addEventListener('click', function() {
    loadButton.removeEventListener('click', contentLoader);
    const contentArea = document.getElementById('contentArea');
    contentArea.textContent = "Load content handler removed.";
    contentArea.classList.remove('updated');
});


// Отримуємо список
const myList = document.getElementById('myList');

// Додаємо обробник кліку до списку
myList.addEventListener('click', function(event) {
    // Перевіряємо, чи клікнули на елемент списку
    if (event.target.tagName === 'LI') {
        // Знімаємо підсвічування з усіх елементів списку
        const listItems = document.querySelectorAll('#myList li');
        listItems.forEach(item => {
            item.classList.remove('highlighted');
        });

        // Підсвічуємо клікнутий елемент
        event.target.classList.add('highlighted');
    }
});

// Отримуємо елемент меню
const menu = document.getElementById('menu');

document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('text');
    const menu = document.querySelector('.menu');
    
    menu.addEventListener('click', function(event) {
      const button = event.target.closest('.menu-button');
      if (button) {
        const color = button.getAttribute('data-color');
        textElement.style.color = color;
      }
    });
  });