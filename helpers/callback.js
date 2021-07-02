/*
//¿ Que hace esta funcion?

// Recibo dos datos, dato1 es un string,
// callback es una funcion
const nombre = (dato1, callback) => {

    //defino un par de datos para probar
    const user = {
        dato1: dato1;
        nombre: 'fabio'
    }

    // funcion para probar el callback
    setTimeout(() => {
        callback(user) // tomo la funcion callback que me llego como parametro,
                       // y le mando la informacion user
    }, 1500)
}

nombre("saez" , (usuario) => {                //recibi la informacion user desde nombre
    console.log(usuario.dato1);               // y con los console log las utilizo
    console.log(usuario.nombre);
})

*/