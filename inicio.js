import React from "react";
import {View, Text, Button} from 'react-native'


export default function Inicio({navigation}){
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text style={{marginBottom:50}}>Bem vindo ao meu app</Text>
            <Button title='Configurações' onPress={() =>navigation.navigate('Config')}></Button>
        </View>
    )
}