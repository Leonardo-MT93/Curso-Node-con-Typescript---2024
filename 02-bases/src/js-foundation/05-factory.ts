//Funcion que crea una funcion
// const { getAge, getUUID} = require('../plugins')

interface BuildMakePersonOptions {
    getUUID: () => string;
    getAge: (birthday: string) => number;
}

interface PersonOptions {
    name: string;
    birthday: string;
}


export const buildMakePerson = ({ getUUID, getAge}: BuildMakePersonOptions) => {	

    return ( {name, birthday}: PersonOptions) => {

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
