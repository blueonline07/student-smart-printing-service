import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeBeforeLogin from './HomeBeforeLogin.js';  
import HomeLogin from './HomeLogin.js';  

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeBeforeLogin"> 
        
        {/* HomeBeforeLogin */}
        <Stack.Screen 
          name="HomeBeforeLogin" 
          component={HomeBeforeLogin} 
          options={{ headerShown: false }}
        />

        {/* HomeLogin */}
        <Stack.Screen 
          name="HomeLogin" 
          component={HomeLogin} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}