/*
 *  Valores primitivos (mutáveis) -> string, number, boolean, undefined, null, bigint, symbol, valor
 * 
 *  Valor de referência (Multáveis) -> array, object, function
 * 
 */

let nome = 'Luiz'
nome[0] = 'R' //  a string é imutável
console.log(nome)

let a = 'A';
let b = a;
console.log(a, b);

a = 'Outra coisa'; // tentando mudar as duas constantes, mas é imutável
console.log(a, b);


// array é mutável 
let c = [1, 2, 3];
let d = c;

c.push(4);
console.log(c, d)