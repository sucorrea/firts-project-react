export type PokemonResult = { id: string; name: string; url: string }

export const getPokemonData = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon')
  const data = await res.json()
  console.log('dadospokemon', data)

  return data.results.map((pokemon: PokemonResult) => {
    const id = pokemon.url.split('/')[6]
    return {
      id,
      name: pokemon.name,
      url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    }
  })
}
