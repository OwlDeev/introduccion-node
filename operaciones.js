const fs = require('fs')

const leer = () => {
  const leerAnimales = fs.readFileSync('citas.json', 'utf-8')
  JSON.parse(leerAnimales).forEach((animal) => {
    console.log(animal)
  })
}

const registrar = (nombre, edad,tipo,color,enfermedad) => {
  const leerAnimales = fs.readFileSync('citas.json', 'utf8')
  const animalesTotales = []
  JSON.parse(leerAnimales).forEach((animal) => {
    animalesTotales.push(animal)
  })
  const animalNuevo = { nombreAnimal: nombre, edad: edad ,tipoDeAnimal: tipo, colorDelAnimal: color, Enfermedad: enfermedad}
  animalesTotales.push(animalNuevo)
  fs.writeFileSync('citas.json', JSON.stringify(animalesTotales))
}

module.exports = { registrar, leer }