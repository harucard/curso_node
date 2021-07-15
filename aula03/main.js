var fatorial = require('./fatorial');
console.log('n-fatorial');
var argv = require('yargs').demandOption('num').argv;
var num = argv.num;
console.log("O fatorial de " + num + " \u00E9 igual a " + fatorial(num));
