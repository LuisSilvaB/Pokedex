import React from 'react'
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import getColorByPokemonType from '../utils/getColorByPokemonType';

//Navigation 
import { useNavigation } from '@react-navigation/native'

//lodash 
import { capitalize } from 'lodash'

export default function PokemonCard(props) {
    const { pokemon } = props; 
    const navigation = useNavigation(); 
    const pokemonColor = getColorByPokemonType(pokemon.type);
    const bgStyles = {backgroundColor: pokemonColor, ...styles.bgStyles}; 
    const goToPokemon = () => {
        // Navigarion solo puede mandar datos planos, nada de funciones. 
        navigation.navigate('Pokemon', {id: pokemon.id}); 
    }   
    return (
        <TouchableWithoutFeedback onPress={goToPokemon}>
            <View style={styles.Card}>
                <View style={styles.spacing}>
                    <View style={bgStyles}>
                        <Text style={styles.number}>#{`${pokemon.id}`.padStart(3,0)}</Text>
                        <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
                        <Image source={{uri:pokemon.image}} style={styles.image}/>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    Card:{
        flex: 1,
        height: 130, 
    }, 
    spacing:{
        flex: 1, 
        padding: 5,
    },
    bgStyles:{
        flex:1, 
        borderRadius: 15, 
        padding: 10, 
    }, 
    number:{
        position:'absolute',
        right:0, 
        top:10, 
        color:'#fff'  
    },
    name:{
        color:'#fff',
        fontWeight: 'bold', 
        fontSize:15, 
        paddingTop:10, 
    }, 
    image:{
        position: 'absolute', 
        bottom: 2, 
        right: 2, 
        width: 90, 
        height: 90, 
    }
})