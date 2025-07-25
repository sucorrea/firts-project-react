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
        <div key={pokemon.name} className="card">
          <h2>Nome: </h2>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.url} alt={pokemon.name} />
        </div>
      ))}
    </div>
  )
}

export default App
