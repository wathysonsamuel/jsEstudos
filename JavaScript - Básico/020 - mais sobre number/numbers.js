const num1 = 100
const num2 = 50

console.log(num1.toString) // transforma número em string

console.log(num1.toString(2)) // para ver o number em binario

console.log(num1.toFixed(2)) // definir o tamanho das casas decimais

console.log(Number.isInteger(num1)) // saber só o número é um inteiro 

// para resolver o problema de imprecisão dos números, faça isso
num1 = Number(num1.toFixed(2))