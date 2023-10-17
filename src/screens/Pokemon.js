import React, {useState, useEffect} from 'react' 
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text } from 'react-native'
import { ScrollView } from 'react-native'; 

//icons
import Icon from 'react-native-vector-icons/FontAwesome5'; 

//Pokemons
import Header from '../Components/Pokemon/Header';

// Fecth
import { getPokemonDetailsById } from '../api/pokemon';
import Type from '../Components/Pokemon/Type';
import Stats from '../Components/Pokemon/Stats';

export default function Pokemon(props) { 
  const { navigation, route:{params} } = props;
  const [pokemon, setPokemon] = useState(null)
  useEffect(()=>{
    navigation.setOptions({
      headerRight: () => null, 
      headerLeft: () => (
        <Icon 
        name = 'arrow-left'
        color = 'white'
        size = {20}
        style = {
          {marginLeft: 20} 
        }  
        onPress = {navigation.goBack}
        /> 
      )
    })
  },[navigation, params])
  useEffect(()=>{
    (async()=>{
      try {
        const response = await getPokemonDetailsById(params.id); 
        setPokemon(response); 
      } catch (error) {
        navigation.goBack();         
      }
    })()
  },[params])  

  if (!pokemon) return null; 

  return (
    <ScrollView>
      <Header name = {pokemon.name} id = {pokemon.id} type = {pokemon.types[0].type.name} image = {pokemon.sprites.other['official-artwork'].front_default} />
      <Type types = {pokemon.types} />
      <Stats stats = {pokemon.stats} />
    </ScrollView>
    )
}