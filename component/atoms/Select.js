import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { color } from '../../utils';

export default function Select({ label, value, onValueChange }) {

    return (
        <View style={styles.inputWrap}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.input}>
                <Picker
                    prompt={label}
                    mode="dialog"
                    selectedValue={value}
                    onValueChange={(itemValue) => onValueChange(itemValue)}>
                    <Picker.Item label="Aktif" value="Aktif" />
                    <Picker.Item label="Tidak Aktif" value="Tidak Aktif" />

                </Picker>
            </View>
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
        paddingHorizontal: 10,
        borderColor: color.utama,
    },
})
