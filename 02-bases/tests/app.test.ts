describe('App', () => {
    test('should be able to run tests', () => {

        //ARRANGE
        const num1 = 10;
        const num2 = 20;

        //ACT
        const sum = num1 + num2;
        //ASSERT

        expect(sum).toBe(30);
        expect(true).toBe(true);
    });
});