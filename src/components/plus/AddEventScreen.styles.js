import { Dimensions, StyleSheet, StatusBar } from 'react-native'
import { COLORS,FONT_SIZE } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: COLORS.grey
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical:25,
    textAlign: 'center',
  },
  location: {
    fontSize: 18,
    color: '#666',
    lineHeight: 26,
    marginBottom: 5
  },
  inputContainer: {
    paddingHorizontal: 10,
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#d7d7d7',
  },
  inputField: {
    padding: 14,
    fontSize: 16,
    width: '90%'
  }
})
