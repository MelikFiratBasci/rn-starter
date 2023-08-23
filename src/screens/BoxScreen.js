import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen =()=>{
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.textOneSyle} >Child1</Text>
            <Text style={styles.textTwoSyle} >Child2</Text>
            <Text style={styles.textThreeSyle} >Child3</Text>
        </View>
    )
}
const styles = StyleSheet.create({
   
    viewStyle:{
        borderWidth :3, 
        borderColor : 'black',
        height :200
    }, 
    textOneSyle :{
        borderWidth :3 ,
        borderColor : 'red',
     
    },
    textTwoSyle :{
        borderWidth :3 ,
        borderColor : 'red',
        flex:1
     
    },
    textThreeSyle :{
        borderWidth :3 ,
        borderColor : 'red',
     
    },
})
export default BoxScreen