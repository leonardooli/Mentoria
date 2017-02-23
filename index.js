const caixaEletronico = require('./lib/caixa_eletronico');


const notes = caixaEletronico.getNotes(process.argv[2]);
const resultado = caixaEletronico.result(notes); 
console.log(resultado);
