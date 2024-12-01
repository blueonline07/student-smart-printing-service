import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import HeaderBeforeLogin from '../components/HeaderBeforeLogin';
import Title from '../components/Title';
import Footer from '../components/Footer';
import { ScrollView } from 'react-native-gesture-handler';

const HomeBeforeLogin = ({ navigation }) => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
      <View style={styles.container}>

      {/* Header - HomeBeforeLogin*/}
      <HeaderBeforeLogin navigation={navigation}/>

      {/* Title Section */}
      <Title/>
      <Text style={styles.description}>
        Đây là hệ thống in ấn tài liệu tại Trường Đại học Bách khoa - ĐHQG-HCM được thiết kế để tự động hóa và tối ưu trải nghiệm người dùng. Sinh viên và Giảng viên tải tệp, chọn thông số in, thanh toán, xem lịch sử in qua ứng dụng di động và có số trang in miễn phí mỗi kỳ, có thể mua thêm khi cần. Báo cáo tự động gửi đến Ban quản lý in ấn (SPSO) và Nhân viên in ấn (PS) theo dõi xử lý đơn in, được vận hành trên website.
      </Text>
      
      <Image 
        source={require('../../assets/images/avatar-1.png')} 
        style={styles.avatar} 
      />

      {/* Buttons */}
      <TouchableOpacity 
        style={styles.loginButton} 
        onPress={() => navigation.navigate('HomeLogin')}
      >
        <Text style={styles.loginText}>
          Đăng nhập
        </Text>
      </TouchableOpacity>

      {/* Footer */}
      <Footer/>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0388B4',
    width: '100%',
  },

  description: {
    position: 'absolute',
    left: 30,
    top: 415,
    width: 340,
    textAlign: 'justify',
    height: 'auto',
    fontFamily: 'Chakra Petch', 
    fontSize: 16,
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: 21,
    color: '#FFFFFF',
  },

  avatar: {
    position: 'absolute',
    width: 206,
    height: 198,
    marginLeft: 100,
    marginTop: 210,
  },

  loginButton: {
    backgroundColor: 'rgba(32, 201, 151, 0.4)',
    borderRadius: 100,
    height: 40,
    width: 325,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 175,
  },

  loginText: {
    fontFamily: 'Chakra Petch',
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});

export default HomeBeforeLogin;