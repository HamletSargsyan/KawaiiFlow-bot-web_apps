let tg = window.Telegram.WebApp;

tg.expand(); // расширяем на всё окно  

tg.MainButton.text = "Отправить"; // изменяем текст кнопки 

// Получаем ссылки на поля ввода и кнопку
let ageInput = document.getElementById("age");
let activityInput = document.getElementById('activity');
let activeInChatInput = document.getElementById('activeInChat');
let monitorChatInput = document.getElementById('monitorChat');
let levelInput = document.getElementById('level');
let aboutInput = document.getElementById('about');
let submitButton = document.getElementById("submit");

// Добавляем обработчик события при изменении полей ввода
ageInput.addEventListener('input', checkFields);
activityInput.addEventListener('input', checkFields);
activeInChatInput.addEventListener('input', checkFields);
monitorChatInput.addEventListener('input', checkFields);
levelInput.addEventListener('input', checkFields);
aboutInput.addEventListener('input', checkFields);

// Функция для проверки заполненности полей и отображения кнопки
function checkFields() {
    let areFieldsFilled = ageInput.value && activityInput.value && activeInChatInput.value && monitorChatInput.value && levelInput.value && aboutInput.value;
    if (areFieldsFilled) {
        tg.MainButton.show();
    } else {
        tg.MainButton.hide();
    }
}

// Добавляем обработчик события при клике на кнопку
submitButton.addEventListener('click', function(){
    let age = ageInput.value;
    let activity = activityInput.value;
    let activeInChat = activeInChatInput.value;
    let monitorChat = monitorChatInput.value;
    let level = levelInput.value;
    let about = aboutInput.value;

    // Экранирование переводов строк
    about = about.replace(/\n/g, "\\n");
    
    tg.sendData(`ЗАЯВКА\n\nВозраст: ${age}\nАктив в чате: ${activeInChat}\nКрока/розыгрыш: ${activity}\nСлежка за чатом: ${monitorChat}\nУровень: ${level}\nО себе:\n\n${about}`);
    
    tg.close();
});
