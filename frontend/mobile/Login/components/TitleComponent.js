import React from 'react';
import { StyleSheet } from 'react-native';
import Svg, { Text } from 'react-native-svg';

const TitleComponent = () => {
  return (
    <Svg height="100" width="400" style={styles.alltitle}>
      <Text
        fill="#D9D9D9"
        stroke="#6A737B"
        strokeWidth="2"
        fontSize="25"
        fontWeight="bold"
        x="50%"
        y="40%"
        textAnchor="middle"
      >
        HỆ THỐNG IN ẤN THÔNG MINH
      </Text>
      <Text
        fill="#D9D9D9"
        stroke="#6A737B"
        strokeWidth="2"
        fontSize="35"
        fontWeight="bold"
        x="50%"
        y="80%"
        textAnchor="middle"
      >
        HCMUT_SPSS
      </Text>
    </Svg>
  );
};

export default TitleComponent;

const styles = StyleSheet.create({
  alltitle: {
    marginBottom: 20,
  },
});