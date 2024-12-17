import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import Header from '../Login/components/Header';
import styles from './styles.js'
import FindOrder from './component/findOrder.js';
import FindOrder_by_date from './component/findOrder_by_date.js';

export default function Print_History({navigation}) {
    const [inputValue, setInputValue] = useState('');
    const [startDate, setstartDate] = useState('');
    const [endDate, setendDate] = useState('');
    const [Print_detail, setPrint_detail]= useState([{
        Order_id: 'S24000777',
        Name: 'Software.pdf',
        Printer_ID: '106A4P1',
        Time: '15:00:24, 21/10/2024',
        Number_of_pages: 77,
        Status: 'Da giao',
        Type: 'In tu dong'
    },
    {
        Order_id: 'S24000999',
        Name: 'Software-Enginee.pdf',
        Printer_ID: '106A4P1',
        Time: '15:00:24, 21/10/2024',
        Number_of_pages: 77,
        Status: 'Da giao',
        Type: 'In tu dong'
    },
    {
        Order_id: 'S24000999',
        Name: 'Software-Enginee.pdf',
        Printer_ID: '106A4P1',
        Time: '15:00:24, 21/10/2024',
        Number_of_pages: 77,
        Status: 'Da giao',
        Type: 'In tu dong'
    },
    {
        Order_id: 'S24000999',
        Name: 'Software-Enginee.pdf',
        Printer_ID: '106A4P1',
        Time: '15:00:24, 21/10/2024',
        Number_of_pages: 77,
        Status: 'Da giao',
        Type: 'In tu dong'
    }])
  //const [orders, setOrders] = useState([]);
  const email = "huyentran@gmail.com"; 

  useEffect(() => {
    // const fetchOrders = async () => {
    //   try {
    //     const response = await fetch(`http://localhost:8000/api/orders?email=${email}`);
    //     if (response.ok) {
    //       const data = await response.json();
    //       setPrint_detail(data); 
    //     } else {
    //       console.error("Failed to fetch orders");
    //     }
    //   } catch (error) {
    //     console.error("Error:", error);
    //   }
    // };
    // fetchOrders(); 
  }, []);
    return (
        <View style={{ flex: 1, backgroundColor: '#0388B4' }}>
            <Header navigation={navigation}/>
            <View style={styles.container}>
                <View style={styles.TitleContainer}>
                    <Text style={styles.text1}>LỊCH SỬ GIAO DỊCH IN ẤN</Text>
                </View>
                <View style={styles.container1}>
                    <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={true}>

                        <FindOrder inputValue={inputValue} setInputValue={setInputValue} />
                        <FindOrder_by_date setstartDate={setstartDate} setendDate={setendDate} startDate={startDate} endDate={endDate} />

                        {Print_detail.map((item, index) => (
                            <View key={index} style={styles.PrintDetail}>
                              
                                <Text style={[styles.text0, styles.Box]}>
                                    Mã giao dịch: <Text style={styles.text001}>{item.Order_id}</Text>
                                </Text>

                              
                                <View style={styles.DetailRow}>

                                    <View style={styles.LeftColumn}>
                                        <Text style={styles.text05}>Tên tài liệu:
                                            <Text style={styles.text051}> {item.Name}</Text>
                                        </Text>
                                        <Text style={styles.text05}>Máy in:
                                            <Text style={styles.text051}>{item.Printer_ID}</Text>
                                        </Text>
                                        <Text style={styles.text05}>Thời gian:
                                            <Text style={styles.text051}>{item.Time}</Text>
                                        </Text>
                                    </View>


                                    <View style={styles.RightColumn}>
                                        <Text style={styles.text05}>Số trang in:
                                            <Text style={styles.text051}>{item.Number_of_pages}</Text>
                                        </Text>
                                        <Text style={styles.text05}>Trạng thái:
                                            <Text style={styles.text051}>{item.Status}</Text>
                                        </Text>
                                        <Text style={styles.text05}>Loại:
                                            <Text style={styles.text051}>{item.Type}</Text>
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}


