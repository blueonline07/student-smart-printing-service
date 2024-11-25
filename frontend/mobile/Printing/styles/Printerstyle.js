import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#0388B4',
    },
    bounding: {
        backgroundColor: '#6A737BCC',
        borderRadius: 30,
        marginTop: 20,
        padding: 10,
        paddingTop: 10,
        width: '92%',
        flexDirection: 'column',
        height: 'auto',
    },
    conttent_print: {
        alignItems: 'center',
        width: '100%',
        height: 'auto',
        padding: 10,
        marginTop: 5,
        backgroundColor: '#fff',
        borderRadius: 20,
    },
    dropdownContainer: {
        width: '100%',
        paddingHorizontal: 10,
        
    },
    dropdown: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5,
        padding: 5,
    },
    label_printing: {
        color: '#075385',
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 10,
        width: '45%',
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
        height: 'auto',
        width: '100%',
        fontSize: 10,
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
    },
    pickerdatetime: {
        width: '40%', 
        borderWidth: 1, 
        borderColor: '#6A737B', 
        margin: 5,
        borderRadius: 20, 
        backgroundColor: 'white', 
        overflow: 'hidden', 
        alignContent    : 'center',
        justifyContent  : 'center',
        alignItems      : 'center',
    },
    uploadBox: {
        width: "90%",
        height: 150,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      },
      uploadText: {
        color: "#888",
        marginVertical: 5,
      },
      uploadButton: {
        backgroundColor: "#0083ff",
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
      },
      uploadButtonText: {
        color: "white",
        fontWeight: "bold",
      },
  });

  export default styles;