// diferenças entre Var e Let
// LET -> tem escopo de blocos, então se criar let dentro de chaves e querer usar fora, n vai funcionar
// VAR -> tem escopo em function, então não funciona tentar puxar var de dentro de function


const verdadeira = true
let nome = 'Samuel'

if (verdadeira) {
  let nome1 = 'Julia'
  console.log(nome, nome1)
}

// console.log(nome, nome1) let tem escopo de blocos, então se usar let dentro de chaves, não funcionará fora da chave

var nome2 = 'Julia'

function falaOi() {
  var nome3 = 'Julia'
  console,log(nome2, nome3)
}

// console.log(nome2, nome3) o Var nome3 está dentro do escopo da function então n funciona