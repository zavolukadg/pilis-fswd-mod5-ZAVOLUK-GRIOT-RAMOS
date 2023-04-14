import React from 'react'
import { Text,StyleSheet,SafeAreaView,StatusBar} from 'react-native'
import { COLORS } from '../../utils/theme'

export const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile Screen</Text>
    </SafeAreaView>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: COLORS.grey
  }
})
