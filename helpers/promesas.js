/*
const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id:2
        nombre: 'Fabio'
    },
    {
        id:3
        nombre: 'Antonio'
    }
]

const tomarEmpleado = (id, callback) =>{      // mando una id y una funcion

    return new Promise((resolve,reject)) => {
        (empleado) ? resolve (empleado)                             //resolve => caso verdadero
                    : reject(`No existe empleado con id ${id}`);  // reject => caso falso
    }
}

const id = 1;
tomarEmpleado(id)
    .then( empleado => console.log( empleado) ) //le mando una funcion que imprima el resultado, este se ejecuta si es verdadero
    .catch(err => console.log( err));           //le mando una funcion que imprima el error, solo se ejecuta si hay error

*/