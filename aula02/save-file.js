var fs = require('fs');
fs.writeFile(process.argv[2], process.argv[3], function (error) {
    if (error)
        throw error;
    console.log("Arquivo " + process.argv[2] + " foi salvo com sucesso");
});
