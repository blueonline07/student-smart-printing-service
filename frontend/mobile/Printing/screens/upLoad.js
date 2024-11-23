import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView , StyleSheet} from 'react-native';
import  styles  from '../styles/Printerstyle';
import { Ionicons } from "@expo/vector-icons";
// import DocumentPicker from "react-native-document-picker";

const UpLoadScreen = ({ navigation }) => {

  const handleUpload = () => {
    // Logic for file upload
    console.log("Upload logic triggered");
  };
  const pickFile = async () => {
    // try {
    //   const result = await DocumentPicker.pickSingle({
    //     type: [DocumentPicker.types.allFiles], // Chọn tất cả loại file
    //   });

    //   // Lưu thông tin file được chọn
    //   setFileName(result.name);
    //   console.log("File selected:", result);
    // } catch (err) {
    //   if (DocumentPicker.isCancel(err)) {
    //     console.log("User canceled file picker");
    //   } else {
    //     console.error("File picker error:", err);
    //   }
    // }
  };


  const renderFileItem = ({ item }) => {
    return (
      <View style={[styles.fileItem, item.progress === 100 ? styles.fileCompleted : styles.fileUploading]}>
        <Text style={styles.fileName}>{item.name}</Text>
        <Text style={styles.fileProgress}>{item.progress}%</Text>
        <Text style={styles.fileStatus}>{item.status}</Text>
      </View>
    );
  };
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
                        <TouchableOpacity style={styles.uploadButton} onPress={pickFile}>
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

// const styles = StyleSheet.create({
//     uploadBox: {
//         width: "90%",
//         height: 150,
//         borderWidth: 1,
//         borderColor: "#ccc",
//         borderRadius: 10,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#fff",
//       },
//       uploadText: {
//         color: "#888",
//         marginVertical: 5,
//       },
// });