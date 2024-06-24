const users = [
    {
        id: 1,
        name: 'John',
    },
    {
        id: 2,
        name: 'Jane',
    },
    {
        id: 3,
        name: 'Joe',
    }
];


    const getUserById = ( id, callback ) => {
    const user  = users.find( ( user ) =>   user.id === id);;

    user ? callback(null, user)
    : callback('User not found', null)
    }

// function getUserById ( id, callback ) {

//     const user  = users.find( function ( user ) {
//         return user.id === id;
//     } );


//     if (!user) {
//         return callback('User not found', null);
//     }


//     return callback(null, user);
// }




module.exports = {
    getUserById
}