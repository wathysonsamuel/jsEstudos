// adiciona o zero a esquerda usando operador ternário
function zeroEsquerda(num) { 
  return num >= 10 ? num : `0${num}`
}

// pega a data da constate new date e coloca o zero
function formataData(da) {
  const dia = zeroEsquerda(data.getDate());
  const mes = zeroEsquerda(data.getMonth() + 1);
  const ano = zeroEsquerda(data.getFullYear());
  const hora = zeroEsquerda(data.getHours());
  const min = zeroEsquerda(data.getMinutes());
  const seg = zeroEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}


const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil)