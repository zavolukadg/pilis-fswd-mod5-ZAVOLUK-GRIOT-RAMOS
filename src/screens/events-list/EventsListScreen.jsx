import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, FlatList, Pressable, Image } from 'react-native'
import { styles } from './EventsListScreen.styles'
import { data } from '../../api/data'
import { SearchBar } from '../../components/search-bar/SearchBar'
import { getEventsList } from '../../api/events.service'

const evento = ({ item }) => (
  <Pressable onPress={() => console.warn(`Elemento: ${item.title}`)}>
    <View style={styles.itemContainer}>
      <Image source={item.images[0]} style={styles.itemImage} />
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
    </View>
  </Pressable>
)

export const EventsListScreen = () => {
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


  return (
    <SafeAreaView style={styles.container}>
      <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
      <FlatList
        data={data}
        renderItem={evento}
        keyExtractor={item => item.id}
        style={styles.itemList}
      />
    </SafeAreaView>
  )
}
