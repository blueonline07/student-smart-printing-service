import React from 'react';
import { View, Text, TouchableOpacity , Image,ScrollView} from 'react-native';
import TitleComponent from './components/Title';
import styles from './style';
import Header from '../Login/components/Header';
import Footer from '../Login/components/Footer';

Print_screen = ({ navigation }) => {
  return (
    <View style={styles.container} contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
      <Header navigation={navigation}/>
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
      <Footer/>
    </View>
  );
}
export default Print_screen;

