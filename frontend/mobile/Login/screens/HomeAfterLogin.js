import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import Title from '../components/Title';
import Footer from '../components/Footer';

const HomeAfterLogin = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#0388B4' }}>
      <Header navigation={navigation}/>

      {/* Title */}
      <Title/>
      {/* Main Content */}
      <View style={styles.container}>
        {/* Avatar */}
        <Image 
          source={require('../../assets/images/avatar-3.png')} 
          style={styles.image}
        />

        <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('Printing')}
        >
          <Text style={styles.buttonText}>
            IN TÀI LIỆU
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <View style={styles.TextContainer}>
          <Text style={styles.description}>
            Đây là hệ thống in ấn tài liệu tại Trường Đại học Bách khoa - ĐHQG-HCM được thiết kế để tự động hóa và tối ưu trải nghiệm người dùng. 
            Sinh viên và Giảng viên tải tệp, chọn thông số in, thanh toán, xem lịch sử in qua ứng dụng di động và có số trang in miễn phí mỗi kỳ, có thể mua thêm khi cần. 
            Báo cáo tự động gửi đến Ban quản lý in ấn (SPSO) và Nhân viên in ấn (PS) theo dõi xử lý đơn in, được vận hành trên website.
          </Text>
          <StatusBar style="auto" />
        </View>
      </View>

      {/* Footer */}
      <Footer/>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#20C997',
    borderRadius: 100,
    alignItems: 'center',
    width: 310,
    height: 40,
    justifyContent: 'center',
  },

  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  TextContainer: {
    alignItems: 'center',
    paddingLeft: 25,
    paddingRight: 25,
  },

  description: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
    textAlign: 'justify',
    marginTop: -80,
    marginBottom: 90,
  },

  image: {
    height: 220,
    width: '80%',
    zIndex: 1,
    marginTop: -40,
  },
});

export default HomeAfterLogin;