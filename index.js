// const calc = document.getElementById('calculator');
const numbers = document.getElementsByClassName('number');
const integers = [0,1,2,3,4,5,6,7,8,9];
const symbols = ['+','-','/','=','x','%'];

for (const number of numbers) {
  number.onclick = () =>{
    document.getElementsByClassName('display')[0].innerHTML = number.innerHTML
  }
}

document.addEventListener('keydown', (e)=> {
    if (e.key === "+") {
      console.log("hmmm");
    }
})
//   document.getElementsByClassName('display')[0].innerHTML = number.innerHTML
// })

const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const moduloButton = document.getElementById('modulo');

addButton.onclick = add();
subtractButton.onclick = subtract();
multiplyButton.onclick = multiply();
divideButton.onclick = divide();
moduloButton.onclick = modulo();

function add(num1, num2) {
 let sum = num1 + num2;
 return sum
}

function subtract(num1, num2) {
  let difference = num1 - num2;
  return difference
 }

 function multiply(num1, num2) {
  let product = num1 * num2;
  return product
 }

 function divide(num1, num2) {
  let division = num1 / num2;
  return division
 }

 function modulo(num1, num2) {
  let modulus = num1 / num2;
  return modulus
 }




// calc.addEventListener("click", function(){
//  document.getElementsByClassName('display')[0].innerHTML = "123"
// });

