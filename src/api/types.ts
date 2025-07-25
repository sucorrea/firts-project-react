/**
 * Interface genérica para recursos comuns da API que possuem nome e URL.
 */
interface NamedAPIResource {
  name: string
  url: string
}

// --- Interfaces Detalhadas ---

interface PokemonAbility {
  ability: NamedAPIResource
  is_hidden: boolean
  slot: number
}

interface PokemonCries {
  latest: string
  legacy: string
}

interface VersionGameIndex {
  game_index: number
  version: NamedAPIResource
}

interface VersionGroupDetail {
  level_learned_at: number
  move_learn_method: NamedAPIResource
  order: number | null
  version_group: NamedAPIResource
}

interface PokemonMove {
  move: NamedAPIResource
  version_group_details: VersionGroupDetail[]
}

interface PastAbilityDetail {
  ability: NamedAPIResource | null
  is_hidden: boolean
  slot: number
}

interface PokemonPastAbility {
  abilities: PastAbilityDetail[]
  generation: NamedAPIResource
}

interface PokemonStat {
  base_stat: number
  effort: number
  stat: NamedAPIResource
}

interface PokemonType {
  slot: number
  type: NamedAPIResource
}

// --- Interfaces de Sprites ---

interface OtherSprites {
  dream_world: {
    front_default: string | null
    front_female: string | null
  }
  home: {
    front_default: string | null
    front_female: string | null
    front_shiny: string | null
    front_shiny_female: string | null
  }
  'official-artwork': {
    front_default: string | null
    front_shiny: string | null
  }
  showdown: {
    back_default: string | null
    back_female: string | null
    back_shiny: string | null
    back_shiny_female: string | null
    front_default: string | null
    front_female: string | null
    front_shiny: string | null
    front_shiny_female: string | null
  }
}

interface VersionSprites {
  'generation-i': {
    'red-blue': string // Adicione tipos mais específicos se necessário
    yellow: string
  }
  'generation-ii': {
    crystal: string
    gold: string
    silver: string
  }
  'generation-iii': {
    emerald: string
    'firered-leafgreen': string
    'ruby-sapphire': string
  }
  'generation-iv': {
    'diamond-pearl': string
    'heartgold-soulsilver': string
    platinum: string
  }
  'generation-v': {
    'black-white': string
  }
  'generation-vi': {
    'omegaruby-alphasapphire': string
    'x-y': string
  }
  'generation-vii': {
    icons: string
    'ultra-sun-ultra-moon': string
  }
  'generation-viii': {
    icons: string
  }
}

interface PokemonSprites {
  back_default: string | null
  back_female: string | null
  back_shiny: string | null
  back_shiny_female: string | null
  front_default: string | null
  front_female: string | null
  front_shiny: string | null
  front_shiny_female: string | null
  other: OtherSprites
  versions: VersionSprites
}

// --- Interface Principal ---

export interface PokemonData {
  abilities: PokemonAbility[]
  base_experience: number
  cries: PokemonCries
  forms: NamedAPIResource[]
  game_indices: VersionGameIndex[]
  height: number
  held_items: string[] // A amostra está vazia, 'string[]' é uma opção segura
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: PokemonMove[]
  name: string
  order: number
  past_abilities: PokemonPastAbility[]
  past_types: string[] // A amostra está vazia
  species: NamedAPIResource
  sprites: PokemonSprites
  stats: PokemonStat[]
  types: PokemonType[]
  weight: number
}
