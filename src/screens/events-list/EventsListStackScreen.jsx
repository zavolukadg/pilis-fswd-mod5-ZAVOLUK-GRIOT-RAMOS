import React from 'react'
import { EventsListScreen } from './EventsListScreen'
import { EventDetailScreen } from '../event-detail/EventDetailScreen'
import { AddEventScreen } from '../../components/plus/AddEventScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const EventsListStack = createNativeStackNavigator()

export const EventsListStackScreen = () => {
  return (
    <EventsListStack.Navigator screenOptions={{ headerShown: false }}>
      <EventsListStack.Screen name='EventosLista' component={EventsListScreen} />
      <EventsListStack.Screen name='Detalle' component={EventDetailScreen} />
      <EventsListStack.Screen name='AddEvent' component={AddEventScreen} />
    </EventsListStack.Navigator>
  )
}