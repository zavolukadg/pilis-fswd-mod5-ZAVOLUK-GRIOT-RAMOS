import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, FlatList, Pressable, Image } from 'react-native'
import { styles } from './EventsListScreen.styles'
import { SearchBar } from '../../components/search-bar/SearchBar'
import { getEventsList } from '../../api/events.service'

export const EventsListScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [eventsList, setEventsList] = useState([])

  const url = [
    require('../../../assets/images/Flores/portada.jpg'),
    require('../../../assets/images/Viacrucis/portada.jpg'),
    require('../../../assets/images/Maraton/portada.jpg'),
    require('../../../assets/images/Peña/portada.jpg'),
    require('../../../assets/images/Festival/portada.jpg'),
    require('../../../assets/images/Fecha/portada.jpg'),
]

  const imagenPruebaSrc = "../../../assets/images/feriapancasero.jpg";
  const handleSearch = (query) => {
    setSearchQuery(query)
  }
  const filteredEvents = eventsList.filter(evento => (
    evento.title.toLowerCase().includes(searchQuery.toLowerCase())
  ))

  useEffect(() => {
    getEventsList()
      .then(data => {
        setEventsList(data)
      })
      .catch(err => console.log(err))
  }, [])

  const evento = ({ item }) => (
    <Pressable onPress={() => navigation.navigate('Detalle', { item })}>
      <View style={styles.itemContainer}>
        <Image source={url[item.id - 1]} style={styles.itemImage} />
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemPrice}>Precio: ${item.precio}</Text>
      </View>
    </Pressable>
  )

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
      <FlatList
        data={filteredEvents}
        renderItem={evento}
        keyExtractor={item => item.id}
        style={styles.itemList}
      />
    </SafeAreaView>
  )
}
