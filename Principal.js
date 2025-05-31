import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { HomeIcon } from "lucide-react-native";
import { Ionicons } from '@expo/vector-icons';
import Config from './Config';
import Perfil from './Perfil';
import Inicio from './inicio';


const Tab = createBottomTabNavigator()



function Principal(){
    return(
    <NavigationContainer >    
    <Tab.Navigator >
        <Tab.Screen name="Inicio" component={Inicio}  options={{
      headerShown: false,
      tabBarIcon: ({ color, size }) => ( 
        <Ionicons name="home-outline" color={color} size={size} />
      ), }}/>
        <Tab.Screen name="Config" component={Config}   options={{
      headerShown: false,
      tabBarIcon: ({ color, size }) => ( 
        <Ionicons name="cog-outline" color={color} size={size} />
      ), }} />
        <Tab.Screen name="Perfil" component={Perfil}  options={{
      headerShown: false,
      tabBarIcon: ({ color, size }) => ( 
        <Ionicons name="person-outline" color={color} size={size} />
      ), }} />
      </Tab.Navigator>
    </NavigationContainer>
    );


}

export default Principal;