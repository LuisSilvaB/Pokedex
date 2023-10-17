import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import { capitalize } from 'lodash';
import getColorByPokemonType from '../../utils/getColorByPokemonType';

export default function Header(props) {
    const { name, id, type, image } = props; 
    const color = getColorByPokemonType(type);     
    const bgStyle = [{
        backgroundColor: color, 
        ...styles.bg
    }]
    return (
        <>
            <View style={bgStyle}/>
            <SafeAreaView style = {styles.content}>
                <View style = {styles.header}>
                    <Text style = {styles.Name}>{capitalize(name)}</Text>
                    <Text style = {styles.Id}>#{`${id}`.padStart(3,0)}</Text>
                </View>
                <View style = {styles.contentImg}>
                    <Image source={{uri: image}} style = {styles.image}/>
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    bg:{
        position: 'absolute', 
        width:'100%',
        height:350, 
        borderBottomLeftRadius: 300, 
        borderBottomRightRadius: 300,
        transform: [{scaleX:1.5}] 
    },
    content:{
        marginHorizontal: 20, 
        marginTop: 40, 
        marginBottom: 20, 
    }, 
    header:{
        width:'100%', 
        height:100,  
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems:'center', 
    }, 
    Name:{
        color: 'white', 
        fontWeight: 'bold', 
        fontSize: 27, 
    },
    Id:{
        color:'white', 
        fontWeight:'bold', 
        fontSize: 23, 
    },
    contentImg: {
        flex:1,
        justifyContent: 'center', 
        alignItems: 'center', 
        top: 30,
    },
    image: {
        marginTop:0,
        width: 250, 
        height: 250, 
        resizeMode:'center',
    }, 
})