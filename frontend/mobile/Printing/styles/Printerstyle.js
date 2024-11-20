import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#0388B4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bounding: {
        backgroundColor: '#6A737BCC',
        borderRadius: 30,
        marginTop: 20,
        padding: 20,
        paddingTop: 10,
        width: '90%',
        flexDirection: 'column',
        height: '85%',
    },
    conttent_print: {
        alignItems: 'center',
        width: '100%',
        height: '95%',
        padding: 20,
        marginTop: 5,
        backgroundColor: '#fff',
        borderRadius: 20,
    },
    dropdownContainer: {
        width: '100%',
        paddingHorizontal: 20,
    },
    dropdown: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        padding: 5,
    },
    label_printing: {
        color: '#075385',
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10,
        width: '50%',
    },
    pickercontainer: {
        width: '47%', 
        borderWidth: 1, 
        borderColor: '#6A737B', 
        borderRadius: 20, 
        backgroundColor: 'white', 
        overflow: 'hidden', 
    },
    picker: {
        height: 50,
        width: '100%',
        color: 'black', 
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    buttonPrinter:{
        backgroundColor: '#20C997',
        paddingHorizontal: '15%',
        paddingVertical: 10,
        margin: 10,
        borderRadius: 30,
    },
    buttonText:{
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'ChakraPetch-Bold',
    }
  });

  export default styles;