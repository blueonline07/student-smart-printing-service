import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeBeforeLogin = ({navigation}) => {
  const [showText, setShowText] = useState(false);
  const handlemoreButtonPress = () => {
    setShowText(!showText);
  };

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/SPSS_logo.png')} style={styles.spssLogo} />
      </View>

      {/* Title Section */}
      <Text style={styles.systemTitle}>HỆ THỐNG IN ẤN THÔNG MINH</Text>
      <Text style={styles.subTitle}>HCMUT_SSPS</Text>
      <Text style={styles.description}>Đây là hệ thống in ấn tài liệu tại Trường Đại học Bách khoa - ĐHQG-HCM được thiết kế để tự động hóa và tối ưu trải nghiệm người dùng.</Text>
      <Image source={require('../assets/avatar-1.png')} style={styles.avatar} />

      {/* Buttons */}
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('HomeLogin')}>
        <Text style={styles.loginText}>Đăng nhập</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.moreButton} onPress={handlemoreButtonPress}>
        <Text style={styles.moreText}>{showText ? 'Rút gọn' : 'Tìm hiểu thêm'}</Text>
      </TouchableOpacity>

      {/* Find more Text*/}
      {showText && (
        <Text style={styles.dynamicText}>
          Sinh viên và cán bộ tải tệp, chọn thông số in, thanh toán, và xem lịch sử in qua ứng dụng di động. Sinh viên có số trang in A4 miễn phí mỗi kỳ, có thể mua thêm khi cần. Báo cáo tự động gửi Ban quản lý in ấn (SPSO) và Nhân viên hỗ trợ theo dõi đơn in được vận hành trên website.
        </Text>
      )}

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footerInfo}>
          <Text style={styles.footerTitle}>Ban quản lý in ấn thông minh / SPSO</Text>
          
          <View style={styles.footerItem}>
            <Icon name="mail" size={30} color="#FFFFFF" style={styles.footerIcon} />
            <Text style={styles.footerItemText}>Email : spso@hcmut.edu.vn</Text>
          </View>

          <View style={styles.footerItem}>
            <Icon name="phone" size={30} color="#FFFFFF" style={styles.footerIcon} />
            <Text style={styles.footerItemText}>ĐT (Tel.) : (84-8) 38647256 - 5258</Text>
          </View>

          <View style={styles.footerItem}>
            <Text style={styles.footerAddress}>Vui lòng liên hệ văn phòng SPSO, phòng 109A5 để được hỗ trợ.</Text>
          </View>
        </View>
        <Image source={require('../assets/SPSS_logo.png')} style={styles.footerSPSSLogo} />
        <Image source={require('../assets/01_logobachkhoatoi.png')} style={styles.footerBKLogo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#0388B4',
  },

  header: {
    backgroundColor: '#00C0EF',
    height: 80,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  spssLogo: {
    position: 'absolute',
    width: 40.83,
    height: 54.23,
    top: 13,
  },

  systemTitle: {
    fontFamily: 'Chakra Petch',
    fontSize: 25,
    fontWeight: '700',
    color: '#D9D9D9',
    textAlign: 'center',
    marginTop: 45,
    marginHorizontal: 20,
  },

  subTitle: {
    fontFamily: 'Chakra Petch',
    fontSize: 40,
    fontWeight: '700',
    color: '#D9D9D9',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
    marginTop: 15,
  },

  description: {
    position: 'absolute',
    left: 30,
    top: 268,
    width: 163,
    height: 147,
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
    marginLeft: 170,
    marginTop: 250,
  },

  loginButton: {
    backgroundColor: 'rgba(32, 201, 151, 0.4)',
    borderRadius: 100,
    height: 40,
    width: 325,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 320,
  },

  loginText: {
    fontFamily: 'Chakra Petch',
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  moreButton: {
    backgroundColor: 'rgba(32, 201, 151, 0.4)',
    borderRadius: 100,
    height: 40,
    width: 325,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },

  moreText: {
    fontFamily: 'Chakra Petch',
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  dynamicText: {
    fontFamily: 'Chakra Petch',
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 10,
  },

  footer: {
    backgroundColor: '#6A737B',
    height: 100,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    padding: 10,
  },

  footerInfo: {
    paddingHorizontal: 20,
  },

  footerTitle: {
    fontFamily: 'Chakra Petch',
    fontSize: 10,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },

  footerIcon: {
    marginRight: 10,
    fontSize: 20,
  },

  footerItemText: {
    fontFamily: 'Chakra Petch',
    fontSize: 10,
    fontWeight: '400',
    color: '#FFFFFF',
  },

  footerAddress: {
    fontFamily: 'Chakra Petch',
    fontSize: 10,
    fontStyle: 'italic',
    fontWeight: '400',
    color: '#FFFFFF',
    marginTop: 2,
  },

  footerSPSSLogo: {
    position: 'absolute',
    width: 40.83,
    height: 54.23,
    top: 15,
    left: 330,
  },

  footerBKLogo: {
    position: 'absolute',
    width: 100,
    height: 56.91,
    left: 230,
    top: 15,
  },
});

export default HomeBeforeLogin;