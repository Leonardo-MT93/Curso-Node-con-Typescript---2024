interface User{
    id: number;
    name: string;
}

const users: User[] = [
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


     export const getUserById = ( id: number, callback: (err?: string, user?: User) => void ) => {
    const user  = users.find( ( user ) =>   user.id === id);;

    user ? callback(undefined, user)
    : callback('User not found', undefined)
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


