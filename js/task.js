// 31-08-2024

// Tutor25 11:16
// <div>
//       <p class="taskTitle">ЗАДАЧА 8</p>
//       <div class="statList">
//         <button class="calcButton" data-number="5">Button #1</button>
//         <button class="calcButton" data-number="2">Button #2</button>
//         <button class="calcButton" data-number="10">Button #3</button>
//         <button class="calcButton" data-number="50">Button #4</button>
//         <button class="calcButton" data-number="0">Button #5</button>
//         <button class="calcButton" data-number="20">Button #6</button>
//       </div>
//       <button id="resultButton">Вывести результат</button>
//       <div id="resultSection"></div>
//     </div>
// При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
// За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
// інформацією про те, яка кнопка була натиснута скільки разів.

// const refs = {
// statList: document.querySelector(".statlist"),
// };

// refs.statList.addEventListener("click", onStatlistButtonClick);

// let sum = 0;
// let statClicks = {};

// function onStatlistButtonClick(evt){
//   if(evt.target.nodeName != "BUTTON"){
//     return;
//   }
//   sum += Number(evt.target.dataset.number);
//   statClicks[evt.target.textContent] = (statClicks[evt.target.textContent] ?? 0) + 1
// }



/* <div>
      <p class="taskTitle">ЗАДАЧА 3</p>
      <input id="passwordInput" type="text" />
      <button id="passwordButton">Скрыть</button>
    </div>
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду. */


// const refs = {
// taskTitle: document.querySelector ('.taskTitle'), 
// passwordButton: document.querySelector('#passwordButton')

// };

// refs.passwordButton.addEventListener('click', onPasswordClick);

// function onPasswordClick(){
// if (refs.passwordButton.textContent = "Розкрите"){
//   refs.passwordButton.textContent = "Приховати";
//   refs.taskTitle.style.display = "block";
//   return
// }
// refs.taskTitle.style.display = "none"
// refs.passwordButton.textContent = "Розкрите"
// }

// Nastja:
// const refs = {
//   taskTitle: document.querySelector(".taskTitle"),
//   passwordButton: document.querySelector("#passwordButton"),
// };
// refs.passwordButton.addEventListener("click", onPasswordClick);
// function onPasswordClick() {
//   if (refs.passwordButton.textContent === "Розкрити") {
//     refs.passwordButton.textContent = "Приховати";
//       refs.taskTitle.style.display = "block";
//       return; 
//   }
//   refs.taskTitle.style.display = "none";
//   refs.passwordButton.textContent = "Розкрити";
// }

// Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
// Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
// <div>
//       <p class="taskTitle">ЗАДАЧА 2</p>
//       <button id="swapButton">SWAP ME</button>
//       <input id="leftSwapInput" type="text" value="???" />
//       <input id="rightSwapInput" type="text" value="!!!" />
//     </div>

// const refs = {
// swapButton : document.querySelector('#swapButton'),
// leftSwapInput: document.querySelector('#leftSwapInput')
// rightSwapInput: document.querySelector('#rightSwapInput')
// };

// refs.swapButton.addEventListener('click', onSwapButtonClick);
// function onSwapButtonClick (event){
// const leftSwapInputVlaue = refs.leftSwapInput.valur.trim();
// refs.leftSwapInput.value = refs.rightSwapInput.value.trim();
// refs.rightSwapInput.vlaue - leftSwapInputValue;
// }







// Задача 1
// Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
// const refs = {
// taskTitle: document.quearySelector('.taskTitle'),
// alertButton: document.querySelector('#alertButton'),
// alerInput: document.querySelector('#alertInput')
// }
// alert.alertButton.addEventListener('clock', onAlertButtonClick);
// function onAlertButtonClick () {
// console.log ('Hello')
// refs.taskTitle.textContent = refs.alertInput.value.trim()
// }
// Марьяна:
// // const refs = {
// //     taskTitle: document.querySelector('.taskTitle'),
// //     alertButton: document.querySelector('#alertButton'),
// //     alertInput: document.querySelector('#alertInput'),
// // }
// // refs.alertButton.addEventListener('click', onAlertButtonClick);
// // function onAlertButtonClick (){
    
// //     refs.taskTitle.textContent = refs.alertInput.value.trim();
// // }
// Марьяна





// const registerForm = document.querySelector(".form");

// registerForm.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
//   const login = form.elements.login.value;
//   const password = form.elements.password.value;
  
//   if (login === "" || password === "") {
//     return console.log("Please fill in all the fields!");
//   }

//   console.log(`Login: ${login}, Password: ${password}`);
//   form.reset();
// }



// 17/08/2024

//Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль


// const makeProduct =(name, price, callback) => {
// const product = {
//   name, 
//   price,
//   id: Math.random() }
//   callback(product)
// }
// const showProduct = (productName) => {
// console.log(productName)  
// }
// makeProduct ("Iphone", 1000, showProduct)



//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній

// const letMeSeeYourName =  (callback) => {
// const userName = prompt('Enter your name')
// if (userName)
// callback (!userName) {
//   alert('not correct ')
//   return;
// };
// }
// const  greet = (name) => {
// console.log (`Привіт ${name}`)
// }
// console.log(prompt('Enter your name'))
// letMeSeeYourName(greet);



// '03-08-24'
// Створіть масив styles з елементами «Джаз» та «Блюз».
//Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
//Видалить перший елемент масиву і виведіть його в консоль.
//Вставте «Реп» і «Реггі» на початок масиву.
// const styles = ["Джаз", "Блюз"]
// styles.push ("Рок-н-рол")
// const idx = styles.indexOf("Блюз")
// console.log(idx);
// if(idx !==-1 ) {
//     styles[idx] = "Класика"
// }
// console.log(styles.shift())
// console.log(styles)
// styles.unshift("Реп", "Реггі")
// console.log(styles)


//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.
// ['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']
// const typeMusic = ['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']
// function logItems(array) {
// for (let i= 0; i< array.length; i+=1)
//     {
// console.log(`${i+1} - ${array[i]}`)
// }
// }
// logItems(typeMusic)


//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.
// function caclculateAverage(...args){
// let sum = 0;
// let count = 0
// for (const arg of args) {
// if (typeof arg === 'number'){
//     sum += arg;
//     count += 1;
// }
// }
// return sum /count;
// }
// console.log(caclculateAverage(5, 10, 15, "hello"))




// // // Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.
// // function checkNumber  (a){
// //     if (a===10){
// //         return "Вірно"
// //     } else {
// //         return "Невірно"
// //     }
// // }
// // return a === 10 ? "Вірно" : "Невірно";
// // console.log (checkNumber(10))


// // Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// // значення '1', то у змінну result запишемо 'зима', якщо має значення
// // '2' - 'весна' і так далі.

// // function checkSeason (num){
// // let result = "";
// // switch (num){
// // case 1 :
// //     result = 'зима';
// //     break;
// // case 2 :
// //     result = 'весна';
// //     break;
// // case 3 :
// //     result = 'літо';
// //     break;
// // case 4 :
// //     result = 'осінь';
// //     break;
// //     default;
// //     result = "введіть число від 1 до 4"
// // }
// // return result;
// //  }

// //  console.log(checkSeason (1))
// // console.log('test')
// // console.log(5)
// console.log('Mango is delicous')