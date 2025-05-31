import React, { useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import {Icon, TextInput} from 'react-native-paper';
import { ArrowBigRight, CircleX} from "lucide-react-native";
import Principal from "./Principal";
import Creditos from "./Creditos";
import  axios  from "axios";


export function App(){

  const[titulo, setTitulo] = useState ('')
  const[hora, setHora] = useState ('')

  console.log(hora);
  console.log(titulo);

  axios.get('https://fakestoreapi.com/products').then(resposta=>console.log(resposta.data[0]))
  


  return (
    <View style={css.tela}>
      <Image style={css.logo} source={require('./assets/logo.png')}></Image>
      <Text style={css.titulo}>Tarefinhas</Text>
      <ArrowBigRight style={css.seta} size={60}></ArrowBigRight>
      <Text style={css.subtitulo}>Adicionar Tarefa</Text>
      <Text style={css.legenda}>Escreva um títilo, defina o horário e clique no botão SALVAR</Text>
      <TextInput style={css.input} label='Texto' value={titulo} onChangeText={(titulo)=>setTitulo(titulo)} ></TextInput>
      <TextInput style={css.input} label='Hora' keyboardType='number-pad' value={hora} onChangeText={(hora)=>setHora(hora)}></TextInput>
      <TouchableOpacity style={css.botao}>
      <Text style={css.label}>SALVAR</Text>
      </TouchableOpacity>
      <Text style={css.subtitulo}>Lista de Tarefas</Text>
      <Text style={css.legenda}>Todas as suas tarefas salvas</Text>
      <ScrollView style={css.lista}>
      <Text style={css.item_lista}>• Lorem Ipsum</Text>
      <CircleX style={css.icone}/>
      <Text style={css.item_lista}>• Lorem Ipsum</Text>
      <CircleX style={css.icone}/>
      <Text style={css.item_lista}>• Lorem Ipsum</Text>
      <CircleX style={css.icone}/>
      <Text style={css.item_lista}>• Lorem Ipsum</Text>
      <CircleX style={css.icone}/>
      <Text style={css.item_lista}>• Lorem Ipsum</Text>
      <CircleX style={css.icone}/>
      <Text style={css.item_lista}>• Lorem Ipsum</Text>
      <CircleX style={css.icone}/>
      <Text style={css.item_lista}>• Lorem Ipsum</Text>
      <CircleX style={css.icone}/>
      <Text style={css.item_lista}>• Lorem Ipsum</Text>
      <CircleX style={css.icone}/>
      <Text style={css.item_lista}>• Lorem Ipsum</Text>
      <CircleX style={css.icone}/>
      <Text style={css.item_lista}>• Lorem Ipsum</Text>
      <CircleX style={css.icone}/>
      <Text style={css.item_lista}>• Lorem Ipsum</Text>
      <CircleX style={css.icone}/>
      <Text style={css.item_lista}>• Lorem Ipsum</Text>
      <CircleX style={css.icone}/>
      <Text style={css.item_lista}>• Lorem Ipsum</Text>
      <CircleX style={css.icone}/>
      <Text style={css.item_lista}>• Lorem Ipsum</Text>
      <CircleX style={css.icone}/>
      <Text style={css.item_lista}>• Lorem Ipsum</Text>
      <CircleX style={css.icone}/>
      </ScrollView>
    </View>
  );
}


const css = StyleSheet.create({
  tela:{
    flex:1,
    padding:20,
  },

  titulo:{
    fontSize:40,
    color:'#333',
    fontWeight:'bold',
    marginLeft:110,
    marginTop:-70,
  },

  subtitulo:{
    fontSize:23,
    marginTop:40,
    fontWeight:310,
  },

  legenda:{
    color:'#777',
    fontSize:13,
    marginTop:-5
  },

  input:{
    backgroundColor:'#fff',
    marginTop:25,
  },

  botao:{
    backgroundColor:'#444',
    padding:15,
    width:300,
    marginTop:40,
    marginLeft:40,
    borderRadius:15,
  },

  label:{
    color:'#fff',
    fontWeight:'bold',
    textAlign:'center',
    fontSize:16,
  },

  logo:{
    width:80,
    height:80,
    marginTop:20,
  },

  lista:{
    padding:10,
    borderStyle:'dashed',
    borderLeftWidth:5,
    borderColor:'#ccc',
    borderRadius:10,
    marginTop:15,
  },

  item_lista:{
    fontSize:16,
    lineHeight:30,
  },

  icone:{
    width:200,
    color:'#f00',
    marginLeft:330,
    marginTop:-22
  },

  seta:{
    color:'black',
    marginLeft:325,
    marginTop:-55
  }
});

export default App;