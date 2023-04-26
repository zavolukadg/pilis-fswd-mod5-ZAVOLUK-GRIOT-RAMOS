import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor:'#FF6D60',
    position:'absolute',
    bottom:25,
    right:25,
    width:60,
    height:60,
    shadowColor:'black',
    shadowOffset:{width:2,height:2},
    shadowOpacity:0.5,
    borderRadius:100,
    justifyContent: 'center',
  },
  button:{
    color:'white',
    fontSize:50,
    fontStyle:'normal',
    alignSelf:'center',
    marginLeft:4,
  }
})