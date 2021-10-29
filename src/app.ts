/*
* File: app.ts, app.js
* Author: Katona Valentin
* Copyright: 2021, Katona Valentin
* Group: Szoft II N
* Date: 2021-10-29
* Github: https://github.com/djvalee/
* Licenc: GNU GPL
*/
 
const num1=document.querySelector("#num1") as HTMLInputElement;
const num2=document.querySelector("#num2") as HTMLInputElement;
const result=document.querySelector("#result") as HTMLInputElement;

const calcButton=document.querySelector("#calcButton");

function add(number1:number, number2:number):number {
    return number1 / number2 ** 2;
}

calcButton.addEventListener('click', event => {
    let res = add(+num1.value, +num2.value);
    result.value = String(res);
})


