export type PokemonResult = {
  id: string
  name: string
  url: string
  sprites?: {
    other: {
      dream_world: {
        front_default: string
      }
    }
  }
}

export type Pokemon = {
  id: string
  name: string
  url: string
  sprites: {
    other: {
      dream_world: {
        front_default: string
      }
    }
  }
}

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

export const getPokemonDataById = async (id: string) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const data = await res.json()
  console.log('dadospokemonbyid', data)

  return {
    id: data.id.toString(),
    name: data.name,
    url: data.sprites.other.dream_world.front_default,
    sprites: {
      other: {
        dream_world: {
          front_default: data.sprites.other.dream_world.front_default,
        },
      },
    },
  }
}
