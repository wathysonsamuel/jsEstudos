// cria um valor aleatório, arredonda ele pro menor com o floor
function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
} 

// definindo variáveis fixas de min e max
let min = 1;
let max = 50;

// mostra o número aleatório gerado pela função
let rand = random(min, max);
console.log(rand);


// enquanto rand não for igual a dez, a função é executada novamente
while (rand !== 10) {
  rand = random(min, max)
  console.log(rand)
}