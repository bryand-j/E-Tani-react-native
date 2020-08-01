import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import DateTimePicker from '@react-native-community/datetimepicker';

export default function DatePicker({ label, value }) {
    const [date, setDate] = useState(new Date(1598051730000));
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        console.log(selectedDate);
    };

    const showDatepicker = () => {
        setShow(true);
    };
    return (
        <View style={styles.inputWrap}>
            <Text style={styles.label}>{label}</Text>
            <TouchableOpacity style={styles.input} onPress={showDatepicker}>
                {date}
            </TouchableOpacity>
            {show && (
                <DateTimePicker
                    testID="datePicker"
                    value={date}
                    mode="date"
                    display="calendar"
                    onChange={onChange}
                />
            )}
        </View>
    );
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
});