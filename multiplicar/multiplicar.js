// requires
const fs = require('fs');
const colors = require('colors')

let listarTabla = (base, limite) => {

    console.log('===============')
    console.log(` tabla de ${base} `.red)
    console.log('===============')

    for (let i = 1; i <= limite; i++) {
       console.log(`${base} * ${i} = ${base * i}`)
    }

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if ( !Number(base) ) {
            reject('No es un número')

            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n` // \n nueva linea de JS
        }

        // 
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

            if (err) reject(err);
            else 
                resolve(` tabla-${base}-al-${limite}.txt `.bgBlack.yellow.bold)
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}


