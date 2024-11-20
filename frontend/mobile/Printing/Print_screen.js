import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity , Image } from 'react-native';
import TitleComponent from './components/Title';

Print_screen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Image
          source={require('../assets/images/printing.png')} // Đường dẫn ảnh
          style={styles.image_printing}
        />
        <TitleComponent />
        <TouchableOpacity style={styles.buttonPrint}>
          <Text style={styles.buttonText} onPress={() => navigation.navigate('PrinterSelection', { param: 1 })}        >IN TỰ ĐỘNG LẤY LIỀN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonPrint} >
          <Text style={styles.buttonText} onPress={() => navigation.navigate('PrinterSelection', { param: 0 })}  >IN LẤY SAU TẠI QUẦY</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Print_screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#0388B4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPrint: {
    backgroundColor: '#20C99766',
    paddingHorizontal: '15%',
    paddingVertical: 10,
    margin: 10,
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    fontFamily: 'ChakraPetch-Bold',
  },
  image_printing: {
    width: 350,
    height: 233.13,
    marginBottom: 20,
  },
});