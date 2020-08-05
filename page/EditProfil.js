import React, { useEffect, useState, Fragment } from 'react';
import { StyleSheet, ScrollView, View, ToastAndroid } from 'react-native';
import { TopBar, Loading } from '../component';
import { Input, Button, Select } from '../component/atoms';
import { Picker } from '@react-native-community/picker';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

export default function EditProfil({ navigation }) {
    let id = '';
    const [Form, setForm] = useState({
        nama: '',
        id: '',
        golongan: '',
        tempat_lahir: '',
        tgl_lahir: '',
        agama: '',
        jenis_kelamin: '',
    });
    const [modal, setModal] = useState({
        visible: false
    });
    const setModalVisible = (value) => {
        setModal({
            ['visible']: value,
        });
    }

    useEffect(() => {
        AsyncStorage.getItem('userData', (error, result) => {
            if (result) {
                let data = JSON.parse(result);
                setForm(data);
            }
        });

    }, []);

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
            .post('http://192.168.137.1:80/rest-server/api/profile', Form)
            .then((res) => {
                console.log(res.data);
                setModalVisible(false);
                if (res.data.status == true) {
                    AsyncStorage.setItem('userData', JSON.stringify(Form));
                    ToastAndroid.show("" + res.data.message, ToastAndroid.SHORT);
                    navigation.goBack();
                } else {
                    ToastAndroid.show("" + res.data.message, ToastAndroid.SHORT);
                    navigation.goBack();
                }
            })
            .catch((err) => {
                setModalVisible(false);
                ToastAndroid.show("" + err, ToastAndroid.SHORT);
            });
    };
    return (
        <View style={styles.Body}>
            <TopBar title="Edit Profil" kembali={() => navigation.goBack()} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}>
                <View style={styles.main}>
                    <Input
                        label="Nama" value={Form.nama}
                        onChangeText={(value) => onInputChange(value, 'nama')} />
                    <Input label="Tempat Lahir"
                        value={Form.tempat_lahir}
                        onChangeText={(value) => onInputChange(value, 'tempat_lahir')} />
                    <Input label="Tanggal Lahir"
                        value={Form.tgl_lahir}
                        onChangeText={(value) => onInputChange(value, 'tgl_lahir')} />
                    <Input label="Agama"
                        value={Form.agama}
                        onChangeText={(value) => onInputChange(value, 'agama')} />
                    <Select label="Jenis Kelamin" value={Form.jenis_kelamin}
                        onValueChange={(value) => onInputChange(value, 'jenis_kelamin')}>
                        <Picker.Item label="Pria" value="Pria" />
                        <Picker.Item label="Wanita" value="Wanita" />
                    </Select>


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
