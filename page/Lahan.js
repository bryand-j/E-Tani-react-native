import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, ToastAndroid } from 'react-native';
import { TopBar, Loading } from '../component';
import { Input, Button } from '../component/atoms';

import axios from 'axios';

export default function Lahan({ navigation }) {

    const [Form, setForm] = useState({
        nama: '',
        luas: '',
    });
    const [modal, setModal] = useState({
        visible: false
    });
    const setModalVisible = (value) => {
        setModal({
            ['visible']: value,
        });
    }

    //ubah state
    const onInputChange = (value, name) => {
        setForm({
            ...Form,
            [name]: value,
        });
    };

    const clickHanddelSimpan = () => {
        setModalVisible(true);
        axios
            .post('http://192.168.137.1:80/rest-server/api/input/lahan', Form)
            .then((res) => {
                console.log(res.data);
                setModalVisible(false);
                if (res.data.status == true) {
                    ToastAndroid.show("" + res.data.message, ToastAndroid.SHORT);
                    navigation.goBack();
                } else {
                    ToastAndroid.show("" + res.data.message, ToastAndroid.SHORT);
                }
            })
            .catch((err) => {
                setModalVisible(false);
                ToastAndroid.show("" + err, ToastAndroid.SHORT);
            });
    }

    return (
        <View style={styles.Body}>
            <TopBar title="Lahan" kembali={() => navigation.goBack()} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}>
                <View style={styles.main}>
                    <Input label="Nama Pemilik Lahan" value={Form.nama}
                        onChangeText={(value) => onInputChange(value, 'nama')} />
                    <Input label="Luas" value={Form.luas}
                        onChangeText={(value) => onInputChange(value, 'luas')} />

                    <Button title="Simpan Data" onClick={() => clickHanddelSimpan()} />
                </View>
            </ScrollView>
            <Loading visible={modal.visible} />
        </View>
    );
}

const styles = StyleSheet.create({
    Body: {
        marginTop: 25,
    },
    main: {
        padding: 20,
        marginBottom: 60,
    },
});
