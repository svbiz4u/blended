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