import { createContext, useContext, useState } from 'react'
import { getUsers } from '../api/user.service'

export const AuthContext = createContext({
  isAuthenticated: false,
  isLoading: false,
  user: {},
  login: () => {},
  logout: () => {},
})

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const login = async (email, password) => {
    setIsLoading(true)
    const users = await getUsers()
    const data = users.find(user => user.user === email && user.pass === password)
    if (data) {
      setIsLoading(false)
      setCurrentUser(data)
      console.log('User logged in: ', data)
    } else {
      setIsLoading(false)
      throw new Error('User and password not found!')
    }
  }

  const logout = async () => {
    setCurrentUser(null)
  }

  const isAuthenticated = !!currentUser

  const value = { 
    isAuthenticated,
    isLoading,
    user: currentUser,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}