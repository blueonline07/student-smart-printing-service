import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

Print_screen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonPrintNow}>
          <Text style={styles.buttonText}>In tự động lấy liền</Text>
        </TouchableOpacity>
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
          <Text style={styles.buttonText}>
            Sign in with Facebook
          </Text>
        </LinearGradient>
        <TouchableOpacity style={styles.buttonPrintLater}>
          <Text style={styles.buttonText}>In lấy sau tại quầy</Text>
        </TouchableOpacity>
      </View>
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
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonPrintNow: {
      backgroundColor: '#00bfff',
      padding: 10,
      margin: 10,
      borderRadius: 5,
    },
    buttonPrintLater: {
      backgroundColor: '#00bfff',
      padding: 10,
      margin: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 20,
    },
    linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5
    },
    });