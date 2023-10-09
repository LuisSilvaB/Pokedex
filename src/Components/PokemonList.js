import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

//component 
import PokemonCard from './PokemonCard';

export default function PokemonList(props) {
    const { pokemons } = props; 
    return (
        <>
            <Text>PokemonList</Text>
            <FlatList 
            data={pokemons}
            numColumns = {2}
            showsVerticalScrollIndicator = {false}
            keyExtractor={(pokemon) => String(pokemon.id)} 
            renderItem={({item}) => (<PokemonCard pokemon = {item} ></PokemonCard>)}
            contentContainerStyle = {styles.flatListContentContainer}
            />
        </>
    )
}

const styles = StyleSheet.create({
    flatListContentContainer:{
        paddingHorizontal:5
    }
})