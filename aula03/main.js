var fatorial = require('./fatorial');
console.log('n-fatorial');
var num = parseInt(process.argv[2]);
console.log("O fatorial de " + num + " \u00E9 igual a " + fatorial(num));
