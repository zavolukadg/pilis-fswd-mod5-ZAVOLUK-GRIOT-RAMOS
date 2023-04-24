import React from 'react'
import { Text,StyleSheet,SafeAreaView,Button, TextInput, Alert, StatusBar} from 'react-native'
import { COLORS } from '../../utils/theme'
import { useForm, Controller } from "react-hook-form";
import { useAuth } from '../../hooks/useAuth';

const LoginScreen = ({ login }) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const onSubmit = async ({ email, password }) => {
    try {
      await login(email, password)
    } catch (error) {
      Alert.alert('Error', error.message)
    }
  };

  return (
    <>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Email"
            keyboardType="email-address"
          />
        )}
        name="email"
      />
      {errors.email && <Text style={styles.errorMessage}>El usuario es obligatorio</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      {errors.password && <Text style={styles.errorMessage}>La contraseña es obligatoria</Text>}
      <Button title="Login" onPress={handleSubmit(onSubmit)} />
    </>
  )
}

const UserScreen = ({ logout, user }) => {
  return (
    <>
      <Text>Bienvenido</Text>
      <Text>Nombre: {user.name}</Text>
      <Text>Usuario: {user.user}</Text>
      <Text>Direccion: {`${user.direccion.calle} ${user.direccion.numero}`}</Text>

      <Button title="Logout" onPress={logout} />
    </>
  )
}

export const ProfileScreen = () => {
  const { login, logout, isAuthenticated, user } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      {
        isAuthenticated ? (
          <UserScreen logout={logout} user={user} />
        ) : (
          <LoginScreen login={login} />
        )
      }
    </SafeAreaView>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: COLORS.grey,
    padding: 10,
    margin: 12,
    gap: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  errorMessage: {
    color: 'red',
  }
})
