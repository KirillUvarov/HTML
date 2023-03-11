'use strict';

const result = confirm("Конвертируем Цельсий в Фаренгейт? - ОК. \nКонвертируем Фаренгейт в Цельсий? - ОТМЕНА.");

function getConvertCelFar(temp) {
    let fareng = 9 / 5 * temp + 32;
    return  Math.round(fareng*100)/100;
}

function getConvertFarCel(temp) { //Цельсии = (Фаренгейты - 32) / 1,8.
    let celsi = (temp -32) / 1.8;
    return  Math.round(celsi*100)/100;
}

if (result) {
    const temp = Number.parseInt(prompt('Введите температуру в градусах Цельсия '));
    alert(`Цельсий: ${temp} \nФаренгейт: ${getConvertCelFar(temp)}`);
} else{
    const temp = Number.parseInt(prompt('Введите температуру в градусах Фаренгейта '));
    alert(`Фаренгейт: ${temp} \nЦельсий: ${getConvertFarCel(temp)}`);
}






// alert(`Цельсий: ${temp} Фаренгейт: ${getConvert(temp)}`);

// const temp = Number.parseFloat(prompt('Введите температуру в градусах Цельсия '));

// function getConvert(temp) {
//     let fareng = 9 / 5 * temp + 32;
//     return  Math.round(fareng*100)/100;
// }

// alert(`Цельсий: ${temp} Фаренгейт: ${getConvert(temp)}`);