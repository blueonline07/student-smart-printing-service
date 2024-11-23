import React from 'react';
import PrintNowScreen from '../components/Printnow';
import PrintLateScreen from '../components/Printlate';
import {StyleSheet} from 'react-native';
const PrinterSelectionScreen = ({ route, navigation }) => {
    const { param } = route.params;
    return (
         param == 1 ? (
                <PrintNowScreen navigation={navigation} />
            ) : (
                <PrintLateScreen navigation={navigation} />
            )
    );
};

export default PrinterSelectionScreen;
