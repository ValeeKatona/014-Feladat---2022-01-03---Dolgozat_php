/*
* File: app.ts, app.js
* Author: Katona Valentin
* Copyright: 2021, Katona Valentin
* Group: Szoft II N
* Date: 2021-10-29
* Github: https://github.com/djvalee/
* Licenc: GNU GPL
*/
var num1 = document.querySelector("#num1");
var num2 = document.querySelector("#num2");
var result = document.querySelector("#result");
var calcButton = document.querySelector("#calcButton");
function add(number1, number2) {
    return number1 / Math.pow(number2, 2);
}
calcButton.addEventListener('click', function (event) {
    var res = add(+num1.value, +num2.value);
    result.value = String(res);
});
