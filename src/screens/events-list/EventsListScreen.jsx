import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, FlatList, Pressable, Image } from 'react-native'
import { styles } from './EventsListScreen.styles'
import { SearchBar } from '../../components/search-bar/SearchBar'
import { getEventsList } from '../../api/events.service'
import BouncyCheckbox from "react-native-bouncy-checkbox";

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
  const [checkboxState, setCheckboxState] = useState(false);
  const[categoryFilter, setCategoryFilter] = useState([]);
  const[eventosFiltrados,setEventosFiltrados] = useState([]);
  const[categories,setCategories] = useState([]);

  const imagenPruebaSrc = '../../../assets/images/feriapancasero.jpg';
  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  const filteredEvents = eventsList.filter(evento => (
    evento.title.toLowerCase().includes(searchQuery.toLowerCase())
  ))

  const setFilters = (events) => {
    let categoriesMap = events.map(evento=>{
      return [evento.category,evento]
    });
    var categoriesMapArr = new Map(categoriesMap); // Pares de clave y valor
    setCategories([...categoriesMapArr.values()])
  }
 
  const handleFilterChange = (item) => {
    console.log("Se ejecuta por primera vez");
    let primerFiltro = eventsList

    /* setSearchQuery(query) */
    /* if(query!=null){
      console.log("Prueba");      
      primerFiltro = eventsList.filter(evento => evento.title.toLowerCase().includes(searchQuery.toLowerCase()))
    } */

    let categoryCheck = item.item.category
    let filtersChecked
    if (!categoryFilter.includes(categoryCheck)){ //Si no incluye la categoria la agrega
      categoryFilter.push(categoryCheck);
      filtersChecked = categoryFilter
    }
    else{
      filtersChecked = categoryFilter.filter(category => category != categoryCheck)
    }
    setCategoryFilter(filtersChecked)
    filtersChecked.length != 0? setEventosFiltrados(primerFiltro.filter(evento => filtersChecked.includes(evento.category)))
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
        <Image source={url[item.id - 1]} style={styles.itemImage} />
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemPrice}>Precio: ${item.precio}</Text>
      </View>
    </Pressable>
  )

  const checkBoxFilter = ({ item }) => (
    <BouncyCheckbox
      style={styles.checkbox}
      isChecked={checkboxState}
      text={item.category}
      fillColor="blue"
      iconStyle={{ borderColor: "blue" }}
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
        data={eventosFiltrados}
        renderItem={evento}
        keyExtractor={item => item.id}
        style={styles.itemList}
        horizontal={false}
      />
    </SafeAreaView>
  )
}
