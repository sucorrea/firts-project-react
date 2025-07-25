import { useEffect } from 'react'
import { type PokemonResult } from '../api/api'

interface PokemonModalProps {
  pokemon: PokemonResult
  onClose: () => void
}

export function PokemonModal({ pokemon, onClose }: PokemonModalProps) {
  // Effect to handle Escape key press for closing the modal
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', handleEsc)

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [onClose])

  return (
    // Modal backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
      onClick={onClose} // Close modal on backdrop click
    >
      {/* Modal content */}
      <div
        className="relative m-4 w-full max-w-sm rounded-lg bg-white p-6 text-center shadow-xl"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal content
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 rounded-full p-1 text-2xl leading-none text-gray-500 hover:text-gray-800"
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold capitalize text-black">
          {pokemon.name}
        </h2>
        <p className="text-md text-gray-500">{`#000${pokemon.id}`}</p>
        <img
          src={pokemon.sprites?.other.dream_world.front_default}
          alt={pokemon.name}
          className="mx-auto my-4 h-48 w-48"
        />
      </div>
    </div>
  )
}
