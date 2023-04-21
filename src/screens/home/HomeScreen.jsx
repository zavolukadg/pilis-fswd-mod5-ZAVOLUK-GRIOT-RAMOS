import React from 'react'
import { Text, StyleSheet, View, StatusBar, ImageBackground} from 'react-native'
import { COLORS } from '../../utils/theme'

const url = 
  [
    '1za0dNiyOELMLGQLzO8chY69rHO6ecYsm',
    '1C8mFNNkN8I9awsKENDTdTrhDhuKN-JnW',
    '145Gcyb9sYg05lZ0ZWeY0LkkKkiQp59Gi',
    '18nt5nZaAIg7hZfNe7b85gvxGI2WUqU_i',
    '1coB4-0muJbb3l5yGTr4KiBqv2fIxH1tw',
    '1OUnoGj2nOBrBpc0TcIACwMv9OzBBLtU3',
    '1nLLU6Kt-dEqrWr894DNDSgHh8ZKMtegu'
  ];

const aleatorio =  Math.floor(Math.random() * 7);

export const HomeScreen = () => {
  return (
    <>
      
      <View style={styles.container}>
        <ImageBackground source={{ uri: `https://drive.google.com/uc?id=${url[aleatorio]}` }} style={styles.itemImage}>
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
