const form = document.querySelector('#form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Evento prevenido')
    setResultado('Olá mundo')
})

function setResultado(msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHtml = `<p>${msg}</p>`;
}