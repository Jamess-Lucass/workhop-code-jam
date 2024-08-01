import { pokemonData } from "@/core/seeds/pokemonData";

const PokemonCards = () => {
  console.log({ YourData: pokemonData });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-4">
      {pokemonData.map((pokemon) => (
        <div className="bg-yellow-500 p-2 rounded-xl">
          <div className="bg-yellow-300 rounded-lg p-2 min-h-[30rem] flex flex-col gap-2">
            <div className="flex justify-between">
              <p className="font-bold">{pokemon.name}</p>
              <p>HP 000</p>
            </div>

            <div className="bg-white flex justify-center">
              <img
                src={pokemon.spriteUrl}
                alt={pokemon.name}
                className="object-cover h-32 w-32"
              />
            </div>

            <div className="flex-1">
              <p className="text-sm font-semibold">Description</p>
              <p className="text-xs">{pokemon.description}</p>
            </div>

            <ul className="flex flex-col gap-2 min-h-16">
              {pokemon.moves.map((move) => (
                <li className="bg-yellow-200 py-1 px-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">{move.name}</p>
                      <p className="text-xs">{move.description}</p>
                    </div>

                    <p>{move.power}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PokemonCards;
