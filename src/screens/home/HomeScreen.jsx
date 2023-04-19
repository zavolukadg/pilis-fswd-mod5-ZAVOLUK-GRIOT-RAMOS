import React from 'react'
import { Text, StyleSheet, View, StatusBar, ImageBackground} from 'react-native'
import { COLORS } from '../../utils/theme'

const urlImg = 
  [require('../../../assets/images/portada1.jpg'),
  require('../../../assets/images/portada2.jpg'),
  require('../../../assets/images/portada3.jpg'),
  require('../../../assets/images/portada4.jpg'),
  require('../../../assets/images/portada5.jpg'),
  require('../../../assets/images/portada6.jpg'),
  require('../../../assets/images/portada7.jpg')];

const aleatorio =  Math.floor(Math.random() * 7);

export const HomeScreen = () => {
  return (
    <>
      
      <View style={styles.container}>
        <ImageBackground source={urlImg[aleatorio]} style={styles.itemImage}>
          <Text style={styles.title}>Festivales de Jujuy</Text>
          <Text style={styles.subtitle}>Griot - Ramos - Zavoluk</Text>
        </ImageBackground>
      </View>
    </>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    color: 'white',
    fontSize: 37,
    lineHeight: 54,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#00000080',
    marginTop: '100%',
    width: '93%',
  },

  itemImage: {
    height: '100%',
    width: 450,
    resizeMode: 'cover'
  },

  subtitle: {
    width: '93%',
    color: 'white',
    fontSize: 30,
    lineHeight: 50,
    //fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#00000080',
    marginTop: 5,
    marginLeft: 0,
  },
})
