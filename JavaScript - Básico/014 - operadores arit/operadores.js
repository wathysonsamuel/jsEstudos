/*          OPERADORES ARITMÉTICOS
 *  + ADIÇÃO / CONCATENAÇÃO 
 *  - SUBTRAÇÃO
 *  * MULTIPLICAÇÃO
 *  / DIVISÃO
 *  ** POTENCIAÇÃO
 *  % RESTO DA DIVISÃO 
 * */

let contador = 1;
++contador // 2
++contador // 3
console.log(contador++) // o incremento dps da palavra não é mostrada
console.log(++contador) // diferente do incremento antes da palavra

let decremento = 10;
--decremento; // 9
--decremento; // 8
console.log(decremento--) // decremento dps da mesma forma do incremento
console.log(--decremento)

//  OPERADORES DE ATRIBUIÇÃO

const passo = 5
let contador1 = 0
contador1 += passo // isso é igual á contador1 = contador1 + passo
console.log(contador1)

let passos = 10
passos *= 2
console.log(passos)

// NaN not a number

// parseInt parseFloat mudar operador
let number = parseInt('5')
let number1 = parseFloat('5.5')
