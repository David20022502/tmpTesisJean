import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react'
import Lottie from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../app/context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Onboarding from '../components/Onboarding';

//const navigation = useNavigation();

const Splash = ({navigation}) => {
    const {userInfo} = useContext(AuthContext)
    const {user, logged, logout, isLogged} = useContext(AuthContext)

  return (
    <Lottie 
      source={require('../../assets/bird-loader.json')} 
      autoPlay 
      loop = {false}
      speed= {2}
      onAnimationFinish = {async() => {
        console.log("Animation finish")
        console.log(isLogged)
        console.log(await AsyncStorage.getItem('token'))
        //let token = await AsyncStorage.getItem('token');
      let token = await AsyncStorage.getItem('token');
      //let token = false
      }}
    />
  )
}

const styles = StyleSheet.create({})

export default Splash