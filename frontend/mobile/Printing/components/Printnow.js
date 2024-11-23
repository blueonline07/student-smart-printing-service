import React, { useState } from 'react';
import {ScrollView, View, Text, Image, TouchableOpacity ,Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles/Printerstyle';
import UpLoadScreen from '../screens/upLoad';
const PrintNowScreen = ({  navigation }) => {
    const [selectedBranch, setSelectedBranch] = useState("1");
    const [selectedBuilding, setSelectedBuilding] = useState("H6");
    const [selectedPrinter, setSelectedPrinter] = useState("106A4P1");
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    if (windowWidth > windowHeight) {
        windowWidth = windowHeight}

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* Content */}
            <View style={styles.bounding}>
                <Text style={{ color: "white", fontSize: 22, fontWeight: "bold", textAlign: "center" }}>
                    IN TỰ ĐỘNG LẤY LIỀN
                </Text>
                <View style={styles.conttent_print}>
                    <Text style={{color: "#075385", fontSize: 22 ,fontWeight: "bold"}}>CHỌN MÁY IN</Text>
                    <Image source={require('../../assets/images/printer.png')} 
                    style={{width: windowWidth * 0.7, 
                        height: (windowWidth * 0.7) }} />
                    {/* Dropdowns */}
                    <View style={styles.dropdownContainer}>
                        <View style={styles.dropdown}>
                            <Text style={styles.label_printing}>Chọn cơ sở:</Text>
                            <View style={styles.pickercontainer}>
                                <Picker
                                    selectedValue={selectedBranch}
                                    onValueChange={(itemValue, itemIndex) => setSelectedBranch(itemValue)}
                                    style={styles.picker}
                                >
                                    <Picker.Item label="1" value="1" />
                                    <Picker.Item label="2" value="2" />
                                </Picker>
                            </View>
                            
                        </View>

                        <View style={styles.dropdown}>
                            <Text style={styles.label_printing}>Chọn tòa:</Text>
                            <View style={styles.pickercontainer}>
                                <Picker
                                    selectedValue={selectedBuilding}
                                    onValueChange={(itemValue, itemIndex) => setSelectedBuilding(itemValue)}
                                    style={styles.picker}
                                >
                                    <Picker.Item label="H6" value="H6" />
                                    <Picker.Item label="H2" value="H2" />
                                </Picker>
                            </View>
                        </View>

                        <View style={styles.dropdown}>
                            <Text style={styles.label_printing}>Chọn máy in:</Text>
                            <View style={styles.pickercontainer}>
                                <Picker
                                    selectedValue={selectedPrinter}
                                    onValueChange={(itemValue, itemIndex) => setSelectedPrinter(itemValue)}
                                    style={styles.picker}
                                >
                                    <Picker.Item label="1" value="1" />
                                    <Picker.Item label="2" value="2" />
                                </Picker>
                            </View>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonPrinter} onPress={() => navigation.replace('Printing')}>
                        <Text style={styles.buttonText} >Quay lại</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonPrinter} onPress={() => navigation.navigate('UpLoadDoc')}>
                        <Text style={styles.buttonText} >Tiếp tục</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default PrintNowScreen;
