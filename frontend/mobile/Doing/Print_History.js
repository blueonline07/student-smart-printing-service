// import { StatusBar } from 'expo-status-bar';
// import {ScrollView } from 'react-native'
// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
// //import Header from './header_footer/header';
// //import Footer from './header_footer/footer';

// export default function Print_History() {
//     const [inputValue, setInputValue] = useState('');
//     const Print_detail = [{
//         Order_id: 'S24000777',
//         Name: 'Software.pdf',
//         Printer_ID: '106A4P1',
//         Time: '15:00:24, 21/10/2024',
//         Number_of_pages: 77,
//         Status: 'Da giao',
//         Type: 'In tu dong'
//     },
//     {
//         Order_id: 'S24000999',
//         Name: 'Software-Enginee.pdf',
//         Printer_ID: '106A4P1',
//         Time: '15:00:24, 21/10/2024',
//         Number_of_pages: 77,
//         Status: 'Da giao',
//         Type: 'In tu dong'
//     },
//     {
//         Order_id: 'S24000999',
//         Name: 'Software-Enginee.pdf',
//         Printer_ID: '106A4P1',
//         Time: '15:00:24, 21/10/2024',
//         Number_of_pages: 77,
//         Status: 'Da giao',
//         Type: 'In tu dong'
//     },
//     {
//         Order_id: 'S24000999',
//         Name: 'Software-Enginee.pdf',
//         Printer_ID: '106A4P1',
//         Time: '15:00:24, 21/10/2024',
//         Number_of_pages: 77,
//         Status: 'Da giao',
//         Type: 'In tu dong'
//     }]
//     return (
//         <View style={{ flex: 1, backgroundColor: '#0388B4' }}>
//             <Header />
//             <View style={styles.container}>
//                 <View style={styles.TitleContainer}>
//                     <Text style={styles.text1}>LỊCH SỬ GIAO DỊCH IN ẤN</Text>
//                 </View>
//                 <View style={styles.container1}>
//     <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={true}>
//         <View style={styles.InputContainer}>
//             <Image
//                 source={require('./assets/Print_History/FindIcon.png')}
//                 style={styles.Icon}
//             />
//             <TextInput
//                 style={styles.textInput}
//                 value={inputValue}
//                 onChangeText={setInputValue}
//                 placeholder="Tìm kiếm giao dịch"
//             />
//         </View>
//         <View style={styles.ContainerAsRow}>
//             <Text style={styles.text0}> Tìm kiếm từ </Text>
//             <View style={styles.ContainerAsRow_border}>
//                 <Text style={{ width: 120 }}>11/12/2920</Text>
//                 <Image
//                     source={require('./assets/Print_History/ChooseDate.png')}
//                     style={styles.Icon}
//                 />
//             </View>
//         </View>
//         <View style={styles.ContainerAsRow}>
//             <Text style={styles.text0}> Đến ngày </Text>
//             <View style={styles.ContainerAsRow_border}>
//                 <Text style={{ width: 120 }}>11/12/2920</Text>
//                 <Image
//                     source={require('./assets/Print_History/ChooseDate.png')}
//                     style={styles.Icon}
//                 />
//             </View>
//         </View>
//         {Print_detail.map((item, index) => (
//             <View key={index} style={styles.PrintDetail}>
//             {/* Mã giao dịch trên 1 dòng */}
//             <Text style={[styles.text0, styles.Box]}>
//                 Mã giao dịch: <Text style={styles.text001}>{item.Order_id}</Text>
//             </Text>
        
//             {/* Hai cột */}
//             <View style={styles.DetailRow}>
//                 {/* Cột bên trái */}
//                 <View style={styles.LeftColumn}>
//                     <Text style={styles.text05}>Tên tài liệu: 
//                         <Text style={styles.text051}> {item.Name}</Text>
//                     </Text>
//                     <Text style={styles.text05}>Máy in: 
//                         <Text style={styles.text051}>{item.Printer_ID}</Text>
//                     </Text>
//                     <Text style={styles.text05}>Thời gian: 
//                         <Text style={styles.text051}>{item.Time}</Text>
//                     </Text>
//                 </View>
        
//                 {/* Cột bên phải */}
//                 <View style={styles.RightColumn}>
//                     <Text style={styles.text05}>Số trang in: 
//                         <Text style={styles.text051}>{item.Number_of_pages}</Text>
//                     </Text>
//                     <Text style={styles.text05}>Trạng thái: 
//                         <Text style={styles.text051}>{item.Status}</Text>
//                     </Text>
//                     <Text style={styles.text05}>Loại: 
//                         <Text style={styles.text051}>{item.Type}</Text>
//                     </Text>
//                 </View>
//             </View>
//         </View>
//         ))}
//     </ScrollView>
// </View>
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
    
//     DetailRow: {
//         flexDirection: 'row', // Tạo hàng ngang cho hai cột
//         justifyContent: 'space-between', // Căn khoảng cách giữa các cột
//         marginTop: 5,
//     },
    
//     LeftColumn: {
//         flex: 3, // Để cột chiếm phần còn lại
//         paddingRight: 5, // Khoảng cách bên phải của cột trái
//     },
    
//     RightColumn: {
//         flex: 2, // Để cột chiếm phần còn lại
//         paddingLeft: 5, // Khoảng cách bên trái của cột phải
//         //alignItems: 'flex-start', // Căn đều nội dung bên trái
//     },
    
//     Box: {
//         width: 290,
//         paddingBottom: 5,
//         marginBottom:5,
//         borderBottomWidth: 1, // Chỉ hiển thị đường viền dưới
//         borderBottomColor: '#000', // Màu của viền
//         borderStyle: 'dashed', // Kiểu đường nét đứt
//     },    
//     scrollContent: {
//         paddingHorizontal: 5, // Tạo khoảng cách ngang cho nội dung
//         paddingBottom: 10, // Khoảng cách phía dưới khi cuộn
//     },  
//     PrintDetail:{
//         width: 320,
//         backgroundColor: '#00C0EF',
//         marginTop: 20,
//         padding:10,
//         borderRadius:10,
//     },
//     ContainerAsRow: {
//         // borderWidth: 2,
//         // borderColor: '#000',
//         marginTop: 15,
//         flexDirection: 'row',
//         alignItems: 'center', // Căn giữa theo chiều dọc
//         justifyContent: 'flex-end', // Đẩy nội dung về bên phải // Thêm khoảng cách bên trong
//         width: 290.
//     },
//     ContainerAsRow_border: {
//         borderRadius: 50,
//         borderWidth: 2,
//         borderColor: '#000',
//         paddingLeft: 10,
//         height: 50,
//         width: 180,
//         marginLeft: 10,
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'left', // Đảm bảo căn giữa nội dung theo chiều dọc
//     },
//     InputContainer: {
//         height: 50,
//         width: 320,
//         borderRadius: 50,
//         borderWidth: 2,
//         borderColor: '#000',
//         marginTop: 30,
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
//         borderRadius: 30,
//         borderWidth: 2,
//         borderColor: '#fff',
//     },
//     TitleContainer: {
//         alignItems: 'center',
//         padding: 0,
//         marginBottom: 5,
//     },
//     text0: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         fontFamily: 'ChakraPetch-Bold',
//         color: '#000',
//         // alignSelf: 'center',
//         textAlign: 'justify'
//     },
//     text001: {
//         fontSize: 16,
//         fontWeight: 'regular',
//         fontFamily: 'ChakraPetch-Bold',
//         color: '#000',
//         // alignSelf: 'center',
//         textAlign: 'justify'
//     },
//     text05: {
//         fontSize: 12,
//         fontWeight: 'bold',
//         fontFamily: 'ChakraPetch-Bold',
//         color: '#000',
//         // alignSelf: 'center',
//          textAlign: 'left'
//     },
//     text051: {
//         fontSize: 12,
//         fontWeight: 'regular',
//         fontFamily: 'ChakraPetch-Bold',
//         color: '#000',
//         // alignSelf: 'center',
//         textAlign: 'justify'
//     },
//     text1: {
//         fontSize: 25,
//         fontWeight: 'bold',
//         fontFamily: 'ChakraPetch-Bold',
//         color: '#fff',
//         alignSelf: 'center',
//     },
// });
