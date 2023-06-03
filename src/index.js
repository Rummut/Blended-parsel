//TODO:==============================================
/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення 
(дивіться на елементи в html-розмітці)
*/
// const ref = {
//     buttonRef: document.querySelector("#alertButton"),
//     input: document.querySelector("#alertInput")
// }

// const onButtonClick = () => {
//     const inputValue = ref.input.value
//     ref.input.value = ""
//     console.log(inputValue)
// }
// ref.buttonRef.addEventListener("click", onButtonClick)

//TODO:==============================================
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

// const ref = {
//     buttonRef: document.querySelector("#swapButton"),
//     inputLeftRef: document.querySelector("#leftSwapInput"),
// inputRightRef: document.querySelector("#rightSwapInput")
// }
// const onButtonClick = () => {
//    const leftInputValue = ref.inputLeftRef.value
//     const rightInputValue = ref.inputRightRef.value
//     ref.inputLeftRef.value = rightInputValue
//     ref.inputRightRef.value = leftInputValue

// }
// ref.buttonRef.addEventListener("click", onButtonClick)

//TODO:==============================================
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/
// const ref = {
//   buttonRef: document.querySelector('#passwordButton'),
//   inputRef: document.querySelector('#passwordInput'),
// };

// ref.buttonRef.addEventListener('click', onButtonClick);

// function onButtonClick(event) {
//   if (ref.inputRef.type === 'password') {
//     ref.buttonRef.textContent = 'Приховати';
//     ref.inputRef.type = 'text';
//     return;
//   }
//   ref.buttonRef.textContent = 'Розкрити';
//   ref.inputRef.type = 'password';
// }

// Отримуємо необхідні елементи з DOM
// Задача 1 Створіть HTML сторінку з табличкою,
//  яка містить список продуктів.Кожен рядок у
//  табличці повинен містити назву продукту та його ціну.
//  При натисканні на будь - який рядок у табличці відобразіть
//  повідомлення з назвою продукту та його ціною.

// const productTable = document.querySelector('#productTable');

// Створіть HTML сторінку з формою,
// яка містить поле введення для введення
// імені користувача та кнопку.При натисканні
// на кнопку відобразіть повідомлення з привітанням з іменем користувача.

// const ref = {
//   inputRef: document.querySelector('#username'),
//   buttonRef: document.querySelector('#greetingButton'),
//   messageRef: document.querySelector('#greetingMessage'),
// };

// const onButtonClick = () => {
//   const greetingMessage = `Hello, ${ref.inputRef.value} `;
//   ref.messageRef.textContent = greetingMessage;
// };
// ref.buttonRef.addEventListener('click', onButtonClick);

// Написати функцію, яка буде створювати список // подій клавіатури event.key та event.code
//Додати класи на список eventList, на елементи //eventCode та eventKey

// const eventThumb = document.querySelector('.eventThumb');
// const arrey = [];
// const render = () => {
//   const markup = arrey
//     .map(element => {
//       return `<ul class = "eventList">
//     <li class = "eventKey">${element.key}</li>
//     <li class = "eventCode">${element.code}</li>
//     </ul>`;
//     })
//     .join('');
//   eventThumb.insertAdjacentHTML('beforeend', markup);
// };

// document.addEventListener('keydown', event => {
//   arrey.push({ key: event.key, code: event.code });
// console.log('key: ', event.key);
// console.log('code: ', event.code);
//   render();
// });
//TODO:==============================================
/*
Завдання 9
Видалити зі списку елементи, які позначені.
*/

//TODO:==============================================
/*
Завдання 10
Наведено список людей. Зроби можливість сортування списку на ім'я та на прізвище.
*/

//TODO:==============================================
/*

Завдання 11
Наведено список людей. Зроби фільтр на ім'я/прізвище.
*/
