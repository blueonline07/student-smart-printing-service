import React, { useState } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from '../styles/Printerstyle';

const PrintLateScreen = ({ navigation }) => {
    const [selectedBranch, setSelectedBranch] = useState("1");
    const [showDatePicker, setShowDatePicker] = useState({ start: false, end: false });
    const [showTimePicker, setShowTimePicker] = useState({ start: false, end: false });
    const [dates, setDates] = useState({ startDate: new Date(), endDate: new Date() });
    const [time, setTime] = useState({ startDate: new Date(), endDate: new Date() });

    const windowWidth = Math.min(
        Dimensions.get('window').width,
        Dimensions.get('window').height
    );

    const handleDateChange = (type, event, selectedDate) => {
        if (event?.type === 'dismissed') {
            setShowDatePicker((prev) => ({ ...prev, [type]: false }));
            return;
        }
    
        if (selectedDate) {
            setDates((prev) => ({ ...prev, [`${type}Date`]: selectedDate }));
        }

        setShowDatePicker((prev) => ({ ...prev, [type]: false }));
    };
    const handleTimeChange = (type, event, selectedTime) => {
        if (event?.type === 'dismissed') {
            setShowTimePicker((prev) => ({ ...prev, [type]: false }));
            return;
        }
    
        if (selectedTime) {
            setTime((prev) => ({ ...prev, [`${type}Date`]: selectedTime }));
        }

        setShowTimePicker((prev) => ({ ...prev, [type]: false }));
    };

    const formatDateTime = (date) => {
        return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.bounding}>
                <Text style={{ color: "white", fontSize: 22, fontWeight: "bold", textAlign: "center" }}>
                    IN LẤY SAU TẠI QUẦY
                </Text>

                <View style={styles.conttent_print}>
                    <Text style={{ color: "#075385", fontSize: 22, fontWeight: "bold" }}>CHỌN CƠ SỞ</Text>
                    <Image
                        source={require('../../assets/images/printlater.png')}
                        style={{ width: windowWidth * 0.7, height: windowWidth * 0.7 }}
                    />

                    {/* Dropdowns */}
                    <View style={styles.dropdownContainer}>
                        <View style={styles.dropdown}>
                            <Text style={styles.label_printing}>Chọn cơ sở:</Text>
                            <View style={styles.pickercontainer}>
                                <Picker
                                    selectedValue={selectedBranch}
                                    onValueChange={(itemValue) => setSelectedBranch(itemValue)}
                                    style={styles.picker}
                                >
                                    <Picker.Item label="1" value="1" />
                                    <Picker.Item label="2" value="2" />
                                </Picker>
                            </View>
                        </View>

                        <Text style={[styles.label_printing, { width: 'auto', marginLeft: 5 }]}>Thời gian nhận tài liệu:</Text>
                        <View style={[styles.dropdown,{justifyContent:"space-evenly", flexDirection:"row"}]}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Sau:</Text>
                            <TouchableOpacity onPress={() => setShowDatePicker({ ...showDatePicker, start: true })} style={[styles.pickerdatetime, { marginLeft: 5 }]}>
                                <Text style={{padding:10, fontSize:12, fontWeight: 'bold'}}>{dates.startDate.toLocaleDateString("en-GB")}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.dropdown,{justifyContent:"space-evenly", flexDirection:"row"}]}>
                            <TouchableOpacity onPress={() => setShowTimePicker({ ...showTimePicker, start: true })} style={[styles.pickerdatetime, { marginLeft: 5 }]}>
                                <Text style={{padding:10, fontSize: 12, fontWeight: 'bold'}}>{time.startDate.toLocaleTimeString()}</Text>
                            </TouchableOpacity>
                            {showDatePicker.start && (
                                <DateTimePicker
                                    value={dates.startDate}
                                    mode="date"
                                    display="default"
                                    onChange={(event, date) => handleDateChange('start', event, date)}
                                />
                            )}
                            {showTimePicker.start && (
                                <DateTimePicker
                                    value={dates.startDate}
                                    mode="time" 
                                    is24Hour={true} 
                                    display="spinner"
                                    onChange={(event, time) => handleTimeChange('start', event, time)}
                                />
                            )}
                        </View>
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonPrinter} onPress={() => navigation.replace('Printing')}>
                            <Text style={styles.buttonText}>Quay lại</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonPrinter}>
                            <Text style={styles.buttonText}>Tiếp tục</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default PrintLateScreen;
