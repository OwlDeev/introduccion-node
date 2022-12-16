const {registrar, leer} = require('./operaciones.js')

const argumentos = process.argv.slice(2)
const operacion = argumentos[0]

if(operacion === 'registrar'){
    const nombre = argumentos[1]
    const edad = argumentos[2]
    const tipo = argumentos[3]
    const color = argumentos[4]
    const enfermedad = argumentos[5]
    registrar(nombre,edad,tipo,color,enfermedad)
}else if(operacion === 'leer'){
    leer()
}else{
    console.log('\n --> Operacion no valida, intente con "registrar" o "leer" <-- \n')
}