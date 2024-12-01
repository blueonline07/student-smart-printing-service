import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

const HeaderBeforeLogin = ({ navigation }) => {
    return (
        <View style={styles.headerHBL}>
            {/* Home Button */}
            <TouchableOpacity 
                style={styles.spssLogoHBL} 
                onPress={() => navigation.navigate('HomeBeforeLogin')}
                accessible={true}
                accessibilityLabel='Navigate to the Home page'
            >
                <Image 
                    source={require('../../assets/images/SPSS_logo.png')} 
                    style={styles.spssLogoHBL}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    headerHBL: {
        backgroundColor: '#00C0EF',
        height: 80,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    
    spssLogoHBL: {
        width: 40.83,
        height: 54.23,
    },

    // homeButton: {
    //     position: 'absolute',
    //     width: 48,
    //     height: 48,
    //     left: 28,
    //     top: 15,
    //     backgroundColor: '#FFFFFF',
    //     borderRadius: 24,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
});

export default HeaderBeforeLogin;