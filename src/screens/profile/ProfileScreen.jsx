import React from 'react'
import { ActivityIndicator, View, Text,StyleSheet,SafeAreaView,Button, TextInput, Alert, StatusBar, Dimensions} from 'react-native'
import { COLORS } from '../../utils/theme'
import { useForm, Controller } from "react-hook-form";
import { useAuth } from '../../hooks/useAuth';
import { FontAwesome } from '@expo/vector-icons';

const LoginScreen = ({ login }) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      user: '',
      password: '',
    }
  });

  const onSubmit = async ({ user, password }) => {
    try {
      await login(user, password)
    } catch (error) {
      Alert.alert('Error', error.message)
    }
  };

  return (
    <>
      <View style={styles.icon}>
        <FontAwesome name="user-circle" size={108} color={COLORS.primary} />
      </View>
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
            placeholder="Usuario"
            keyboardType="email-address"
          />
        )}
        name="user"
      />
      {errors.user && <Text style={styles.errorMessage}>El usuario es obligatorio</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry={true}
            autoCorrect={false}
            autoCapitalize='none'
          />
        )}
        name="password"
      />
      {errors.password && <Text style={styles.errorMessage}>La contraseña es obligatoria</Text>}
      <Button color={COLORS.primary} title="Login" onPress={handleSubmit(onSubmit)} />
    </>
  )
}

const UserScreen = ({ logout, user }) => {
  return (
    <>
      <View style={styles.icon}>
        <FontAwesome name="user-circle" size={108} color={COLORS.primary} />
      </View>
      <Text style={styles.welcomeText}>Bienvenido</Text>
      <Text style={styles.userText}>Nombre: {user.name}</Text>
      <Text style={styles.userText}>Usuario: {user.user}</Text>
      <Text style={styles.userText}>Direccion: {`${user.direccion.calle} ${user.direccion.numero}`}</Text>

      <Button color={COLORS.primary} title="Logout" onPress={logout} />
    </>
  )
}

export const ProfileScreen = () => {
  const { login, logout, isAuthenticated, user, isLoading } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      {
        isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : isAuthenticated ? (
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
    flexDirection: 'column',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  errorMessage: {
    color: 'red',
  },
  icon: {
    alignItems: 'center',
    marginBottom: 20,
  },
  userText: {
    fontSize: 20,
  },
  welcomeText: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  }
})
