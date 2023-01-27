import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import AppNavigator from './app/navigation/AppNavigator';
import AudioProvider from './app/context/AudioProvider';
import color from './app/misc/color';
import { AuthProvider } from './app/context/AuthContext';
import AccountStack from './app/navigation/AccountStack';
import Navigation from './app/navigation/Navigation';
import { MusicStates } from './app/context/MusicContext/MusicStates';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: color.APP_BG,
  },
};

export default function App() {
  return (
    <AuthProvider>
      <MusicStates>
        <NavigationContainer theme={MyTheme}>
          <Navigation />
        </NavigationContainer>
      </MusicStates>

    </AuthProvider>
  );
}
/*
<AudioProvider>
      <NavigationContainer theme={MyTheme}>
        <AppNavigator />
      </NavigationContainer>
    </AudioProvider>
*/
