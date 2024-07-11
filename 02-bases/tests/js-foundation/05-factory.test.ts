import { buildMakePerson } from '../../src/js-foundation/05-factory';


describe('05-Factory', () => {


    const getUUID = () => '1234';

    const getAge = () => 30;

    test('buildMakePerson should return a function', () => {
    
    const makePerson = buildMakePerson({getUUID, getAge});

    expect(typeof makePerson).toBe('function');
    })


    test('makePerson should return an object with id, name, birthday and age', () => {
        const makePerson = buildMakePerson({getUUID, getAge});

        const johnDoe = makePerson({name: 'John Doe', birthday: '1990-01-01'});


        expect(johnDoe).toEqual({id: '1234', name: 'John Doe', birthday: '1990-01-01', age: 30});
    })

});