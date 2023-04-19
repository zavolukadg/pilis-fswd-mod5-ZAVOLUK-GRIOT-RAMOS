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

  
  const urlImg1 = [
    require('../../../assets/images/Flores/imagen1.jpg'),
    require('../../../assets/images/Viacrucis/imagen1.jpg'),
    require('../../../assets/images/Maraton/imagen1.jpg'),
    require('../../../assets/images/Peña/imagen1.jpg'),
    require('../../../assets/images/Festival/imagen1.jpg'),
    require('../../../assets/images/Fecha/imagen1.jpg'),
  ];

  const urlImg2 = [
    require('../../../assets/images/Flores/imagen2.jpg'),
    require('../../../assets/images/Viacrucis/imagen2.jpg'),
    require('../../../assets/images/Maraton/imagen2.jpg'),
    require('../../../assets/images/Peña/imagen2.jpg'),
    require('../../../assets/images/Festival/imagen2.jpg'),
    require('../../../assets/images/Fecha/imagen2.jpg'),
  ];

  const urlImg3 = [
    require('../../../assets/images/Flores/imagen3.jpg'),
    require('../../../assets/images/Viacrucis/imagen3.jpg'),
    require('../../../assets/images/Maraton/imagen3.jpg'),
    require('../../../assets/images/Peña/imagen3.jpg'),
    require('../../../assets/images/Festival/imagen3.jpg'),
    require('../../../assets/images/Fecha/imagen3.jpg'),
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <ScrollView horizontal pagingEnabled style={styles.imageContainer}>
          <Image source={urlImg1[item.id - 1]} style={styles.itemImage} resizeMode='cover' />
          <Image source={urlImg2[item.id - 1]} style={styles.itemImage} resizeMode='cover' />
          <Image source={urlImg3[item.id - 1]} style={styles.itemImage} resizeMode='cover' />
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
