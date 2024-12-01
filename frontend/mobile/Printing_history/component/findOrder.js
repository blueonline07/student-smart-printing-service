
import React, { useState } from 'react';
import {View, Image, TextInput } from 'react-native';

import styles from '../styles.js'

export default function FindOrder ({inputValue, setInputValue}){
    return (
        <View style={styles.InputContainer}>
            <Image
                source={require('../../assets/images/Print_History/FindIcon.png')}
                style={styles.Icon}
            />
            <TextInput
                style={styles.textInput}
                value={inputValue}
                onChangeText={setInputValue}
                placeholder="Tìm kiếm giao dịch"
            />
        </View>
    )
};