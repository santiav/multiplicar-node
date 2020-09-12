// requireds
const fs = require('fs');

let crearSuma = (numero1,numero2) => {

    console.log('===================')
    console.log(` Sumas de ${numero1} y ${numero2}`)
    console.log('===================')

    return new Promise((resolve,reject) => {

        // validación
        if ( !Number(numero1) || !Number(numero2)) {
            reject('Por favor usar números')
            return; // para evitar que se siga ejecutando el siguiente código
        }
        data = numero1 + numero2;
        fs.writeFile(`tablas/suma-de-${numero1}-y-${numero2}.txt`,data, (err) => {

            if (err) {
                reject(err)
            } else {
                resolve(`tablas/suma-de-${numero1}-y-${numero2}.txt`)
            }

        })


    });

}

module.exports = {
    crearSuma
}