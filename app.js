//Node importame la funcion crear tabla
const { crearTabla } = require('./helpers/multiplicar');

const argv = require('./config/yargs')
//importar un modulo de yargs 
//const argv = require('yargs').argv;

//.gitignore => es todo lo que quiero ignorar cuando subo el proyecto a git

let colors = require('colors');

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
})


//console.log(process.argv);
// para ejecutar el codigo tengo que especificar : node app "--base=6" => genera la tabla del 6 
/*
const [ , , arg3 = 'base=5'] = process.argv; 
const [ , base ] = arg3.split('=');
*/
//para usar "b" se escribe:
//console.log(argv.b)
//console.log(argv.l)



crearTabla(argv.b,argv.l,argv.h)
    .then(info => console.log(info.debug, " Creado Correactamente".verbose))
    .catch(err => console.log(err));



