//Node importame el modulo fs (Fyle System)
const fs = require('fs');

// importar colors => color de la terminal

const colors = require('colors/safe');

/* SOLUCION PROPUESTA , Y funcionando
const crearTabla = (base = 5) => {

    let tabla = '';

    //Ejemplo del "Template string"
    for (let i = 1; i <= 10; i++) {
        tabla += `${base} x ${i} = ${base * i} \n`;
    }
    // Escribir un archivo 
    return new Promise((resolve, reject) => {


        fs.writeFile(`tabla-${base}.txt`, //ruta y nombre del archivo
            tabla,         //lo que quiero que se escriba
            (err) => {
                if (err) throw err; //enviar el error en caso de que ocurra
                resolve(`tabla-${base}.txt`); // si no hay error se ejecuta esta linea
            })

        // otra funcion que hace lo mismo , pero mas entendible, si hubiese un error hay que usar
        // try y catch

        //fs.writeFileSync( `tabla-${base}.text`,salida); 
    });
}
*/

//Otra forma
const crearTabla = async (base = 5, listar=false,h) => { //async sirver para devolver una promesa por default, envez de hacer resolve y reject


    try {
        let tabla = '';
        for (let i = 1; i <= h; i++) {
            tabla += `- ${colors.cyan(base)} x ${colors.cyan(i)} = ${colors.red(base * i)}   \n`;
        }
        fs.writeFileSync(`./salida/tabla-${base}x${h}.txt`, tabla);

        if (listar){
            console.log(colors.red("------------------------"))
            console.log(colors.red("+ Tabla de multiplicar +"))
            console.log(colors.red("------------------------"))
            console.log(colors.green(tabla))}
        return `tabla-${base}x${h}.txt`
    } catch (e) {
        throw e;  //esto es como retornar que hay un error
    }
}



module.exports = {
    crearTabla: crearTabla
}