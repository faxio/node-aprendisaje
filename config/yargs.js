

const argv = require('yargs')
    .option('b',{ //ahora se puede colocar --b=6
        alias: 'base',              //la palabra que tengo que escrbirir   --base=6
        type: 'number',             //el tipo en este caso como es numero, se usa number
        demandOption: true  })      //El uso es obligatorio
    .check( (argv, options) => {
    if (isNaN(argv.b)){
        throw 'La base tiene que se un número'
    }
    return true;})
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default:false
        })  
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
    })
    .argv;

//const base = 2;

console.clear();

if (argv.l == true || argv.l=='t' || argv.l==undefined){
    argv.l = true;
}


module.exports = argv;