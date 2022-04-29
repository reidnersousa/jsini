//não funcionar
//var modulo = require ('./modules/modulos.js');


//modulo.modulo();

const Pessoa = require('./modules/objetos/Pessoa.js')

const joao = new Pessoa(80,1.75);

console.log(joao.imc());

// outro objeto

const pedro = new Pessoa();
pedro.peso =100;
pedro.altura = 1.6;

console.log(pedro.imc());


