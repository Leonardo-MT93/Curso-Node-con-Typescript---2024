//Funcion que crea una funcion
// const { getAge, getUUID} = require('../plugins')

const buildMakePerson = ({ getUUID, getAge}) => {	

    return ( {name, birthday} ) => {

        return {
            id: getUUID(),
            name,
            birthday,
            age: getAge(birthday)
        }
    }
}





// const john = buildPerson(obj);

// console.log(john)


module.exports = {
    buildMakePerson,
}