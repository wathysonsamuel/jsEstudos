const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');


// Obtém o estilo computado do body, incluindo a cor de fundo
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody)


// Aplica a cor de fundo do body a cada parágrafo
for (let p of ps) {
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = 'white'; //muda cor do texto para português para contraste

}