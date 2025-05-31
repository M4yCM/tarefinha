import React from "react";
import {View, Text, Button} from 'react-native'


export default function Perfil({navigation}){
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text style={{marginBottom:50}}>Bem vindo ao meu app</Text>
            <Button title='Inicio' onPress={() =>navigation.navigate('Inicio')}></Button>
        </View>
    )
}