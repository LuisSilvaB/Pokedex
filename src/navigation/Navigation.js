import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Icon from 'react-native-vector-icons/FontAwesome5';
import { Image } from 'react-native'
// * Reemplazamos el Screen por el stack
// import FavoritesScreen from '../screens/Favorites';""
import FavoriteNavigation from './FavoriteNavigation';
import PokedexScreen from '../screens/Pokedex';
import Account from '../screens/Account';

const Tab = createBottomTabNavigator();  
export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Favorite' component={FavoriteNavigation} options={{
          tabBarLabel:"Favoritos", 
          //Usando destructuración hacemos que el navigation controle color y size 
          tabBarIcon: ({color,size}) => { 
            return(
              <Icon name='heart' size={size} color={color}/>
            )
          }
        }}/>
      <Tab.Screen name='Pokedex' component={PokedexScreen} options={{
          tabBarLabel:"",
          tabBarIcon: () => RenderPokeball(), 
      }}/>
      <Tab.Screen name='Account' component={Account} options={{
          tabBarLabel:"Account",
          //Usando destructuración hacemos que el navigation controle color y size 
          tabBarIcon:({color,size})=>{
            return(
              <Icon name='user' color={color} size={size}/>
            )
          }
      }}/>
    </Tab.Navigator>
  )
}

// Creación de función para que me devuelva una imagen 
function RenderPokeball(){
  return(
    <Image source={require('../assets/Pokeball.png')} style={{
      width:70,
      height:70,
      top:-15,
    }}/>
  )
}