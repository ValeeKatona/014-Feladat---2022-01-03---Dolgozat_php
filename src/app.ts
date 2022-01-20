/*
* File: app.ts
* Author: Katona Valentin
* Copyright: 2022, Katona Valentin
* Group: Szoft II N
* Date: 2022-01-20
* Github: https://github.com/djvalee/
* Licenc: GNU GPL
*/
 
const num1=document.querySelector("#num1") as HTMLInputElement;
const num2=document.querySelector("#num2") as HTMLInputElement;
const result=document.querySelector("#result") as HTMLInputElement;

const calcButton=document.querySelector("#calcButton");

function add(number1:number, number2:number):number {
    return (5/2) * number1 * number2;
}

calcButton.addEventListener('click', event => {
    let res = add(+num1.value, +num2.value);
    result.value = String(res);
})


