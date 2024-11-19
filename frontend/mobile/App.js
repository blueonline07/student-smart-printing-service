import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Print_screen from './Printing/Print_screen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Printing">
        <Stack.Screen name="Printing" component={Print_screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
