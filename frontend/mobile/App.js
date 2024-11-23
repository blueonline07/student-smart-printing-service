import { StatusBar } from 'expo-status-bar'; 
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeBeforeLogin from './HomeBeforeLogin.js';  

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        
        {/* HomeBeforeLogin*/}
        <Stack.Screen 
          name="Home" 
          component={HomeBeforeLogin} 
          options={{ headerShown: false }} // Ẩn navigation header
        />

      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}