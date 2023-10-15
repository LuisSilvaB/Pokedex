import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

//component 
import PokemonCard from './PokemonCard';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PokemonList(props) {
    const { pokemons } = props; 
    return (
        <SafeAreaView>
            <Text>PokemonList</Text>
            <FlatList 
            data={pokemons}
            numColumns = {2}
            showsVerticalScrollIndicator = {false}
            keyExtractor={(pokemon) => String(pokemon.id)} 
            renderItem={({item}) => (<PokemonCard pokemon = {item} ></PokemonCard>)}
            contentContainerStyle = {styles.flatListContentContainer}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    flatListContentContainer:{
        paddingHorizontal:5
    }
})