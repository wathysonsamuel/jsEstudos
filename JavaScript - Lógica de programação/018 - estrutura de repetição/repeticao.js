// estruturas de repetição

for ( let i = 0; i <= 5; i++ ) { // acrescentando 
  console.log(`Linha ${i}`)
}

for ( let it = 30; it >= 0; it -= 2) { // reduzindo de 2 em 2
  console.log(`reduzindo ${it}`)
}

for ( let t = 100; t >= 0; t -= 1) {
  const par = t % 2 === 0 ? 'Par' : 'Impar';
  console.log(t, par) // verificando se é par ou impar
}
