const dogs = ['Zeus', 'Otávio', 'Leão', 'Kika', 'Kiara']

for ( let i in dogs ) { // for in lê os indices 
  console.log(dogs[i]); // percorrendo o array sem ter que criar um incremento 
}

const pessoas = {
  nome: 'Samuel',
  idade: 24,
  altura: 176
};

for (let index in pessoas) {
  console.log(index, pessoas[index ]) // fazendo ele ler a chave e o valor
}