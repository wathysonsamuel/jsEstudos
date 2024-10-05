// criando apenas um objetos que tem métodos
const pessoal = {
    nome: 'Wathyson',
    sobrenome: 'Samuel',
    idade: 24,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    IncrementaIdade() {
        this.idade++;
    }
};
pessoal.fala();
pessoal.IncrementaIdade();
pessoal.fala();
pessoal.IncrementaIdade();
pessoal.fala();
pessoal.IncrementaIdade();




// criando função/fábrica que cria objetos
function CriaPessoa(nome, sobrenome, idade) { // parâmetro
    return { nome, sobrenome, idade };
}

const pessoa1 = CriaPessoa('Wathyson', 'Samuel', 24); // argumento
const pessoa2 = CriaPessoa('Julia', 'Costa', 25);

console.log(pessoa1.nome); // Chamando o nome dos objetos
console.log(pessoa2.nome);