import React from 'react'
import pokemonsData from '@/data/pokemons.json';
import { Pokemon } from '@/pokemons';

interface Props {
    params: Promise<{id: string}>;
}

const getPokemon = async(id:string): Promise<Pokemon> => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`,{cache:'force-cache'})
  .then(res => res.json());
  return pokemon;
}



export default async function PokemonPage(props: Props) {

  const { id } = await props.params;
  const pokemon = await getPokemon(id);

  return(
    <div>
      <h1>Pokémon {id}</h1>
      <div>
        {pokemon.name}
      </div>
    </div>
  )
}
