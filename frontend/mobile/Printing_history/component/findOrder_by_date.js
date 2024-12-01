
import React, { useState } from 'react';
import {Text, View, Image, TextInput } from 'react-native';
import styles from '../styles.js'
export default function FindOrder_by_date ({setstartDate, setendDate, startDate, endDate}){
    return (
        <View>
            <View style={styles.ContainerAsRow}>
            <Text style={styles.text0}> Tìm kiếm từ </Text>
            <View style={styles.ContainerAsRow_border}>
            <TextInput
                style={{width : 120}}
                value={startDate}
                onChangeText={setstartDate}
                placeholder="01/01/2000"
            />
                <Image
                    source={require('../../assets/images/Print_History/ChooseDate.png')}
                    style={styles.Icon}
                />
            </View>
        </View>
        <View style={styles.ContainerAsRow}>
            <Text style={styles.text0}> Đến ngày </Text>
            <View style={styles.ContainerAsRow_border}>
            <TextInput
                style={{width : 120}}
                value={endDate}
                onChangeText={setendDate}
                placeholder="01/01/2000"
            />
                <Image
                    source={require('../../assets/images/Print_History/ChooseDate.png')}
                    style={styles.Icon}
                />
            </View>
        </View>
        </View>
        
    )
};