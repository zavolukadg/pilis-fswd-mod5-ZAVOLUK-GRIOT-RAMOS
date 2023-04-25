import React from 'react'
import { ActivityIndicator, View, Text,StyleSheet,SafeAreaView,Button, TextInput, Alert, StatusBar, Dimensions,Pressable} from 'react-native'
import { COLORS } from '../../utils/theme'
import { useForm, Controller} from "react-hook-form";
import { useAuth } from '../../hooks/useAuth';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTogglePasswordVisibility } from '../../utils/useTogglePasswordVisibility';

const LoginScreen = ({ login }) => {
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
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
          <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputField}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Usuario"
            keyboardType="email-address"
          />
          </View>
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
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputField}
              placeholder="Contraseña"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={passwordVisibility}
              autoCorrect={false}
              autoCapitalize='none'
            />
            <Pressable onPress={handlePasswordVisibility}>
              <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
            </Pressable>
          </View>
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
  },
  inputContainer: {
    paddingHorizontal: 10,
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#d7d7d7',
  },
  inputField: {
    padding: 14,
    fontSize: 16,
    width: '90%'
  }
})
