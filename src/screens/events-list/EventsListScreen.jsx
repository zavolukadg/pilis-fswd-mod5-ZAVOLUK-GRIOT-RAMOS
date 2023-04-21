import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, FlatList, Pressable, Image } from 'react-native'
import { styles } from './EventsListScreen.styles'
import { SearchBar } from '../../components/search-bar/SearchBar'
import { getEventsList } from '../../api/events.service'

export const EventsListScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [eventsList, setEventsList] = useState([])

  
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
        <Image source={{ uri: `https://drive.google.com/uc?id=${item.images[0]}` }} style={styles.itemImage} />
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
