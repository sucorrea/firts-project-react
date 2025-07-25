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
    <div>
      {pokemon.map((pokemon) => (
        <div key={pokemon.id} className="card">
          <h3>{`#000${pokemon.id}`}</h3>
          <img src={pokemon.url} alt={pokemon.name} />
          <h2>{pokemon.name}</h2>
        </div>
      ))}
    </div>
  )
}

export default App
