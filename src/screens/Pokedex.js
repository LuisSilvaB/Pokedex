import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState, useEffect } from 'react'
import React from 'react'

import { getPokemonsApi, getPokemonDetailsByUrlApi } from '../api/pokemon'

//Components 
import PokemonList from '../Components/PokemonList'

export default function PokedexScreen() {
  const [pokemons, setPokemons] = useState([]); 
  console.log(pokemons);
  useEffect(()=>{
    // Funcion anonima autoejecutable
    (async () =>{
      await loadPokemons(); 
    })()
  },[])

  const loadPokemons = async() => {
    try {
      const response = await getPokemonsApi();
      // console.log(response); 
      const pokemonArray = []
      // Repasamos cada uno de los pokemons e obtenemos su url para con ella obtener toda su informacion 
      for await (const pokemon of response.results){
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
        pokemonArray.push({
          id: pokemonDetails.id, 
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other['official-artwork'].front_default, 
        })
      }
      setPokemons(pokemonArray); 
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <SafeAreaView>
      <Text>Pokedex</Text> 
      <PokemonList pokemons={pokemons} ></PokemonList>
    </SafeAreaView>
  )
}