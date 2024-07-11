
// const getAgePlugin = require('get-age');

export const getAge = (birthday: string) => {
    // if(!birthday) throw new Error('Birthday is required');
    // return getAgePlugin(birthday)

    return new Date().getFullYear() - new Date(birthday).getFullYear();
}
