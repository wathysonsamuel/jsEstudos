const num = Number(prompt("Qual seu número:"));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = num
texto.innerHTML = `Seu numero é: ${num}<br/>`;
texto.innerHTML += `A raiz quadrada é: ${num ** 0.5}<br/>`
texto.innerHTML += `${num} é inteiro:${num1 = Number.isInteger(Math.round(num))}`
