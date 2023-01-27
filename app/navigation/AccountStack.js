import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import RecoverPassword from '../screens/RecoverPassword';
import Register from '../screens/Register';
import Register_part2 from '../screens/Register_part2';
import ResetPassword from '../screens/ResetPassword';
import Onboarding from '../components/Onboarding';
import CitizenDrawer from '../navigation/CitizenDrawer'
import AccountCreated from '../screens/AccountCreated';
import CommentsList from '../screens/CommentsList';

const Stack=createStackNavigator();

export const  AccountStack = () =>{
  return (
    <NavigationContainer>
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen
                name="splash"
                component={Splash}
            />
            <>
            <Stack.Screen
                name="onboarding"
                component={Onboarding}
            />
            <Stack.Screen
                name="recoverPassword"
                component={RecoverPassword}
            />
            <Stack.Screen
                name="resetPassword"
                component={ResetPassword}
            />
            <Stack.Screen
                name="register"
                component={Register}
            />
            <Stack.Screen
                name="register_part2"
                component={Register_part2}
            />
            <Stack.Screen
                name="login"
                component={Login}
            />
            <Stack.Screen
                name="account-created"
                component={AccountCreated}
            />
            <Stack.Screen
                name="home"
                component={CitizenDrawer}
            />
            <Stack.Screen
                name="comments-list"
                component={CommentsList}
            />
            </>
            
        
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AccountStack