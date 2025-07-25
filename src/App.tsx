import { useEffect, useState } from 'react'

import './App.css'
import { getPokemonData, type PokemonResult } from './api/api'

function App() {
  const [pokemon, setPokemon] = useState<PokemonResult[]>([])

  useEffect(() => {
    getPokemonData().then((data) => {
      setPokemon(data)
    })
  }, [])

  return (
    <div className="flex border-2 rounded-2xl flex-wrap justify-center items-center p-4  max-w-screen-xl mx-auto h-screen">
      <h1 className="w-full text-center text-2xl font-bold">Pokemons</h1>
      {pokemon.map((pokemon) => (
        <div
          key={pokemon.id}
          className="flex flex-col items-center border p-4 m-2 rounded-lg shadow-lg bg-white bg-gradient-to-bl from-blue-100 to-blue-400 hover:shadow-amber-200 transition-shadow duration-300 "
        >
          <h3 className="text-black font-bold">{`#000${pokemon.id}`}</h3>
          <img src={pokemon.url} alt={pokemon.name} />
          <p className="text-black font-bold text-lg capitalize">
            {pokemon.name}
          </p>
        </div>
      ))}
    </div>
  )
}

export default App
