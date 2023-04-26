import React, { useState, useEffect, useContext } from 'react'
import { View, Text, SafeAreaView, FlatList, Pressable, Image,TouchableOpacity } from 'react-native'
import { styles } from './EventsListScreen.styles'
import { SearchBar } from '../../components/search-bar/SearchBar'
import { getEventsList } from '../../api/events.service'
import BouncyCheckbox from "react-native-bouncy-checkbox"
import { PlusButton } from '../../components/plus/PlusButton'
import { AuthContext } from '../../contexts/AuthContext'

export const EventsListScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [eventsList, setEventsList] = useState([])
  const [checkboxState, setCheckboxState] = useState(false)
  const[categoryFilter, setCategoryFilter] = useState([])
  const[eventosFiltrados,setEventosFiltrados] = useState([])
  const[categories,setCategories] = useState([])
  const { user } = useContext(AuthContext)

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

   const filteredEvents = eventosFiltrados.filter(evento => (
     evento.title.toLowerCase().includes(searchQuery.toLowerCase())
   ))

  const setFilters = (events) => {
    let categoriesMap = events.map(evento=>{
      return [evento.category,evento]
    });
    var categoriesMapArr = new Map(categoriesMap); // Pares de clave y valor
    setCategories([...categoriesMapArr.values()])
  }
 
  const handleFilterChange = ({item}) => {
    
    let categoryCheck = item.category
    let filtersChecked
    if (!categoryFilter.includes(categoryCheck)){ //Si no incluye la categoria la agrega
      categoryFilter.push(categoryCheck);
      filtersChecked = categoryFilter
    }
    else{
      filtersChecked = categoryFilter.filter(category => category != categoryCheck)
    }
    setCategoryFilter(filtersChecked)
    filtersChecked.length != 0? setEventosFiltrados(eventsList.filter(evento => filtersChecked.includes(evento.category)))
    :
    setEventosFiltrados(eventsList) 
  }

  useEffect(() => {
    getEventsList()
      .then(data => {
        setEventsList(data)
        setFilters(data)
        setEventosFiltrados(data)
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
  const vacio = () => (
      <View>
        <Text style={styles.emptyMessage}>No existen eventos que cumplan con los criterios de busqueda.</Text>
      </View>
  )

  const checkBoxFilter = ({ item }) => (
    <BouncyCheckbox
      style={styles.checkbox}
      isChecked={checkboxState}
      text={item.category}
      fillColor="red"
      iconStyle={{ borderColor: "red" }}
      innerIconStyle={{ borderWidth: 2 }}
      unfillColor="#FFFFFF"
      onPress={() => handleFilterChange({item})}
      textStyle={{
        textDecorationLine: "none",
      }}
    />
  )

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
      <View style={styles.checkboxContainer}>
        <FlatList
          data={categories}
          renderItem={checkBoxFilter}
          key={3}
          keyExtractor={item => item.id}
          style={styles.itemList}
          numColumns={3}
        />
      </View>
      <FlatList
        data={filteredEvents}
        renderItem={evento}
        ListEmptyComponent={vacio}
        keyExtractor={item => item.id}
        style={styles.itemList}
        horizontal={false}
      />
      {user && (<PlusButton navigation={navigation}/>)}
    </SafeAreaView>
  )
}