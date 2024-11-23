import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import Icon library

const HomeAfterLogin = ({ navigation }) => {
  const [menuVisible1, setMenuVisible1] = useState(false);
  const toggleMenu1 = () => {
    setMenuVisible1(!menuVisible1);
  };

  const [menuVisible2, setMenuVisible2] = useState(false);
  const toggleMenu2 = () => {
    setMenuVisible2(!menuVisible2);
  };

  const handleLogout = () => {
    navigation.navigate('HomeBeforeLogin');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#0388B4' }}>
      {/* Header */}
      <View style={styles.header}>
        {/* Home Button */}
        <TouchableOpacity style={styles.spssLogo} onPress={() => navigation.navigate('HomeAfterLogin')}>
          <Image source={require('../assets/SPSS_logo.png')} style={styles.spssLogo} />
        </TouchableOpacity>
        {/* Account Menu Button */}
        <TouchableOpacity onPress={toggleMenu1} style={styles.TTCNbutton}>
          <Icon name="account-circle" size={30} color="#FFFFFF" />
        </TouchableOpacity>
        {/* Setting Menu Button */}
        <TouchableOpacity onPress={toggleMenu2} style={styles.Settingbutton}>
          <Icon name="settings" size={30} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.container}>
        {/* Dropdown Menu-1 */}
        {menuVisible1 && (
          <View style={styles.menu1}>
            <TouchableOpacity style={styles.menuItem1}>
              <Text style={styles.menuItemText1}>Họ tên</Text>
            </TouchableOpacity>
            <View style={styles.divider1} />
            <TouchableOpacity style={styles.menuItem1} onPress={handleLogout}>
              <Text style={styles.menuItemText1}>Đăng xuất</Text>
            </TouchableOpacity>
          </View>
        )}
        
        {/* Dropdown Menu-2 */}
        {menuVisible2 && (
          <View style={styles.menu2}>
            <TouchableOpacity style={styles.menuItem2}>
              <Text style={styles.menuItemText2}>Lịch sử in ấn</Text>
            </TouchableOpacity>
            <View style={styles.divider2} />
            <TouchableOpacity style={styles.menuItem2}>
              <Text style={styles.menuItemText2}>Mua trang in</Text>
            </TouchableOpacity>
            <View style={styles.divider2} />
            <TouchableOpacity style={styles.menuItem2}>
              <Text style={styles.menuItemText2}>Báo cáo sự cố</Text>
            </TouchableOpacity>
            <View style={styles.divider2} />
            <TouchableOpacity style={styles.menuItem2}>
              <Text style={styles.menuItemText2}>In tài liệu</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Avatar */}
        <Image source={require('../assets/avatar-3.png')} style={styles.image} />
      </View>

      <View style={styles.TitleContainer}>
        <Text style={styles.text1}>HỆ THỐNG IN ẤN THÔNG MINH</Text>
        <Text style={styles.text2}>HCMUT_SSPS</Text>
      </View>

      <View style={styles.TitleContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>IN TÀI LIỆU</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <View style={styles.TextContainer}>
          <Text style={styles.text0}>
            Đây là hệ thống in ấn tài liệu tại Trường Đại học Bách khoa - ĐHQG-HCM được thiết kế để tự động hóa và tối ưu trải nghiệm người dùng. 
            Sinh viên và Giảng viên tải tệp, chọn thông số in, thanh toán, xem lịch sử in qua ứng dụng di động và có số trang in miễn phí mỗi kỳ, có thể mua thêm khi cần. 
            Báo cáo tự động gửi đến Ban quản lý in ấn (SPSO) và Nhân viên in ấn (PS) theo dõi xử lý đơn in, được vận hành trên website.
          </Text>
          <StatusBar style="auto" />
        </View>
      </View>

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
  header: {
    backgroundColor: '#00C0EF',
    height: 80,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    fontSize: 20,
  },

  spssLogo: {
    position: 'absolute',
    width: 40.83,
    height: 54.23,
    top: 6,
  },

  TTCNbutton: {
    position: 'absolute',
    right: 25,
    top: 15,
    backgroundColor: '#0388B4',
    padding: 10,
    borderRadius: 50,
  },

  Settingbutton: {
    position: 'absolute',
    left: 25,
    top: 15,
    backgroundColor: '#0388B4',
    padding: 10,
    borderRadius: 50,
  },

  menu1: {
    marginTop: 0,
    marginLeft: 225,
    width: 166,
    backgroundColor: '#00C0EF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#00C0EF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 2,
  },

  menuItem1: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },

  menuItemText1: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1D1B20',
  },

  divider1: {
    height: 1,
    backgroundColor: '#0388B4',
    marginHorizontal: 12,
  },

  menu2: {
    marginTop: 72,
    right: 112,
    width: 166,
    backgroundColor: '#00C0EF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#00C0EF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 2,
  },

  menuItem2: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },

  menuItemText2: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1D1B20',
  },

  divider2: {
    height: 1,
    backgroundColor: '#0388B4',
    marginHorizontal: 12,
  },

  button: {
    marginTop: 10,
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

  TitleContainer: {
    alignItems: 'center',
    marginBottom: 5,
  },

  TextContainer: {
    alignItems: 'center',
    padding: 25,
    marginBottom: 40,
  },

  text0: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
    textAlign: 'justify',
    marginBottom: 40,
  },
  text1: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
  text2: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },

  image: {
    height: 220,
    marginTop: 0,
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
    fontSize: 10,
    fontWeight: '400',
    color: '#FFFFFF',
  },
  footerAddress: {
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

export default HomeAfterLogin;