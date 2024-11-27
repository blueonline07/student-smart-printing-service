// import { StatusBar } from 'expo-status-bar';
// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
// import Header from './header_footer/header';
// import Footer from './header_footer/footer';

// export default function PurchasePages_History() {
//     const [inputValue, setInputValue] = useState('');

//     return (
//         <View style={{ flex: 1, backgroundColor: '#0388B4' }}>
//             <Header />
//             <View style={styles.container}>
//                 <View style={styles.TitleContainer}>
//                     <Text style={styles.text1}>LỊCH SỬ MUA TRANG IN</Text>
//                 </View>
//                 <View style={styles.container1}>
//                     <View style={styles.ButtonContainer}>
//                         <View>
//                             <TouchableOpacity
//                                 style={styles.button}
//                             >
//                                 <Text style={styles.buttonText}>Trang in hiện có</Text>
//                             </TouchableOpacity>
//                         </View>
//                         <View>
//                             <TouchableOpacity
//                                 style={styles.button}
//                             >
//                                 <Text style={styles.buttonText}>Mua thêm trang in</Text>
//                             </TouchableOpacity>
//                         </View>
//                     </View>
//                     <View style={styles.InputContainer}>
//                         <Image
//                             source={require('./assets/Print_History/FindIcon.png')}
//                             style={styles.Icon}
//                         />
//                         <TextInput
//                             style={styles.textInput}
//                             value={inputValue}
//                             onChangeText={setInputValue}
//                             placeholder="Tìm kiếm giao dịch"
//                         />
//                     </View>
//                 </View>
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     ButtonContainer:{
//         height: 50,
//         width: 320,
//        // borderWidth: 2,
//        // borderColor: '#000',
//         marginTop: 10,
//         marginBottom: 10,
//         flexDirection: 'row', 
//         alignItems: 'center', 
//     },
//     button: {
//         marginTop: 15,
//         marginBottom: 15,
//         backgroundColor: '#20C997', // Màu nền
//         borderRadius: 10, // Bo góc
//         alignItems: 'center',
//         width: 150,
//         height: 40,
//         marginLeft:5,
//         justifyContent: 'center',
//     },
//     buttonText: {
//         fontSize: 16, // Cỡ chữ
//         fontWeight: 'bold', // Kiểu chữ đậm
//         color: '#FFFFFF', // Màu chữ
//     },
//     InputContainer: {
//         height: 50,
//         width: 320,
//         borderRadius: 50,
//         borderWidth: 2,
//         borderColor: '#000',
//         marginTop: 5,
//         paddingLeft: 10,
//         flexDirection: 'row', 
//         alignItems: 'center', 
//     },
//     Icon: {
//         height: 25,
//         width: 25,
//         marginRight: 10, 
//     },
//     textInput: {
//         width: "80%",
//         height: '90%',
//         fontSize: 16,
//         padding: 0,
//     },
//     container: {
//         flex: 1,
//         backgroundColor: "#6A737B",
//         opacity: 0.8,
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderRadius: 50,
//         borderWidth: 2,
//         borderColor: '#fff',
//         margin: 10,
//         padding: 15,
//     },
//     container1: {
//         flex: 1,
//         backgroundColor: "#fff",
//         alignItems: 'center',
//         width: "100%",
//         borderRadius: 50,
//         borderWidth: 2,
//         borderColor: '#fff',
//     },
//     TitleContainer: {
//         alignItems: 'center',
//         padding: 0,
//         marginBottom: 15,
//     },
//     text1: {
//         fontSize: 25,
//         fontWeight: 'bold',
//         fontFamily: 'ChakraPetch-Bold',
//         color: '#fff',
//         alignSelf: 'center',
//     },
// });
