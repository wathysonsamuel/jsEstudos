const date = new Date('1994-07-29 00:00:00');
const getDay = date.getDay();



function getDayText(getDay) {
  let diaSemanaTexto;

  switch (getDay) {
    case 0:
      diaSemanaTexto = 'Domingo';
      return diaSemanaTexto;
    case 1:
      diaSemanaTexto = 'Segunda'
      return diaSemanaTexto;;
    case 2:
      diaSemanaTexto = 'Terça'
      return diaSemanaTexto;;
    case 3:
      diaSemanaTexto = 'Quarta'
      return diaSemanaTexto;;
    case 4:
      diaSemanaTexto = 'Quinta'
      return diaSemanaTexto;;
    case 5:
      diaSemanaTexto = 'Sexta'
      return diaSemanaTexto;;
    case 6:
      diaSemanaTexto = 'Sábado'
      return diaSemanaTexto;;
    default:
      diaSemanaTexto = '';
  } 
}
const diaSemanaTexto = getDayText(getDay)
console.log(diaSemanaTexto, getDayText)