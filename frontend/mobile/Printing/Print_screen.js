import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

Print_screen = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}
export default Print_screen;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f8ff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });