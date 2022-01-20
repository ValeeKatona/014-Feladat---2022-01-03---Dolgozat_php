/*
* File: app.js
* Author: Katona Valentin
* Copyright: 2022, Katona Valentin
* Group: Szoft II N
* Date: 2022-01-20
* Github: https://github.com/djvalee/
* Licenc: GNU GPL
*/
var num1 = document.querySelector("#num1");
var num2 = document.querySelector("#num2");
var result = document.querySelector("#result");
var calcButton = document.querySelector("#calcButton");
function add(number1, number2) {
    return (5/2)*number1 * number2;
}
calcButton.addEventListener('click', function (event) {
    var res = add(+num1.value, +num2.value);
    result.value = String(res);
});
