import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Select2 from 'react-native-select-two'
import { color } from '../../utils';

export default function SelectTwo({ name, data, valueChange }) {
    const title = "Pilih " + name;
    return (
        <View style={styles.inputWrap}>
            <Text style={styles.label}>{name}</Text>
            <Select2
                isSelectSingle
                style={styles.select}
                colorTheme={color.utama}
                popupTitle={title}
                title={title}
                data={data}
                cancelButtonText="Batal"
                selectButtonText="Pilih"
                listEmptyTitle="Tidak Ada Hasil"
                searchPlaceHolderText="Cari"
                onSelect={(data) => valueChange(data)} />
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
    select: {
        borderWidth: 1,
        width: '100%',
        backgroundColor: color.bg,
        borderRadius: 10,
        paddingHorizontal: 10,
        borderColor: color.utama,
    }
});
