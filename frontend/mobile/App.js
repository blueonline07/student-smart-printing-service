import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screens
import HomeBeforeLogin from './HomeBeforeLogin';
import HomeLogin from './HomeLogin';
import HomeAfterLogin from './HomeAfterLogin';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeBeforeLogin">
        
        {/* HomeBeforeLogin Screen */}
        <Stack.Screen
          name="HomeBeforeLogin"
          component={HomeBeforeLogin}
          options={{ headerShown: false }}
        />

        {/* HomeLogin Screen */}
        <Stack.Screen
          name="HomeLogin"
          component={HomeLogin}
          options={{ headerShown: false }}
        />

        {/* HomeAfterLogin Screen */}
        <Stack.Screen
          name="HomeAfterLogin"
          component={HomeAfterLogin}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}