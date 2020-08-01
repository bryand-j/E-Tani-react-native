import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Picker from '@react-native-community/picker';
import { color } from '../../utils';

export default function Select({ label, selectedValue, onValueChange, items }) {
    return (
        <View style={styles.inputWrap}>
            <Text style={styles.label}>{label}</Text>
            <Picker style={styles.input} selectedValue={selectedValue} onValueChange={onValueChange}>
                {items}
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    inputWrap: {
        width: '100%',
        marginBottom: 15,
    },
    label: {
        marginBottom: 8,
        fontSize: 16,
    },
    input: {
        borderWidth: 1,
        width: '100%',
        backgroundColor: color.bg,
        borderRadius: 10,
        paddingHorizontal: 20,
        borderColor: color.utama,
    },
})
