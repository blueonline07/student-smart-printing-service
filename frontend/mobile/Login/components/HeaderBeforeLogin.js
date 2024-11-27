import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

const HeaderBeforeLogin = ({ navigation }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <View style={styles.headerHBL}>
            {/* Home Button */}
            <TouchableOpacity 
                style={[styles.spssLogoHBL, isHovered && styles. spssLogoHBLHovered]} 
                onPress={() => navigation.navigate('HomeBeforeLogin')}
                onPressIn={() => setIsHovered(true)}
                onPressOut={() => setIsHovered(false)}
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

    spssLogoHBLHovered: {
        backgroundColor: '#0388B4',
    }
});

export default HeaderBeforeLogin;