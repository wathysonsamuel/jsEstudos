const pessoa = {
  nome: 'Julia',
  sobrenome: 'Costa',
  idade: 25,
  endereco: {
    rua: 'Luiz Gonzaga de Souza',
    numero: 32
  }
}
// Atribuição via desestruturação
//const { nome = 'não existe', sobrenome } = pessoa //mudando o nome
//console.log(nome)

const { nome: chave, sobrenome } = pessoa // mudando a chave
console.log(chave)

const { endereco:{rua, numero} } = pessoa // agora não existe mais "endereço", apenas rua e numero

const { nome, ...rest } = pessoa
console.log(rest) // pegando o resto com o ...rest