// função que retorna uma saudação dentro do return
function saudacao (nome) {
    return `Bom dia! ${nome}`;
}
console.log(saudacao('Samuel'));



// função de soma que retorna a soma de X e Y
function soma (x, y) {
    const resultado = x + y;
    return resultado
}

console.log(soma(48, 584));



// uma função anônima criada a partir de uma constante
const raiz = function (x) { 
    return x ** 0.5;
}
console.log(raiz(9))


// Criando uma arrow function, tira a palavra function, return, chaves e parenteses 
const raiz = x => x ** 0.5;

console.log(raiz(9))