import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({ navigation }) => {
  const [menuVisible1, setMenuVisible1] = useState(false);
  const [menuVisible2, setMenuVisible2] = useState(false);

  const toggleMenu1 = () => {
    setMenuVisible1(!menuVisible1);
    if (menuVisible2) setMenuVisible2(false); 
  };

  const toggleMenu2 = () => {
    setMenuVisible2(!menuVisible2);
    if (menuVisible1) setMenuVisible1(false);
  };

  const closeMenus = () => {
    setMenuVisible1(false);
    setMenuVisible2(false);
  };

  const handleLogout = () => {
    navigation.navigate('HomeBeforeLogin');
  };

  return (
    <View onPress={closeMenus} style={{flexDirection:"row"}}>
      <View style={styles.header}>
        {/* Home Button */}
        <TouchableOpacity 
          style={styles.spssLogo} 
          onPress={() => navigation.navigate('HomeAfterLogin')}
          accessible={true}
          accessibilityLabel='Go to Home Page'
        >
          <Image 
            source={require('../assets/images/SPSS_logo.png')} 
            style={styles.spssLogo}
          />
        </TouchableOpacity>

        {/* Account Menu Button */}
        <TouchableOpacity 
          onPress={toggleMenu1} 
          style={styles.TTCNbutton}
          accessible={true}
          accessibilityLabel='Toggle Account Menu'
        >
          <Icon name="account-circle" size={30} color="#FFFFFF"/>
        </TouchableOpacity>
    
        {/* Setting Menu Button */}
        <TouchableOpacity 
          onPress={toggleMenu2} 
          style={styles.Settingbutton}
          accessible={true}
          accessibilityLabel='Toggle Settings Menu'
        >
          <Icon name="settings" size={30} color="#FFFFFF"/>
        </TouchableOpacity>
    
        {/* Dropdown Menu-1 */}
        {menuVisible1 && (
          <View style={[styles.menu, styles.menu1]}>
            <TouchableOpacity style={styles.menuItem}
              onPress={() => navigation.navigate('Information')}
            >
              <Text style={styles.menuItemText}>
                Trần Minh Hiếu
              </Text>
            </TouchableOpacity>

            <View style={styles.divider}/>
      
            <TouchableOpacity 
              style={styles.menuItem} 
              onPress={handleLogout}
            >
              <Text style={styles.menuItemText}>
                Đăng xuất
              </Text>
            </TouchableOpacity>
          </View>
        )}
  
        {/* Dropdown Menu-2 */}
        {menuVisible2 && (
          <View style={[styles.menu, styles.menu2]}>
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.replace('Print_History')}>
              <Text style={styles.menuItemText}>
                Lịch sử in ấn
              </Text>
            </TouchableOpacity>

            <View style={styles.divider}/>
      
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuItemText}>
                Mua trang in
              </Text>
            </TouchableOpacity>

            <View style={styles.divider}/>
          
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuItemText}>
                Báo cáo sự cố
              </Text>
            </TouchableOpacity>
          
            <View style={styles.divider} />
          
            <TouchableOpacity style={styles.menuItem}
              onPress={() => navigation.replace('Printing')}
            >
              <Text style={styles.menuItemText}>
                In tài liệu
              </Text>
            </TouchableOpacity>
          </View>
        )}
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
  },

  spssLogo: {
    position: 'absolute',
    width: '40',
    height: '53',
    aspectRatio: 1,
    top: 10,
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

  menu: {
    position: 'absolute',
    top: 80,
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

  menu1: {
    right: 15,
    position: 'absolute',
    zIndex: 1000, // Đảm bảo header luôn nằm trên các phần tử khác
    elevation: 10,
  },

  menu2: {
    left: 15,
    zIndex: 1000, // Đảm bảo header luôn nằm trên các phần tử khác
    elevation: 10,
     position: 'absolute',
  },

  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },

  menuItemText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1D1B20',
  },

  divider: {
    height: 1,
    backgroundColor: '#0388B4',
    marginVertical: 5,
    marginHorizontal: 12,
  },
});

export default Header;