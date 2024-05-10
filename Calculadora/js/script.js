
import {numbers, operations, display} from './querySelector.js';

let operation = null;

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/js/servicesWorker.js')
      .then((reg) => {
        console.log('Registrado nosso primeiro service worker', reg);
      }).catch((err) => {
        console.log('Algo de errado aconteceu', err);
      });
  });
}

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if(display.textContent === "0"){
      display.textContent = "";
    }
    display.textContent += number.textContent;
  })
})

operations.forEach( (op) => {
  op.addEventListener("click", () => {
    if(operation === null){
      display.textContent += op.textContent;
      if(operation !== "="){
        operation = op.textContent;
      }
    }
  }) 
})

document.getElementById("equalsBtn").addEventListener("click", () => {
  if (operation !== null) {
    let operationIndice = display.textContent.indexOf(operation);
    let firstNumber = display.textContent.substring(0, operationIndice);
    let resultado = "";

    switch (operation) {
      case '+':
        for (var i = 1; i < 11; i++) {
          resultado += `${firstNumber} + ${i} = ${parseFloat(firstNumber) + i}<br>`;           
        }
        break;

      case '-':
        for (var i = 1; i < 11; i++) {
          resultado += `${firstNumber} - ${i} = ${parseFloat(firstNumber) - i}<br>`;           
        }
        break;

      case '*':
        for (var i = 1; i < 11; i++) {
          resultado += `${firstNumber} * ${i} = ${parseFloat(firstNumber) * i}<br>`;           
        }
        break;

      case '/':
        for (var i = 1; i < 11; i++) {
          resultado += `${firstNumber} / ${i} = ${(parseFloat(firstNumber) / i).toFixed(2)}<br>`;           
        }
        break;
    }

    display.innerHTML = resultado;
    operation = null;
  }  
})


document.getElementById("clear")
    .addEventListener('click', () => {
  display.textContent = "0";
  operation = null;
})