const h1 = document.querySelector('.container h1');
const data = new Date();

// Formatação apenas da data
const dataFormatada = data.toLocaleDateString('pt-BR', { dateStyle: 'full' });

// Formatação da hora
const horaFormatada = data.toLocaleTimeString('pt-BR');

// Combina data e hora
h1.innerHTML = `${dataFormatada} ${horaFormatada}`;
