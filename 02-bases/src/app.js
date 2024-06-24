// // const template = require('./js-foundation/01-template');
// ! Referencia a la funcion factory y uso
// const { getAge, getUUID} = require('./plugins')

// const { buildMakePerson } = require("./js-foundation/05-factory");

// const makePerson = buildMakePerson({ getUUID, getAge })

// const obj = { name: 'Pepito', birthday: '1993-08-13' }

// const johnDoe = makePerson (obj)
// console.log(johnDoe)

// const getPokemonById = require('./js-foundation/06-promises')
const {buildLogger} = require('./plugins/')

// getPokemonById(6)
//     .then((pokemon) => console.log(pokemon))
//     .catch((error) => console.error(error))
//     .finally(() => console.log('Pokemon fetched!'));

const logger = buildLogger('app.js'); //archivo que mando a llamar

logger.log('Hola mundo');
logger.error('Esto es un error')