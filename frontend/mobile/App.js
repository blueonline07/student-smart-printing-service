import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Print_screen from './Printing/Print_screen';
import PrinterSelectionScreen from './Printing/screens/selectPrint';
import UpLoadScreen from './Printing/screens/upLoad';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Printing"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Printing" component={Print_screen} />
        <Stack.Screen name="PrinterSelection" component={PrinterSelectionScreen} />
        <Stack.Screen name="UpLoadDoc" component={UpLoadScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
