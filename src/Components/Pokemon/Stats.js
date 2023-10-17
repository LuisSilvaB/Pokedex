import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {capitalize, map} from 'loadsh' 

export default function Stats(props) {
  const { stats } = props;  
  const bgStyles = (num) => {
    const color = num > 49 ? 'green' : 'red';
    return {
        backgroundColor: color, 
        width: `${num}%`
    }
  } 
  return (
    <View style = {styles.content}>
        <Text style = {styles.title}>Base stats</Text>
        {map(stats, (item, index) => (
            <View key={index} style = {styles.block}>
                <View style = {styles.blockTitle}>
                    <Text style = {styles.name}>
                        {capitalize(item.stat.name)}
                    </Text>
                </View>
                <View style = {styles.blockInfo}>
                    <Text style = {styles.number}>{item.base_stat}</Text>
                    <View style = {styles.bgbar} >
                        <View style = {[styles.bar, bgStyles(item.base_stat) ]}/>
                    </View>
                </View>
            </View>
        ))}
    </View>
  )
}
const styles = StyleSheet.create({
    content:{
        paddingHorizontal:20, 
        marginTop: 40, 
    },
    title:{
        fontWeight: 'bold', 
        fontSize:20,
        paddingBottom:5, 
    }, 
    block:{
        display:'flex', 
        flexDirection: 'row', 
        gap: 10, 
    },
    blockTitle:{
        width: '30%',
    }, 
    name:{
        fontWeight:'bold',
        fontSize:12,
        paddingBottom: 5, 
    },
    blockInfo:{
        width:'70%', 
        flexDirection: 'row',
        alignItems: 'center', 
    },
    number:{
        width:'12%',
        fontSize: 12, 
    }, 
    bgbar:{
        backgroundColor:'#bebebe',
        width:'88%', 
        height: 5, 
        borderRadius: 20, 
        overflow: 'hidden', 
    },
    bar:{
        height: 5, 
        borderRadius: 20, 
    }
})