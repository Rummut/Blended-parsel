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
