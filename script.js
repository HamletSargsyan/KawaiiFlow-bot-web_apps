let tg = window.Telegram.WebApp;

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
Telegram.WebApp.onEvent('mainButtonClicked', function(){
    let age = ageInput.value;
    let activity = activityInput.value;
    let activeInChat = activeInChatInput.value;
    let monitorChat = monitorChatInput.value;
    let level = levelInput.value;
    let about = aboutInput.value;
    
    tg.sendData([age, activity, activeInChat, monitorChat, level, about]); 
    // При клике на основную кнопку отправляем данные в строковом виде
});
