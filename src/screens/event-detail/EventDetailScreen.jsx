import React, { useContext } from 'react'
import { View, ScrollView, Image, Text } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { styles } from './EventDetailScreen.styles'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../utils/theme'
import { Link } from '@react-navigation/native'
import { UserContext } from '../../contexts/UserContext'

export const EventDetailScreen = ({ route }) => {
  const { item } = route.params
  const { currentUser } = useContext(UserContext)

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <ScrollView horizontal pagingEnabled style={styles.imageContainer}>
          {item.images.map((image, idx) => (
            <Image key={idx} source={image} style={styles.image} resizeMode='cover' />
          ))}
        </ScrollView>
        <Text style={styles.itemTitle}>Longitud: {item.locationCoordinates.longitud}</Text> 
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.location}>{item.location}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name='star' size={20} color={COLORS.primary} />
          <Text style={styles.rating}>{item.rating}</Text>
        </View>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.title}>{item.location}</Text>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: item.locationCoordinates.latitud,
            longitude: item.locationCoordinates.longitud,
            latitudeDelta: 0.002,
            longitudeDelta: 0.002
          }}
        >
          <Marker
            coordinate={{
              latitude: item.locationCoordinates.latitud,
              longitude: item.locationCoordinates.longitud
            }}
            title={item.title}
          />
        </MapView>
      </View>
    </ScrollView>
  )
}
