import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from '../components/Header';

const Information = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header navigation={navigation}/>
      
      {/* Main Content */}
      <View style={styles.mainContainer}>
        {/* Sub-Header */}
        <View style={styles.subHeader}>
          <Text style={styles.subHeaderText}>
            THÔNG TIN CÁ NHÂN
          </Text>
        </View>

        {/* Card Container */}
        <View style={styles.cardContainer}>
          {/* Avatar */}
          <View style={styles.avatarContainer}>
            <Image 
            source={require('../../assets/images/avatar-4.png')} 
            style={styles.avatar}
            />
          </View>

          {/* Personal Info */}
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Họ tên:</Text>
            <Text style={styles.info}>Trần Minh Hiếu</Text>

            <Text style={styles.label}>MSSV/CB:</Text>
            <Text style={styles.info}>2212004</Text>

            <Text style={styles.label}>Ngày sinh:</Text>
            <Text style={styles.info}>28/09/2004</Text>

            <Text style={styles.label}>Giới tính:</Text>
            <Text style={styles.info}>Nam</Text>

            <Text style={styles.label}>Email:</Text>
            <Text style={styles.info}>hieu.tran.gn@hcmut.edu.vn</Text>

            <Text style={styles.label}>Số điện thoại:</Text>
            <Text style={styles.info}>0986543450</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0388B4',
  },

  subHeader: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  subHeaderText: {
    fontFamily: 'Chakra Petch',
    fontSize: 25,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
    // textShadowColor: '#000000', // Màu viền
    // textShadowOffset: { width: -1, height: 1 }, // Độ dời của bóng
    // textShadowRadius: 1,
  },

  mainContainer: {
    position: 'relative',
    width: 370,
    height: 660,
    marginTop: 20,
    backgroundColor: 'rgba(106, 115, 123, 0.8)',
    borderRadius: 50,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 20,
    paddingBottom: 40,
  },

  cardContainer: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginLeft: 18,
  },

  avatarContainer: {
    alignItems: 'center',
  },

  avatar: {
    width: 140,
    height: 140,
    borderRadius: 100,
    backgroundColor: 'rgba(217, 217, 217, 0.67)',
    marginBottom: 10,
  },

  infoContainer: {
    paddingLeft: 10,
    paddingRight: 10,
  },

  label: {
    fontFamily: 'Chakra Petch',
    fontSize: 20,
    fontWeight: '700',
    color: '#075385',
    marginTop: 5,
  },

  info: {
    fontFamily: 'Chakra Petch',
    fontSize: 20,
    fontWeight: '700',
    color: '#6A737B',
    marginBottom: 5,
  },
});

export default Information;