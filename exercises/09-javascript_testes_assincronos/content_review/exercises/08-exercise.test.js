// Verifique se a importação do arquivo correto está sendo feita.
const { expect } = require("@jest/globals");
const { getPokemonDetails } = require("./08-exercise");

describe("A função getPokemonDetails", () => {
  it('getPokemonDetails((pokemon) => pokemon.name === "pikachu", callback) should return an error message "Não temos esse pokémon para você :("', (done) => {
    getPokemonDetails((pokemon) => pokemon.name === 'pikachu', (error, message) => {
      expect(error).toEqual(new Error('Não temos esse pokémon para você :('));
      done();
    })
  });

  it("retorna um pokemon que existe no banco de dados", () => {
    getPokemonDetails((pokemon) => pokemon.name === 'Squirtle', (error, message) => {
      expect(message).toEqual(`Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun`);
      done();
    });
  });
});
