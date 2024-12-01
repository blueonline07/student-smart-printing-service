import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: '#0388B4',
      height: '100%',
      // justifyContent: 'center',
    },
    buttonContainer: {
      marginTop:"10%",
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

  export default styles;