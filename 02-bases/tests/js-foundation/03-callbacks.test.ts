import { getUserById } from '../../src/js-foundation/03-callbacks';



describe('03-callbacks.ts', () => {

    test('getUserById should return an error if user does not exist', (done) => {

        const id = 10;
        getUserById(id, (err, user) => {
            expect(err).toBe(`User not found with id ${id}`);
            expect(user).toBeUndefined();


            done();
        })
    })


    test('getUserById should return an User1', () => {

        const id= 2
        getUserById(id, (err, user) => {

            expect(err).toBeUndefined();
            expect(user).toEqual({ id: 2, name: "Jane Doe" });

        });
    })




});