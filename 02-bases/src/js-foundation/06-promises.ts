import { httpClient } from "../plugins";

export const getPokemonNameById = async (id: number|string): Promise<string> => {
  
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const pokemon = await httpClient.get(url);
  return pokemon.name;
  } catch (error) {
    throw `Pokemon not found with id ${id}`
  }
  
  
  // return fetch(url)
  // .then((response) => response.json())

  // .then((pokemon) => pokemon.name)
};
