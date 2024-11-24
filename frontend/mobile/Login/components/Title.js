import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const Title = () => {
    return (
        <View>
            {/* Title Section */}
            <Text 
                style={styles.systemTitle}>
                HỆ THỐNG IN ẤN THÔNG MINH
            </Text>

            <Text 
                style={styles.subTitle}>
                HCMUT_SSPS
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    systemTitle: {
        fontFamily: 'Chakra Petch',
        fontSize: 24,
        fontWeight: '700',
        color: '#D9D9D9',
        textAlign: 'center',
        marginTop: 20,
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
        marginTop: 5,
    },
});

export default Title;