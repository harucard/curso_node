console.log("n-fatorial");
var fatorial = function (num) {
    if (num === 0)
        return 1;
    return num * fatorial(num - 1);
};
console.log("O fatorial de 5 \u00E9 igual a " + fatorial(5));
