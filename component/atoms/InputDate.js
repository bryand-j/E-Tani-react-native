import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { color } from '../../utils';

export default InputDate = ({ label, value, setValue }) => {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        const bulan = currentDate.getUTCMonth() + 1;
        const tanggal = currentDate.getFullYear() + '-' + bulan + '-' + currentDate.getDate();
        setValue(tanggal);

    };
    const showDatepicker = () => {
        setShow(true);
    };

    return (

        <View>
            <View style={styles.inputWrap}>
                <Text style={styles.label}>{label}</Text>
                <TouchableOpacity style={styles.input} onPress={showDatepicker}>
                    <Text>{value}</Text>
                </TouchableOpacity>
            </View>
            {show && (
                <DateTimePicker
                    testID="datePicker"
                    value={date}
                    mode="date"
                    display="calendar"
                    onChange={onChange}
                    textColor={color.utama}

                />
            )}
        </View>
    );
};


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
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderColor: color.utama,
    },
});
