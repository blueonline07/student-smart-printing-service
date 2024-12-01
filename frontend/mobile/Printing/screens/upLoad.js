import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView,Platform } from 'react-native';
import styles from '../styles/Printerstyle';
import styless from '../styles/uploadstyle';
import { Ionicons } from "@expo/vector-icons";
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { clearfile } from '../api/configfile';
import Header from '../../component/header';
import Footer from '../../component/Footer';

const UpLoadScreen = ({ route, navigation }) => {
  const [uploadedFiles, setUploadedFile] = useState([]);
  const [filepath, setFilepath] = useState([]);
  useEffect(() => {
    clearfile();
    console.log("File cache đã được xóa");
  }, []);
  const selectDoc = async () => {
    try {
      const doc = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf, DocumentPicker.types.doc], // Tùy chọn loại file
      });
      console.log('Document selected:', doc);
      console.log('Document name:', doc[0].name);
      

      const fileName = 'document_' + new Date().getTime() + '.pdf';
      const destPath = Platform.select({
        ios: `${RNFS.DocumentDirectoryPath}/${fileName}`,
        android: `${RNFS.ExternalDirectoryPath}/${fileName}`
      });

      await RNFS.copyFile(doc[0].uri, destPath);

      const exists = await RNFS.exists(destPath);
      console.log('File exists:', exists);
      console.log('File path:', destPath);

      const newFile = {
        name: doc[0].name,
        size: (doc[0].size / 1024).toFixed(2),
        uri: `file://${destPath}`,
      };
      setUploadedFile((prevFiles) => [...prevFiles, newFile]);
      const source = { name:doc[0].name,uri: `file://${destPath}` };
      setFilepath(prev => [...prev, source]);
      console.log(filepath);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the picker');
      } else {
        console.error('Unknown error:', err);
      }
    }
  };
  const deleteFile = (fileName) => {
    setUploadedFile((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
      <Header navigation={navigation}/>
      <View style={[styles.bounding,{minHeight:600,marginTop:40,marginBottom:30}]}>
        <Text style={{ color: "white", fontSize: 22, fontWeight: "bold", textAlign: "center" }}>
          TẢI TÀI LIỆU LÊN
        </Text>
        
        <View style={[styles.conttent_print, { minHeight: "550" ,flex: 1, 
        justifyContent: 'space-between'}]}>
          <View style={styles.uploadBox}>
            <Ionicons name="cloud-upload-outline" size={40} color="#ccc" />
            <Text style={styles.uploadText}>Drag and drop the file</Text>
            <Text style={styles.uploadText}>- OR -</Text>
            <TouchableOpacity style={styles.uploadButton} onPress={selectDoc}>
              <Text style={styles.uploadButtonText}>UPLOAD</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.dropdownContainer}>
            <View style={styles.dropdown}>
              <Text style={[styles.label_printing, { width: "100%" }]}>
                Tài liệu đã được đẩy lên:
              </Text>
              
            </View>
            {uploadedFiles && uploadedFiles.length > 0 ? (
            uploadedFiles.map((file, index) => (
              <View style={styless.fileInfo}>
                {/* Icon */}
                <Icon
                  name={'file-pdf-box' }
                  size={30}
                  color={'#FF6F61' }
                  style={styles.fileIcon}
                />
                <Text key={index} style={{fontSize: 16,
                  color: '#333',
                  marginVertical: 5,width:"80%"}}>
                  {file.name} ({(file.size / 1024).toFixed(2)} MB)
                </Text>
                <TouchableOpacity onPress={() => deleteFile(file.name)} style={styles.deleteButton}>
                  <Icon name="delete" size={25} color="#E74C3C" />
                </TouchableOpacity>
              </View>
            ))
          ) : (
            <Text style={{fontSize: 16,color: '#999',textAlign: 'center',marginTop: 20,}}>Chưa có tài liệu nào được tải lên</Text>
          )}
          </View>
          
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonPrinter} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText} >Quay lại</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonPrinter} onPress={() => {uploadedFiles.length>0?navigation.navigate('Configfile',{file: uploadedFiles}):console.log("Hãy chọn file")}}>
            <Text style={styles.buttonText} >Tiếp tục</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}

export default UpLoadScreen;
