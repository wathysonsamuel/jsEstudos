
const nome = ['Samuel', 'Julia'];

for (let i2 = 0; i2 < nome.length; i2++) {
  console.log(nome[i2])
}

for (let i3 in nome) {
  console.log(nome[i3])
}

for (let i of nome) { // iterando sobre objeto usando for of
  console.log(i)
}

nome.forEach(function(valor, indice, array) {
  console.log(valor, indice, array)  
}); 