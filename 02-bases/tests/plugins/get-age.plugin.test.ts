import { getAge } from '../../src/plugins/get-age.plugin';


describe('Get Age Plugin', () => {

test('Should return the age of a person', () => {

    const birthday = '1990-01-01';
    const age = getAge(birthday);

    expect(typeof age).toBe('number');

});

test('getAge shloud return current age', () => {

    const birthday = '1990-01-01';
    const age = getAge(birthday);

    const calculatedAge = new Date().getFullYear() - new Date(birthday).getFullYear();

    expect(age).toBe(calculatedAge)
})

test('getage shloud return 0 years', ()=> {

    const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1990);

    const birthdate = '1990-10-21'

})  


})