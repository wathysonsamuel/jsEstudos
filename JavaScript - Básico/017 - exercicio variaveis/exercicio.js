let varA = 'A'
let varB = 'B'
let varC = 'C'

const vara = varA
varA = varB
varB = varC
varC = vara

console.log(varA, varB, varC)


[varA, varB, varC] = [varB, varC, varA]