'use strict';

const myName = prompt('Как тебя зовут?');
function greeting(name) {
    console.log(`Добро пожаловать ${myName} !!!`);
    return  'Добро пожаловать,' + ' ' + name + '!!!';
}

alert(greeting(myName));