// Завдання 1

// Функція для діалогу з користувачем
function userDialog() {
    // Викликаємо функцію prompt і зберігаємо результат у змінну
    var name = prompt("Please enter your name:", "");

    // Викликаємо функцію alert
    alert("Welcome, " + name);
    
    // Виводимо результат у консоль
    console.log("Your name: " + name);

    // Викликаємо функцію confirm і зберігаємо результат у змінну
    var confirmResult = confirm("Are you sure you want to access this page?");

    // Перевіряємо результат confirm і виводимо відповідне повідомлення
    if (confirmResult) {
        console.log("Access granted.");
    } else {
        console.log("Access denied.");
    }

    // Повертаємо значення імені користувача
    return name;
}

// Викликаємо функцію "Діалог з користувачем" і зберігаємо результат у змінну
var userName = userDialog();

// Функція для виводу інформації про розробника сторінки за допомогою alert
function displayDeveloperInfo(firstName, lastName, group, position) {
    // Створюємо рядок з інформацією про розробника
    var info = "Developer: " + firstName + " " + lastName + "\nGroup: " + group + "\nPosition: " + position;

    // Виводимо інформацію за допомогою alert
    alert(info);
}

// Викликаємо функцію для виводу інформації про розробника за допомогою alert
displayDeveloperInfo("Stanislav", "Podolyaka", "IK-24", "Developer");

// Функція порівняння двох рядків та виведення більшого на екран з використанням alert
function compareStrings() {
    // Запитуємо користувача ввести два рядки для порівняння
    var string1 = prompt("Enter the first string:");
    var string2 = prompt("Enter the second string:");

    if (string1 === null || string2 === null) {
        alert("Operation canceled by the user.");
        return;
    }

    if (string1.length > string2.length) {
        alert(string1 + " is longer than " + string2);
    } else if (string1.length < string2.length) {
        alert(string2 + " is longer than " + string1);
    } else {
        alert("Both strings have the same length.");
    }
}

// Викликаємо функцію порівняння рядків
compareStrings();


// Завдання 2

window.onload = function() {
    // Зміна фону сторінки на 30 секунд
    document.body.style.backgroundColor = "blue";
    setTimeout(function() {
        document.body.style.backgroundColor = "grey";
    }, 30000);
    
    // Зміна тексту в H1 елементі за допомогою getElementById
    document.getElementById("welcome-message").textContent += userName;

    // Вибираємо всі елементи <a> на сторінці
    var links = document.querySelectorAll("a");

    // Змінюємо колір тексту усіх посилань
        links.forEach(function(link) {
        link.style.color = "red"; // Новий колір тексту
    });

    // inner
    var element = document.getElementById("example-element");
    // Використання властивості innerHTML для встановлення HTML вмісту елементу
    element.innerHTML = "<p>This is new paragraph</p>";

    // outerHTML 
    var element = document.getElementById("example1-element");
    element.outerHTML = "<div>New div</div>";

    // nodeValue/data
    var textNode = document.createTextNode("New text node");
    document.body.appendChild(textNode);

    //textContent
    var element = document.getElementById("example2-element");

    element.textContent = "New text content";

};

