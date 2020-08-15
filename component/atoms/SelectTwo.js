import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Select2 from 'react-native-select-two'
import { color } from '../../utils';

export default function SelectTwo({ name, data, onSelect }) {
    const title = "Pilih " + name;
    return (
        <View>
            <Select2
                isSelectSingle
                style={styles.select}
                colorTheme={color.utama}
                popupTitle={title}
                title={title}
                data={data}
                onSelect={(data) => onSelect(data)} />
        </View>
    )
}

const styles = StyleSheet.create({
    select: {
        borderWidth: 1,
        width: '100%',
        backgroundColor: color.bg,
        borderRadius: 10,
        paddingHorizontal: 10,
        borderColor: color.utama,
    }
});
