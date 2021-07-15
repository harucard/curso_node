console.log("n-fatorial");
/* console.log(`Executando o script a partir do diretório ${process.cwd()}`)

process.on('exit',()=>{
  console.log('script está prestes a terminar')
}) */
var fatorial = function (num) {
    if (num === 0)
        return 1;
    return num * fatorial(num - 1);
};
var num = parseInt(process.argv[2]);
console.log("O fatorial de " + num + " \u00E9 igual a " + fatorial(num));
