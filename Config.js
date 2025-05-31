import React from "react";
import {View, Text, Button} from 'react-native'

export default function Config({navigation}){
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text style={{marginBottom:50}}>Bem vindo ao meu app</Text>
            <Button title='Perfil' onPress={() =>navigation.navigate('Perfil')}></Button>
        </View>
    )
}