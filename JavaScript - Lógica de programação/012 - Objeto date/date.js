// os meses começam de 0 à 11 
// a ordem é -> Ano, Mês, Dia, Hora, minuto, Segundo, Milésimo de segundo
// Um dia -> 60 * 60 * 24 * 1000

const data = new Date()
console.log(data.toString())

// outra forma de pegar a data com formato string
const date = new Date('2024-10-12 14:19:30')
// agora como pegar essa data?

console.log('Dia', date.getDate());
console.log('Mês', date.getMonth());
console.log('Ano', date.getFullYear());
console.log('Hora', date.getHours());
console.log('Min', date.getMinutes());
console.log('Seg', date.getSeconds());
console.log('Ms', date.getMilliseconds());
console.log('Dia semana', date.getDay()); // 0 é domingo, e 6 é sábado

console.log(Date.now()) //milésimo de segundos contabilizados desde o marco zero até a data atual
