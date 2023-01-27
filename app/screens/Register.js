import { StyleSheet, Text, View, Image,ScrollView, Dimensions ,SafeAreaView, Keyboard, Alert, ImageBackground, KeyboardAvoidingView, StatusBar } from 'react-native'
import React, { useContext, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Input from '../components/Input'
import Button from '../components/Button'
import Loader from '../components/Loader';
import { validateEmail,validateName, validateLastname, validatePassword } from '../utils/helpers';
import axios from 'axios';
import { AuthContext, AuthProvider } from '../../app/context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import {Poppins_400Regular,Poppins_400Regular_Italic,Poppins_500Medium} from '@expo-google-fonts/poppins';
import { useFonts } from '@expo-google-fonts/dev';
import { colors, sizes } from '../const/CONST';

export default function Register() {
    const [userData, setUserData] = useState({first_name:'',last_name:'',email:'', password:''});
    const [errorName, setErrorName] = useState();
    const [errorLastname, setErrorLastname] = useState();
    const [errorEmail, setErrorEmail] = useState();
    const [errorPassword, setErrorPassword] = useState();

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium
  });

  const navigation = useNavigation();
  const {isLoading, login} = useContext(AuthContext)

  const validate = () => {
    let isValid = true;
    console.log(userData)
    if(errorName!=''){
        console.log('DATOS DE NOMBRE')
        setErrorName('El campo nombre no puede estar vacio')
        isValid = false;
    }
    if(errorLastname!=''){
        console.log('DATOS DE APELLIDO')
        setErrorLastname('El campo apellido no puede estar vacio')
        isValid = false;
    }
    if(errorEmail!=''){
        console.log('DATOS DE EMAIL')
        setErrorEmail('El campo correo electronico no puede estar vacio')
        isValid = false;
    }
    console.log("PASS ", errorPassword)
    if(errorPassword!=''){
        console.log('DATOS DE CONTRASENA')
        setErrorPassword('El campo contraseña de usuario no puede estar vacio')
        isValid = false;
    }
    if(errorName=='' && errorLastname==''&& errorEmail==''&& errorPassword==''){
        console.log('DATOS SIN ERRORES')
    }
    if (isValid) {
      //onLogin(userData.email,userData.password)
      navigation.navigate('register_part2',{userData:userData})
    }
  };


  if (!fontsLoaded) {
    return null;
  } else {
  return (
    <ScrollView style={styles.mainContainer}>
      <Loader visible={isLoading} text="Iniciando sesion" />
      <StatusBar hidden={false} />
      <ImageBackground 
        source={require("../../assets/garza-fondo.jpg")}
        imageStyle= {{opacity:0.3}}
        style={styles.background}
      >
      <View style={styles.contentContainer}>
        <Text style={styles.title}>
            Crea tu cuenta aquí
        </Text>
        <Text style={styles.subtitle}>
          Registrate en nuestra aplicación y experimenta la existencia como un prodigioso programa de amor y belleza
        </Text>
        <Input
            onChangeText={txt => {
              validateName(txt,setErrorName)
              setUserData({...userData, first_name:txt})
            }}
            iconName="account-outline"
            label="Nombre"
            placeholder="Ingresa tu nombre"
            maxLength={10}
            error={errorName}
            keyboard='default'
            editable={true}
            value={userData.first_name}
            />
        <Input
            onChangeText={txt => {
              validateLastname(txt,setErrorLastname)
              setUserData({...userData, last_name:txt})
            }}
            iconName="account-outline"
            label="Apellido"
            placeholder="Ingresa tu apellido"
            maxLength={15}
            error={errorLastname}
            keyboard='default'
            editable={true}
            value={userData.last_name}
            />
        <Input
            onChangeText={txt => {
              validateEmail(txt,setErrorEmail)
              setUserData({...userData, email:txt})
            }}
            iconName="email-outline"
            label="Correo Electrónico"
            placeholder="Ingresa tu correo electronico"
            maxLength={30}
            error={errorEmail}
            keyboard='email-address'
            editable={true}
            value={userData.email}
            />
        <Input
              onChangeText={text => {
                validatePassword(text,setErrorPassword)
                setUserData({...userData, password:text})}}
            iconName="lock-outline"
            label="Contraseña"
            placeholder="Ingresa tu contraseña"
            error={errorPassword}
            maxLength={15}
            password
            keyboard='default'
            editable={true}
            value={userData.password}
          />
        <Button title="CONTINUAR REGISTRO" onPress={validate} />
        </View>
        </ImageBackground>
    </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
      },
    contentContainer:{
      padding: 24,
    },
    background:{
      width: sizes.width,
      height: sizes.height
    },
    title:{
        marginVertical:15,
        fontSize:27,
        textAlign:'justify',
        fontFamily: 'Poppins_500Medium'
    },
    subtitle:{
        fontSize:14,
        marginBottom: 10,
        textAlign:'justify',
        fontFamily: 'Poppins_400Regular'
    },
})