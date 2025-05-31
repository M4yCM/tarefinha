import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Config from './Config';
import Perfil from './Perfil';
import Inicio from './inicio';

const Stack = createStackNavigator();

export default function Creditos(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Inicio'>
                <Stack.Screen name="Inicio" component={Inicio} />
                <Stack.Screen name="Config" component={Config} />
                <Stack.Screen name="Perfil" component={Perfil} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}