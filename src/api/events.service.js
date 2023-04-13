import { api } from './api'
const SERVICE_ENDPOINT = `${api.server + api.apiVersion}/events`

export const getEventsList = async () => {
  try {
    const response = await fetch(SERVICE_ENDPOINT)
    return response.json()
  } catch {
    throw new Error('could not fetch events from server')
  }
}
