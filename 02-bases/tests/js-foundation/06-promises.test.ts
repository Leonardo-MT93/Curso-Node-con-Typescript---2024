import { getPokemonNameById } from '../../src/js-foundation/06-promises';


describe('06-promises', () => {
  
    test('getPokemonNameById should return a Pokemon', async () => {

        const pokemonId =1;

        const pokemonName = await getPokemonNameById(pokemonId);

        expect(pokemonName).toEqual('bulbasaur');

    });

    test('getPokemonNameById should return an error if pokemon does not exist', async () => {

       const pokemonId = 10000000;

       try {
        await getPokemonNameById(pokemonId);
        expect(true).toBe(false);
       } catch (error) {
        expect(error).toEqual(`Pokemon not found with id ${pokemonId}`);
       }
       



    })


});