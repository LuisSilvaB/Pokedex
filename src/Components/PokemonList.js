import { View, Text, FlatList, StyleSheet, ActivityIndicator, Platform } from 'react-native'
import React from 'react'

//component 
import PokemonCard from './PokemonCard';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PokemonList(props) {
    const { pokemons, loadPokemons, nextUrl } = props; 
    console.log(Platform.OS)
    const loadMore = () => {
        loadPokemons(); 
        // console.log('Cargando mas pokemons');
    } 
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
            onEndReached={ nextUrl && loadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={
                    <ActivityIndicator 
                        size='large'
                        style = {styles.spiner}
                        color={'#AEAE'}
                    />
            }
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    flatListContentContainer:{
        paddingHorizontal:5,
        paddingTop: Platform.OS === 'android' ? 30 : 0, 
    }, 
    spiner:{
        marginTop:20, 
        marginBottom:60, 
    }
})