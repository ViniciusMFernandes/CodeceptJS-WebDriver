const { generate, validate } = require('gerador-validador-cpf')

var cpf = generate({format : true})
console.log(cpf)
console.log(validate(cpf))