const { argv } = require('./config/yargs')
const colors = require('colors')
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')
const { crearSuma } = require('./suma/suma')

let comando = argv._[0]
console.log('Comando: ', comando)

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crearTabla':
        crearArchivo(argv.base, argv.limite)
            .then( archivo => console.log(`Archivo ${archivo} creado`))
            .catch(e => console.log(e));
        break;
    case 'crearSuma':
        crearSuma(argv.numero1, argv.numero2)
            .then( archivo => console.log(`Archivo ${archivo} creado`))
            .catch(e => console.log(e));
        break;   
    default:
        console.log("comando no reconocido")
        break;
}

console.log("ARGV --> ", argv)
/* let parametro = argv[2]
let base = parametro.split('=')[1]; */




/* console.log(module)
console.log(process) */