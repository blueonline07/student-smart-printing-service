import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView , TextInput, StyleSheet,TouchableOpacity, Alert } from 'react-native';
import styles from '../styles/Printerstyle';
import PDfExample from '../components/pdf';
import { Picker } from '@react-native-picker/picker';
import { addFileData ,getFileData, clearfile } from '../api/configfile';
import Header from '../../component/header';
import Footer from '../../component/Footer';

const ConfigfileScreen = ({ route, navigation }) => {
    const [files, setFiles] = useState(route.params.file || []);
    const [currentFile, setCurrentFile] = useState(null);
    const [inputValue, setInputValue] = useState("");
    const [Istwopage, settwopage] = useState("1");
    const [Size, setSize] = useState("A4");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    useEffect(() => {
        if (files.length > 0) {
            const file = files[0];
            setCurrentFile(file);
            setFiles(prevFiles => prevFiles.slice(1));
            console.log('Removing file:', file.name);
        } else {
            console.log('No files to process');
        }
    }, []); 

    const saveConfigfile = () => {
        if (!from || !to || !inputValue) {
            Alert.alert("Lỗi", "Vui lòng nhập đầy đủ thông tin.");
            return;
        }

        const data = { 
            "from_page": from,
            "to_page": to,
            "two_side": Istwopage === "1" ? false : true,
            "colored": false,
            "quanlity": inputValue,
            "page_size": Size,
            "file_name": currentFile.name,
            "file_path": currentFile.uri,
        };

        console.log(data);
        addFileData(data);
        console.log(getFileData());

        if (files.length > 0) {
            navigation.replace('Configfile', { file: files });
        }
        else {
            navigation.replace('Confirm');
        }
    };
    const goBack = () => {
        clearfile();
        navigation.goBack();
    }
    return (
        <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
            <Header navigation={navigation}/>
            <View style={[styles.bounding,{height:"auto", marginTop:40,marginBottom:30}]}>
                <Text style={{ color: "white", fontSize: 22, fontWeight: "bold", textAlign: "center" }}>
                    TÙY CHỈNH THÔNG SỐ
                </Text>
                <View style={styles.conttent_print}>
                    <Text style={{ color: "#075385", fontSize: 22, fontWeight: "bold" }}>
                        {currentFile ? currentFile.name : 'No File'}
                    </Text>
                    {currentFile && <PDfExample source={{ source: currentFile.uri }} />}
                    <View style={styles.dropdownContainer}>
                        <View style={[styles.dropdown,{justifyContent:"flex-start"}]}>
                            <Text style={[styles.label_printing]}>Số bản:</Text>
                            <TextInput
                                value={inputValue}
                                onChangeText={setInputValue}
                                style={localStyles.textInput}
                                placeholder="Nhập số bản"
                                keyboardType="numeric"
                            />
                            
                        </View>
                        <View style={styles.dropdown}>
                            <Text style={[styles.label_printing]}>Số mặt</Text>
                            <View style={[styles.pickercontainer,{width:"30%"}]}>
                                <Picker
                                    selectedValue={Istwopage}
                                    onValueChange={(itemValue) => settwopage(itemValue)}
                                    style={styles.picker}
                                >
                                    <Picker.Item label="1" value="1" />
                                    <Picker.Item label="2" value="2" />
                                </Picker>
                            </View>
                        </View>
                        <View style={styles.dropdown}>
                            <Text style={[styles.label_printing]}>Kích cỡ</Text>
                            <View style={[styles.pickercontainer,{width:"30%"}]}>
                                <Picker
                                    selectedValue={Size}
                                    onValueChange={(itemValue) => setSize(itemValue)}
                                    style={styles.picker}
                                >
                                    <Picker.Item label="A4" value="A4" />
                                    <Picker.Item label="A3" value="A3" />
                                </Picker>
                            </View>
                        </View>
                        <View style={[styles.dropdown,{justifyContent:"flex-start"}]}>
                            <Text style={[styles.label_printing,{width:"auto"}]}>Từ:</Text>
                            <TextInput
                                value={from}
                                onChangeText={setFrom}
                                style={[localStyles.textInput,{width:"30%"}]}
                                keyboardType="numeric"
                            />
                            <Text style={[styles.label_printing,{width:"auto",marginLeft:20}]}>Đến:</Text>
                            <TextInput
                                value={to}
                                onChangeText={setTo}
                                style={[localStyles.textInput,{width:"30%"}]}
                                keyboardType="numeric"
                            />
                        </View>
                    </View>
                    <View style={[styles.buttonContainer,{marginTop:20}]}>
                        <TouchableOpacity style={styles.buttonPrinter} onPress={goBack}>
                        <Text style={styles.buttonText} >Quay lại</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonPrinter} onPress={saveConfigfile}>
                        <Text style={styles.buttonText} >Tiếp tục</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Footer/>
        </ScrollView>
    );
};

export default ConfigfileScreen;
const localStyles = StyleSheet.create({
    textInput: {
        height: 40,
        textAlign: 'center',
        width: 150,
        borderColor: '#075385',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 5,
        marginTop: 8,
        fontSize: 16,
    },
});