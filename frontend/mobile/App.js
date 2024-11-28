import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Login Screens
import HomeBeforeLogin from './Login/screens/HomeBeforeLogin';
import HomeLogin from './Login/screens/HomeLogin';
import HomeAfterLogin from './Login/screens/HomeAfterLogin';
import Information from './Login/screens/Information';
// Printing Screens
import PrinterSelectionScreen from './Printing/screens/selectPrint';
import Print_screen from './Printing/Print_screen';
import UpLoadScreen from './Printing/screens/upLoad';
import ConfigfileScreen from './Printing/screens/config';
import ConfirmScreen from './Printing/screens/confirm';
import Print_History from './Printing_history/Printing_History';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeBeforeLogin"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Printing" component={Print_screen} />
        <Stack.Screen name="PrinterSelection" component={PrinterSelectionScreen} /> 
        <Stack.Screen name="UpLoadDoc" component={UpLoadScreen} />
        <Stack.Screen name="Configfile" component={ConfigfileScreen} />
        <Stack.Screen name="Confirm" component={ConfirmScreen} />

        <Stack.Screen
          name="HomeBeforeLogin"
          component={HomeBeforeLogin}
        />

        {/* HomeLogin Screen */}
        <Stack.Screen
          name="HomeLogin"
          component={HomeLogin}
        />

        {/* HomeAfterLogin Screen */}
        <Stack.Screen
          name="HomeAfterLogin"
          component={HomeAfterLogin}
        />

        {/* Information Screen */}
        <Stack.Screen
          name="Information"
          component={Information}
        />
        <Stack.Screen
          name="Print_History"
          component={Print_History}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}