import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  btnContainer: {
    position:'absolute',
    bottom:10,
    right:10,
    shadowColor:'black',
    shadowOffset:{width:2,height:2},
    shadowOpacity:0.5,
    borderTopLeftRadius: 30
  },
  button:{
    borderTopLeftRadius:40,
    textAlign:'center'
  }
})