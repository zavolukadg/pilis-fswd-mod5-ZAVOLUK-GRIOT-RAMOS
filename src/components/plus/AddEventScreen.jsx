import React, {useContext, useState } from 'react'
import { styles } from '../plus/AddEventScreen.styles'
import {Text, View, TextInput,ScrollView,Button} from 'react-native';

export const AddEventScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}> Crear Nuevo Evento </Text>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Titulo" style={styles.inputField}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Precio" style={styles.inputField}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Descripcion" style={styles.inputField}/>
        </View>
        <Button onPress={() => navigation.goBack(null)} title='Aceptar'></Button>
      </View>
    </ScrollView>
  )
}