import { AntDesign } from '@expo/vector-icons'; 
import React from 'react'
import {View } from 'react-native'
import { styles } from '../plus/PlusButton.styles'
import FontAwesome from '@expo/vector-icons/FontAwesome';

export const PlusButton = () => {
    return (
      <View style={styles.btnContainer}>
        <FontAwesome.Button style={styles.button} 
          name="whatsapp" 
          backgroundColor="#25d366" 
          size={32}
        />
      </View>
    )
  }