import { StyleSheet, StatusBar, Dimensions } from 'react-native'
import { COLORS, FONT_SIZE } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginTop: StatusBar.currentHeight
  },
  itemContainer: {
    flex: 1,
    width: Dimensions.get('screen').width - 20,
    borderRadius: 20, // Fixed value --- magic number
    overflow: 'hidden',
    marginBottom: 10,
    backgroundColor: COLORS.white,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    padding:10,
    margin:10
  },
  imageContainer: {
    height: 300
  },
  image: {
    width: Dimensions.get('screen').width,
    height: 300
  },
  textContainer: {
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  location: {
    fontSize: 18,
    color: '#666',
    marginBottom: 5
  },
  price: {
    fontSize: 20,
    color: '#444',
    marginBottom: 5
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rating: {
    marginLeft: 8,
    color: COLORS.text,
    fontSize: FONT_SIZE.md
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
    marginTop: 10
  },
  map: {
    height: 250,
    marginVertical: 20,
    borderRadius: 10
  },
})
