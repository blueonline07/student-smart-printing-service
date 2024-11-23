import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

const HomeLogin = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [isVariant1, setIsVariant1] = useState(false);
    const toggleVariant1 = () => {
      setIsVariant1(!isVariant1);
    };

    const [isVariant2, setIsVariant2] = useState(false);
    const toggleVariant2 = () => {
      setIsVariant2(!isVariant2);
    };
    
    return (
        <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        {/* Home Button */}
        <TouchableOpacity style={styles.spssLogo} onPress={() => navigation.navigate('HomeBeforeLogin')}>
          <Image source={require('./assets/SPSS_logo.png')} style={styles.spssLogo}/>
        </TouchableOpacity>
      </View>
      
      {/* Title Section */}
      <Text style={styles.systemTitle}>HỆ THỐNG IN ẤN THÔNG MINH</Text>
      <Text style={styles.subTitle}>HCMUT_SSPS</Text>
      <Image source={require('./assets/avatar-1.png')} style={styles.avatar} />
      <Text style={styles.featTitle}>ĐĂNG NHẬP TÀI KHOẢN</Text>

      {/* Username Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Tên đăng nhập:</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Nhập tên đăng nhập"
          placeholderTextColor="#6A737B"
          value={username}
          onChangeText={setUsername}
        />

      {/* Password Input */}
        <Text style={styles.inputLabel}>Mật khẩu:</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Nhập mật khẩu"
          placeholderTextColor="#6A737B"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      {/* Hide Button*/}
      {/* <View style={styles.hideContainer}>
        <TouchableOpacity style={[styles.hideButton, isVariant1 && styles.variant2]} onPress={toggleVariant1}>
        <Image source={require('./assets/Ellipse30.png')} style={styles.ellipse30} />
          <View source={require('./assets/Ellipse31.png')} style={[styles.ellipse31, isVariant1 && styles.ellipse31Variant2]} />
        </TouchableOpacity>
        <Text style={styles.hideText}>Ẩn</Text>
      </View> */}

      {/* Remember Login Button*/}
      {/* <View style={styles.rememberContainer}>
        <TouchableOpacity style={[styles.rememberButton, isVariant2 && styles.variant2]} onPress={toggleVariant2}>
        <Image source={require('./assets/Ellipse30.png')} style={styles.ellipse30} />
          <View source={require('./assets/Ellipse31.png')} style={[styles.ellipse31, isVariant2 && styles.ellipse31Variant2]} />
        </TouchableOpacity>
        <Text style={styles.rememberTextText}>Ghi nhớ đăng nhập</Text>
      </View> */}
      
      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('HomeAfterLogin')}>
        <Text style={styles.loginText}>Đăng nhập</Text>
      </TouchableOpacity>

      {/* Footer Information */}
      <Text style={styles.footerText}>Your account is authenticated by HCMUT_SSO.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#0388B4',
    position: 'relative',
    width: 412,
    height: 917,
  },

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

  avatar: {
    position: 'absolute',
    width: 206,
    height: 198,
    marginLeft: 100,
    marginTop: 215,
  },

  featTitle: {
    fontFamily: 'Chakra Petch',
    fontSize: 30,
    fontStyle: 'italic',
    fontWeight: '700',
    color: '#D9D9D9',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
    marginTop: 190,
  },

  inputContainer: {
    width: '80%',
    marginVertical: 50,
    alignSelf: 'center',
    marginTop: 5,
    backgroundColor:'#6A737B',
    borderRadius: 30,
    height: 330,
    weight: 350,
  },

  inputLabel: {
    //position: 'absolute',
    //width: 146,
    //height: 33,
    //left: 72,
    //top: 500,
    marginBottom: 20,
    fontFamily: 'Chakra Petch',
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    marginLeft: 25,
    marginTop: 20,
  },

  inputField: {
    //position: 'absolute',
    width: '90%',
    height: 40,
    marginLeft: 18,
    //left: 51,
    //top: 650,
    backgroundColor: 'rgba(0, 192, 239, 0.5)',
    borderRadius: 100,
    color: '#FFFFFF',
    paddingHorizontal: 30,
    fontFamily: 'Chakra Petch',
    fontSize: 18,
  },

  /*hideContainer: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 20,
  },

  hideButton: {
    width: 71,
    height: 138,
    borderWidth: 1,
    borderColor: '#9747FF',
    borderStyle: 'dashed',
    borderRadius: 5,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  
  hideText: {
    fontFamily: 'Chakra Petch',
    fontSize: 15,
    fontWeight: '400',
    color: '#FCFBFF',
    textAlign: 'center',
  },

  rememberContainer: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 20,
  },

  rememberButton: {
    width: 71,
    height: 138,
    borderWidth: 1,
    borderColor: '#9747FF',
    borderStyle: 'dashed',
    borderRadius: 5,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  
  rememberText: {
    fontFamily: 'Chakra Petch',
    fontSize: 15,
    fontWeight: '400',
    color: '#FCFBFF',
    textAlign: 'center',
  },

  variant2: {
    backgroundColor: '#6A737B', 
  },

  ellipse30: {
    position: 'absolute',
    left: 0,
    right: '77.05%',
    top: 0,
    bottom: '62.16%',
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#6A737B',
    borderRadius: 50,
  },

  ellipse31: {
    position: 'absolute',
    left: '6.69%',
    right: '83.74%',
    top: '11.04%',
    bottom: '73.2%',
    backgroundColor: '#FFFFFF',
    opacity: 0.8,
    borderRadius: 50,
  },

  ellipse31Variant2: {
    backgroundColor: '#6A737B', 
    opacity: 0.8,
  },
  */

  loginButton: {
    position: 'absolute',
    width: 265,
    height: 40,
    left: 75,
    top: 700,
    backgroundColor: 'linear-gradient(180deg, rgba(32, 201, 151, 0.4) 0%, rgba(0, 192, 239, 0.4) 100%)',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginText: {
    fontFamily: 'Chakra Petch',
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  footerText: {
    position: 'absolute',
    width: 212,
    left: '25%',
    top: 760,
    fontFamily: 'Chakra Petch',
    fontSize: 10,
    fontWeight: '400',
    color: '#FCFBFF',
    textAlign: 'center',
  },

  homeButton: {
    position: 'absolute',
    width: 48,
    height: 48,
    left: 28,
    top: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeLogin;