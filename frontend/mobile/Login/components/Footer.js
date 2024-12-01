import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Footer = () => {
    return (
      <View style={styles.footer}>
        <View style={styles.footerInfo}>
          <Text style={styles.footerTitle}>
            Ban quản lý in ấn thông minh / SPSO
          </Text>
  
          <View style={styles.footerItem}>
            <Icon name="mail" size={20} color="#FFFFFF" style={styles.footerIcon} />
            <Text style={styles.footerItemText}>
              Email : spso@hcmut.edu.vn
            </Text>
          </View>

          <View style={styles.footerItem}>
            <Icon name="phone" size={20} color="#FFFFFF" style={styles.footerIcon} />
            <Text style={styles.footerItemText}>
              ĐT (Tel.) : (84-8) 38647256 - 5258
            </Text>
          </View>

          <View style={styles.footerAddressContainer}>
            <Text style={styles.footerAddress}>
              Vui lòng liên hệ văn phòng SPSO, phòng 109A5 để được hỗ trợ.
            </Text>
          </View>
        </View>

        <View style={styles.logoContainer}>
          <Image 
            source={require('../../assets/images/SPSS_logo.png')} 
            style={styles.footerSPSSLogo}
          />

          <Image 
            source={require('../../assets/images/01_logobachkhoatoi.png')} 
            style={styles.footerBKLogo}
          />
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#6A737B',
    width: '100%',
    padding: 15,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  footerInfo: {
    flex: 1,
  },

  footerTitle: {
    fontFamily: 'Chakra Petch',
    fontSize: 12,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 5,
  },

  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },

  footerIcon: {
    marginRight: 8,
  },

  footerItemText: {
    fontFamily: 'Chakra Petch',
    fontSize: 12,
    fontWeight: '400',
    color: '#FFFFFF',
  },

  // New container to ensure footerAddress stays on one line
  footerAddressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'nowrap', // Prevent wrapping of text
  },

  footerAddress: {
    fontFamily: 'Chakra Petch',
    fontSize: 12,
    fontStyle: 'italic',
    fontWeight: '400',
    color: '#FFFFFF',
    marginTop: 5,
    flexWrap: 'nowrap',  // Ensures text stays on a single line
    maxWidth: '90%', // Optional: To ensure it doesn't overflow
  },

  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  footerSPSSLogo: {
    position: 'absolute',
    width: 40,
    resizeMode: 'contain',
  },

  footerBKLogo: {
    width: 120,
    height: 60,
    resizeMode: 'contain',
    marginLeft: 10,
  },
});

export default Footer;