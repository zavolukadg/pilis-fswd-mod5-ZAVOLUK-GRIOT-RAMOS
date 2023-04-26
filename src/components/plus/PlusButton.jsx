import React from 'react'
import {View, Text, TouchableOpacity } from 'react-native'
import { styles } from '../plus/PlusButton.styles'
import { Ionicons } from '@expo/vector-icons'

export const PlusButton = ({navigation}) => {
    return (
      <View  style={styles.btnContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('AddEvent',{navigation})}>
            <Ionicons name='add-outline' style={styles.button} />
        </TouchableOpacity>
      </View>
    )
  }