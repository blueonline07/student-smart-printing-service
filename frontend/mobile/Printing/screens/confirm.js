import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView , TextInput, StyleSheet,TouchableOpacity, Alert } from 'react-native';
import styles from '../styles/Printerstyle';
import { getFileData, clearfile } from '../api/configfile';
import { sendreq } from '../api/sendrequest';
import { getScreenData } from '../api/configprinter';
import Header from '../../component/header';
import Footer from '../../component/Footer';

const ConfirmScreen = ({ navigation }) => {
    const [fileData, setFileData] = useState(getFileData());
    const [screenData, setScreenData] = useState(getScreenData());
    console.log(screenData);
    console.log(fileData);
    const sumpage = () => {   
        let sum = 0;
        fileData.map((item) => {
            sum += (item.to_page - item.from_page + 1)*item.quanlity;
        });
        return sum;
    }
    const sendrequest = async () => {
        const data = getScreenData();
        console.log(data);
        await sendreq(data);
    }
    return(
        <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
            <Header navigation={navigation}/>
            <View style={[styles.bounding,{height:"auto",width:"95%",marginTop:40,marginBottom:30}]}>
                <Text style={{ color: "white", fontSize: 22, fontWeight: "bold", textAlign: "center" }}>
                    XÁC NHẬN GIAO DỊCH IN
                </Text>
                <View style={[styles.conttent_print,{minHeight : 400,width:"100%"}]}>
                    <Text style={{ color: "#075385", fontSize: 22, fontWeight: "bold" }}>DANH SÁCH TÀI LIỆU IN</Text>
                    <View style={localStyles.table}>
                        {/* Header Row */}
                        <View style={[localStyles.row, localStyles.headerRow]}>
                        <Text style={[localStyles.cell, localStyles.headerCell,{flex:1}]}>STT</Text>
                        <Text style={[localStyles.cell, localStyles.headerCell,{flex:4}]}>TÀI LIỆU</Text>
                        <Text style={[localStyles.cell, localStyles.headerCell,{flex:2}]}>TRANG IN</Text>
                        </View>
                        {/* Data Rows */}
                        {fileData.map((item, index) => (
                        <View style={localStyles.row} key={index}>
                            <Text style={[localStyles.cell,{flex:1,fontSize:13}]}>{index+1}</Text>
                            <Text style={[localStyles.cell,{flex:4,color:"#075385",fontSize:13}]}>{item.file_name}</Text>
                            <Text style={[localStyles.cell,{flex:2,fontSize:13}]}>{(item.to_page-item.from_page+1)} ({item.quanlity} bản)</Text>
                        </View>
                        ))}
                    </View>
                    <View style={[styles.dropdown,{marginTop:20,justifyContent:"flex-start"}]}>
                        <Text style={[styles.label_printing,{marginLeft:"15%"}]}>Tổng số trang in: </Text>
                        <Text style={{fontSize:18,color:"#6A737B",fontWeight:"bold",marginLeft:30}}>{sumpage()}</Text>
                    </View>
                    <View style={[styles.dropdown,{justifyContent:"flex-start"}]}>
                        <Text style={[styles.label_printing,{marginLeft:"15%"}]}>Tổng số tài liệu: </Text>
                        <Text style={{fontSize:18,color:"#6A737B",fontWeight:"bold",marginLeft:30}}>{fileData.length}</Text>
                    </View>
                    <View style={[styles.dropdown,{justifyContent:"flex-start",marginBottom:"15%"}]}>
                        <Text style={[styles.label_printing,{marginLeft:"15%"}]}>Thời gian hoàn thành (dự kiến): </Text>
                        <Text style={{fontSize:18,color:"#6A737B",fontWeight:"bold",marginLeft:30,width:"35%"}}>{screenData.required ? new Date(screenData.required).toLocaleString() : "1 phút sau"}</Text>
                    </View>

                    <View style={[styles.buttonContainer,{marginTop:20}]}>
                        <TouchableOpacity style={styles.buttonPrinter} onPress={()=>{clearfile();navigation.goBack()}}>
                        <Text style={styles.buttonText} >Quay lại</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonPrinter} onPress={sendrequest}>
                        <Text style={styles.buttonText} >Tiếp tục</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Footer/>
        </ScrollView>
    )
}
export default ConfirmScreen;

const localStyles = StyleSheet.create({
    table: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#6A737B',
        borderRadius: 5,
        marginTop: 20,
      },
      row: {
        flexDirection: 'row',
      },
      headerRow: {
        backgroundColor: '#075385',
      },
      headerCell: {
        color: 'white',
        fontWeight: 'bold',
      },
      cell: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: '#6A737B',
        textAlign: 'center',
      },
});