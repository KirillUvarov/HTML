'use strict';

// const a = 5;
// let b = 10;

// var x = 0, y =0;
// alert( x == 0 && y == 0);

// Задача 2: Получить от пользователя два числа и вывести в диалоговое окно сумму значений, 
// которые ввел пользователь, вывод должен выглядеть так (пример): Результат сложения 
// чисел 5 и 2 равен 7.

// const a = Number.parseFloat(prompt('Введите число №1: '));
// const firstNum = +prompt('Введите число №1: '); //Можно и так
// const secondNum = Number.parseFloat(prompt('Введите число №2: ')); 

// function sum(firstNum, secondNum) {
//     return firstNum + secondNum;
// }    

// alert(`Результат сложения чисел ${firstNum} и ${secondNum} равен ${sum(firstNum, secondNum)}`); //Косая кавычка на кнопке Ё


// Задача 4: вывести на экран в диалоговом окне текст с сообщением “Вам хорошо живется?” и кнопками «ОК», «Отмена», для чего необходимо использовать confirm.- При нажатии на кнопку “ОК” вывести в диалоговом окне текст с сообщением “Тогда мы идем к вам!”. - При нажатии на кнопку “Отмена” вывести в диалоговом окне текст с сообщением “Ну вы держитесь там!”.


// const result = confirm("Вам хорошо живется?");
// if (result) {
//     alert('Тогда мы идём к вам!');
// } else{
//     alert('Ну вы держитесь там!')
// }

// Задача 5: перепишите код, используя переключатель case, запрося продукт через диалоговое окно.
 
// <скрипт>
// let product = "Бананы";
 
// if (product == "Мандарины") {
//   alert('Мандарины стоят 100 руб/кг.');
// } else if (product == "Бананы") {
//   alert('Бананы и груши стоят 70 руб/кг.');
// } else if (product == "Груши") {
//   alert('Бананы и груши стоят 70 руб/кг.');
// } еще {
//   alert('Нет такого товара.');
// }
// </скрипт>


// const product = "Бананы";
// switch (product) {
//     case "Мандарины":
//         alert('Мандарины стоят 100 руб/кг.');
//         break;
//     case "Бананы":
//     case "Груши":
//         alert('Бананы и груши стоят 70 руб/кг.');
//         break;
//     default:
//         alert('Нет такого продукта!');
// }

// Функция getMaxEvenElement массива с увеличенными числами, необходимо 
// реализация так, чтобы она возвращала размер большого массива, 
// который измеряет в четном индексе, включая 0.
 
// function getMaxEvenElement(arr) {
//     let max = arr[0]
//  for (let i = 0; i < arr.length; i+=2) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
//  }
//  return max;
// }
 
// console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0])); // 5
// console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50])); // 31
// Math.max(...arr)



/*
Задача с реального собеседования.
 
Один покупатель старинных уникальных часов хочет приобрести для музея 
двое часов. В магазине у хозяйки есть n разных часов с соответствующими 
ценами [p1, ..., pn]. Покупатель хочет полностью использовать свой 
бюджет. Необходимо выяснить получится ли это.
*/

// function f(clockArr, money) {
//     for (let i = 0; i < clockArr.length - 1; i++) {
//         for (let j = i + 1; j < money.length - 1; j++) {
//             const first = clockArr[j]
//             const second = clockArr[i]
//             if (Math.round ((first + second) * 100) /  100 == money) {
//                 return true;
//             } 
//         }
//     }
//     return false;
// }
 
// // console.log(f([8.74, 3.12, 9.50, 2.35], 2.35)); // false
// // console.log(f([1.1, 4.2, 7.5, 0.4], 8.4)); // false
// console.log(f([54.10, 20.00, 18.51, 97.75, 35.20, 76.42], 89.3)); // true
// // console.log(f([5, 5, 5, 5, 5, 5], 10)); // true














// // confirm('jhfjhf')
// var name = prompt("Как тебя зовут?", "");

// let accessAllowed = (p > 18) ? true : false;
// alert("Ты родился - "  + name + p + "!");
// alert(true && true); //true
// alert(false && true); //false
// alert(true && false); //false
// alert(false && false); //false


// function roundNumber(number, digits) {
//     var multiple = Math.pow(10, digits);
//     var rndedNum = Math.round(number * multiple) / multiple;
//     return rndedNum;
// }

// let i = 0;
// while (i < 3) { //выводит 0, затем 1, затем 2
//     alert(i);
//     i++
// }

// let j = 0;
// do {
//     alert(i);
//     i++;
// } while (i < 4)

// for (let i = 0; i < 3; i++) {// выведет0, 1, 2
// alert(i);
// }

// let a = 2 + 2;
// switch (a) {
//     case 3: 
//         alert('мало');
//         break;
//     case 4:
//         alert('ага');
//         break;
//     case 5:
//         alert('много');
//         break;
//     default:
//         alert('Ну не')
// }

// function showMessage(){
//     alert('Всем хай!');
// }

// showMessage()
// showMessage()

// function sum(a, b){
//     return a + b + 1;
// }

// let x = parseInt(prompt("Введи а: "));
// let b = parseInt(prompt("Введи b: "));
// alert(sum(x,b));





 
// Задача 2: Получить от пользователя два числа и вывести в диалоговое окно 
// сумму значений, которые ввел пользователь, вывод должен выглядеть так(пример): 
// Результат сложения чисел 5 и 2 равен 7.
 
// const firstNum = Number.parseFloat(prompt("Введите первое число:"));
// const secondNum = +prompt("Введите второе число:");
// function sum(first, second) {
//     return first + second; 
// }
 
// alert(`Результат сложения чисел ${firstNum}\
//  и ${secondNum} равен ${sum(firstNum, secondNum)}`);
 
// Задача 4: вывести на экран в диалоговом окне текст с сообщением 
// “Вам хорошо живется ?”
// и кнопками «ОК», «Отмена», для чего необходимо использовать confirm.
// - При нажатии на кнопку “ОК” вывести в диалоговом окне текст с 
// сообщением “Тогда мы идем к вам!”.
// - При нажатии на кнопку “Отмена” вывести в диалоговом окне текст 
// с сообщением “Ну вы держитесь там!”.
 
// const result = confirm('Вам хорошо живется?');
// if (result) {
//     alert('Тогда мы идем к вам!');
// } else {
//     alert('Ну вы держитесь там!');
// }
 
// Задача 5: перепишите код, используя конструкцию switch-case, 
// запрашивая продукт через диалоговое окно.
 
// let product = "Бананы";
 
// if (product == "Мандарины") {
//   alert('Мандарины стоят 100 руб/кг.');
// } else if (product == "Бананы") {
//   alert('Бананы и груши стоят 70 руб/кг.');
// } else if (product == "Груши") {
//   alert('Бананы и груши стоят 70 руб/кг.');
// } else {
//   alert('Нет такого продукта.');
// }
 
// const product = "Бананы";
// switch (product) {
//     case "Мандарины":
//         alert('Мандарины стоят 100 руб/кг.');
//         break;
//     case "Бананы":
//     case "Груши":
//         alert('Бананы и груши стоят 70 руб/кг.');
//         break;
//     default:
//         alert('Нет такого продукта.');
// }
 
 
// Функция getMaxEvenElement принимает массив с целыми числами, 
// необходимо реализовать функцию так, чтобы она возвращала 
// значение большего элемента массива, 
// который записан в четном индексе включая 0.
 
// function getMaxEvenElement(arr) {
//     let max = arr[0];
//     for (let i = 2; i < arr.length; i += 2) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
 
// console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0])); // 5
// console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50])); // 31
 
 
/*
Задача с реального собеседования.
 
Один покупатель старинных уникальных часов хочет приобрести для музея 
двое часов. В магазине у хозяйки есть n разных часов с соответствующими 
ценами [p1, ..., pn]. Покупатель хочет полностью использовать свой 
бюджет. Необходимо выяснить получится ли это.
*/
 
function f(clockArr, money) {
    for (let i = 0; i < clockArr.length - 1; i++){
        for (let k = i + 1; k < clockArr.length; k++){
            const first = clockArr[i];
            const second = clockArr[k];
            if (Math.round((first + second) * 100) / 100 === money) {
                return true;
            }
        }
    }
    return false;
}
 
// console.log(f([8.74, 3.12, 9.50, 2.35], 2.35)); // false
// console.log(f([1.1, 4.2, 7.5, 0.4], 8.4)); // false
console.log(f([54.10, 20.00, 18.51, 97.75, 35.20, 76.42], 89.3)); // true
// console.log(f([5, 5], 10)); // true
 