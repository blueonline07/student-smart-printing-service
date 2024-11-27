// import { StatusBar } from 'expo-status-bar';
// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
// //import Header from './header_footer/header';
// //import Footer from './header_footer/footer';

// export default function Purchase_Pages() {
//     const [inputValue, setInputValue] = useState('');

//     return (
//         <View style={{ flex: 1, backgroundColor: '#0388B4' }}>
//             {/* <Header /> */}
//             <View style={styles.container}>
//                 <View style={styles.TitleContainer}>
//                     <Text style={styles.text1}>MUA THÊM TRANG IN</Text>
//                 </View>

//                 <View style={styles.container1}>

//                     <View style={styles.HavingPages}>
//                         <Text style={styles.text0}>
//                             Trang in hiện có
//                         </Text>
//                     </View>
//                     <Image
//                         source={require('./assets/Purchase_Pages/Image_PayPages_Process.png')}
//                         style={styles.image}
//                     />

//                     <Text style={styles.text1_5}>
//                         MUA TRANG IN
//                     </Text>
//                     <View style={styles.InputContainer}>
//                         {/* <Image
//                             source={require('./assets/Print_History/FindIcon.png')}
//                             style={styles.Icon}
//                         /> */}
                        
//                     </View>
//                 </View>
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     HavingPages:{
//         width: 200,
//         height: 50,
//         backgroundColor: "#0388B4",
//         alignItems: 'center',
//         justifyContent: 'center',
//        marginTop: 30,
//        borderRadius: 10,
//     },
//     ButtonContainer:{
//         height: 50,
//         width: 320,
//        // borderWidth: 2,
//        // borderColor: '#000',
//         marginTop: 10,
//         marginBottom: 10,
//         flexDirection: 'row', // Đặt các thành phần trên cùng một hàng
//         alignItems: 'center', // Căn chỉnh icon và TextInput theo chiều dọc
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
//         flexDirection: 'row', // Đặt các thành phần trên cùng một hàng
//         alignItems: 'center', // Căn chỉnh icon và TextInput theo chiều dọc
//     },
//     Icon: {
//         height: 25,
//         width: 25,
//         marginRight: 10, // Khoảng cách giữa icon và TextInput
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
//     text0:{
//         fontSize: 16,
//         fontWeight: 'bold', // Kiểu chữ đậm
//         fontFamily: 'ChakraPetch-Bold', // Tên font đã khai báo
//         color: '#fff', // Màu chữ chính
//         alignSelf: 'center',
//         textAlign: 'justify'
//     },
//     text1: {
//         fontSize: 25,
//         fontWeight: 'bold',
//         fontFamily: 'ChakraPetch-Bold',
//         color: '#fff',
//         alignSelf: 'center',
//     },
//     text1_5: {
//         fontSize: 25,
//         fontWeight: 'bold',
//         fontFamily: 'ChakraPetch-Bold',
//         color: '#075385',
//         alignSelf: 'center',
//     },
//     image: {
//         height: 235,
//         // borderWidth: 2, // Độ dày viền ảnh
//         // borderColor: '#ff0000', // Màu viền ảnh (đỏ)
//         marginTop: 20
//     },
// });
