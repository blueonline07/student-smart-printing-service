
import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView , StyleSheet} from 'react-native';
import  styles  from '../styles/Printerstyle';
import { Ionicons } from "@expo/vector-icons";
import DocumentPicker from 'react-native-document-picker';


const UpLoadScreen = ({ navigation }) => {
  const selectDoc = async () => {
    try {
      const doc = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles], // Tùy chọn loại file
      });
      console.log('Document selected:', doc);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the picker');
      } else {
        console.error('Unknown error:', err);
      }
    }
  };


  // const renderFileItem = ({ item }) => {
  //   return (
  //     <View style={[styles.fileItem, item.progress === 100 ? styles.fileCompleted : styles.fileUploading]}>
  //       <Text style={styles.fileName}>{item.name}</Text>
  //       <Text style={styles.fileProgress}>{item.progress}%</Text>
  //       <Text style={styles.fileStatus}>{item.status}</Text>
  //     </View>
  //   );
  // };
    return(
        <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={[styles.bounding]}>
                <Text style={{ color: "white", fontSize: 22, fontWeight: "bold", textAlign: "center" }}>
                    TẢI TÀI LIỆU LÊN
                </Text>
                
                <View style={[styles.conttent_print,{minHeight:"400"}]}>
                    <View style={styles.uploadBox}>
                        <Ionicons name="cloud-upload-outline" size={40} color="#ccc" />
                        <Text style={styles.uploadText}>Drag and drop the file</Text>
                        <Text style={styles.uploadText}>- OR -</Text>
                        <TouchableOpacity style={styles.uploadButton} onPress={selectDoc}>
                            <Text style={styles.uploadButtonText}>UPLOAD</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.dropdownContainer}>
                        <View style={styles.dropdown}>
                            <Text style={[styles.label_printing,{width:"100%"}]}>Tài liệu đã được đẩy lên</Text>
                            
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default UpLoadScreen;

