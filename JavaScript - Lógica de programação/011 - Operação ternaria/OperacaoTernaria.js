// ? -> Valor verdadeiro | : -> Valor falso

const MembroPontuação = 999;

if (MembroPontuação >= 1000) {
  console.log('Membro Vip')
} else {
  console.log('Membro')
}

// Reduzir código usando ? : 

const NivelUsuario = MembroPontuação >= 1000 ? 'Membro Vip' : 'Membro';
console.log(NivelUsuario)