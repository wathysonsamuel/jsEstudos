var a = 'A';
var b = 'B';
var c = 'C';

const letras = [b, c, a]; // desestruturando 
[a, b , c] = letras; // estruturando novamente

console.log(a, b, c)

// ...rest, ...spread

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]
const [um, dois, tres, ...rest] = numeros; 
// usando o ... para pegar todos os valores que sobraram e inserindo em números novamente, atribuindo dps de desestruturar 
console.log(um, dois, tres)
console.log(rest)

// pegando array de arrays

//                  0        1        2 
//               0  1  3  0  1  2  0  1  2
const numero = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];

console.log(numero[1][2]);

const [,[,,seis]] = numero;
console.log(seis)

const [lista1, lista2, lista3] = numero;
console.log(lista3[2])
