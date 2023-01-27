import 'react-native-gesture-handler';
import { createDrawerNavigator, DrawerContent, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    Alert,
    ScrollView,
    TouchableOpacity,
  } from "react-native";
import { Input, Button, Icon } from "@rneui/base";
  import { useEffect, useState } from 'react';
import Home from '../screens/Home';
import DrawerOptions from '../components/DrawerOptions';
import Player from '../screens/Player';
import TrackListScreen from '../screens/TrackListScreen';
import ProfileStack from './ProfileStack';
import HomeStack from './HomeStack';
import GenderStack from './GenderStack';
import MiReserves from '../screens/MiReserves';
import Events from '../screens/Events';
import News from '../screens/News';
import PlayList from '../screens/PlayList';
import PlayListDetail from '../screens/PlayListDetail';
import { createStackNavigator } from '@react-navigation/stack';
import AudioList from '../screens/AudioList';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const PlayListScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='AudioList' component={AudioList} />
      <Stack.Screen name='Player' component={Player} />
    </Stack.Navigator>
  );
};


export const CitizenDrawer = () => {
  return (
    <Drawer.Navigator
        drawerContent={props => <DrawerOptions {...props} />} 
        useLegacyImplementation={true}
        screenOptions={{
            /*headerStyle: {
              backgroundColor: COLORS.blue,
            },*/
            //headerTintColor: '#fff',
            headerShown:false,
           //drawerActiveBackgroundColor:'#33576f',
            //drawerActiveTintColor:'#fff',
            drawerInactiveTintColor:'#333',
            drawerLabelStyle: {
                marginLeft: -25,
                //fontFamily: 'Roboto-Medium',
                fontSize: 15,
            }
        }}
    >
        <Drawer.Screen 
          name='homeScreen'
          component={HomeStack}
          options={{ 
            title: "Pagina principal",
            drawerIcon: ({color})=> (
                <Icon
                    name='home'
                    type='ionicon'
                    size={22}
                    color={color}
                    />
            )
            }} />
            <Drawer.Screen 
          name='eventsScreen'
          component={Events}
          options={{ 
            title: "Eventos presenciales",
            drawerIcon: ({color})=> (
                <Icon
                  name='ticket-alt' 
                  type='fontisto' 
                  color={color} 
                  size={20}
                    />
            )
            }} />
            <Drawer.Screen 
          name='newsScreen'
          component={News}
          options={{ 
            title: "Novedades",
            drawerIcon: ({color})=> (
                <Icon
                  name='newspaper-o' 
                  type='font-awesome' 
                  color={color} 
                  size={20}
                    />
            )
            }} />
            <Drawer.Screen 
          name='MyReserves'
          component={MiReserves}
          options={{ 
            title: "Mis reservas",
            drawerIcon: ({color})=> (
                <Icon
                    name='inbox'
                    type='font-awesome-5'
                    size={22}
                    color={color}
                    />
            )
            }} />
        <Drawer.Screen 
          name='GenerScreen'
          component={GenderStack}
          options={{ 
            title: "Generos",
            drawerIcon: ({color})=> (
                <Icon
                    name='musical-notes-sharp'
                    type='ionicon'
                    size={22}
                    color={color}
                    />
            )
            }} />
        <Drawer.Screen 
          name='profileScreen'
          component={ProfileStack}
          options={{ 
            title: "Ajustes",
            drawerIcon: ({color})=> (
                <Icon
                    name='md-settings-sharp'
                    type='ionicon'
                    size={22}
                    color={color}
                    />
            )
            }} />
            {/*<Drawer.Screen 
          name='trackScreen'
          component={PlayListScreen}
          options={{ 
            title: "Ajustes",
            drawerIcon: ({color})=> (
                <Icon
                    name='md-settings-sharp'
                    type='ionicon'
                    size={22}
                    color={color}
                    />
            )
            }} />*/}
    </Drawer.Navigator>
  );
}

export default CitizenDrawer;