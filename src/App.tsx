import { useEffect, useState } from 'react'

import './App.css'
import {
  getPokemonData,
  getPokemonDataById,
  type PokemonResult,
} from './api/api'
import { PokemonModal } from './components/pokemon-modal'

function App() {
  const [pokemon, setPokemon] = useState<PokemonResult[]>([])
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonResult | null>(
    null
  )

  useEffect(() => {
    getPokemonData().then((data) => {
      setPokemon(data)
    })
  }, [])

  const handlePokemonClick = (id: string) => {
    getPokemonDataById(id).then((data) => {
      console.log('Pokemon clicked:', data)
      setSelectedPokemon(data)
    })
  }

  return (
    <div className="flex border-2 rounded-2xl flex-wrap justify-center items-center p-4  max-w-screen-xl mx-auto h-screen">
      <h1 className="w-full text-center text-2xl font-bold">Pokemons</h1>
      {pokemon.map((pokemon) => (
        <div
          key={pokemon.id}
          className="flex flex-col items-center border p-4 m-2 rounded-lg shadow-lg bg-white bg-gradient-to-bl from-blue-100 to-blue-400 hover:shadow-amber-200 transition-shadow duration-300 "
          onClick={() => {
            handlePokemonClick(pokemon.id)
          }}
        >
          <h3 className="text-black font-bold">{`#000${pokemon.id}`}</h3>
          <img src={pokemon.url} alt={pokemon.name} />
          <p className="text-black font-bold text-lg capitalize">
            {pokemon.name}
          </p>
        </div>
      ))}
      {selectedPokemon && (
        <PokemonModal
          pokemon={selectedPokemon}
          onClose={() => setSelectedPokemon(null)}
        />
      )}
      <p className="text-black text-sm mt-4">
        Click on a Pokémon to see more details.
      </p>
      <p className="text-black text-sm mt-2">Data fetched from the PokeAPI.</p>
    </div>
  )
}

export default App
