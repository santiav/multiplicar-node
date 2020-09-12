
const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
            .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
            .command('crearTabla', 'Genera un archivo con la tabla de multiplicar', opts)
            .command('crearSuma','Suma entre 2 numeros', {
                numero1: {
                    demand: true,
                    alias: 'nro1'
                },
                numero2: {
                    demand: true,
                    alias: 'nro2'
                }
            })
            .help()
            .argv;

module.exports = {
    argv
}