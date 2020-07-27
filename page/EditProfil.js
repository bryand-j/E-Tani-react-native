import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { TopBar } from '../component';
import { Input, Button } from '../component/atoms';
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

    useEffect(() => {
        AsyncStorage.getItem('userData', (error, result) => {
            if (result) {
                let data = JSON.parse(result);
                axios
                    .get(`http://192.168.137.1:80/rest-server/api/auth?id=` + data.userId)
                    .then((res) => {
                        console.log(res.data.data[0]);
                        const user = res.data.data[0];
                        if (res.data.status == true) {
                            setForm(user);
                        } else {
                            alert(res.data.message);
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    });
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
                    <Input label="Jenis Kelamin"
                        value={Form.jenis_kelamin}
                        onChangeText={(value) => onInputChange(value, 'jenis_kelamin')} />
                    <Button title="Simpan Data" />
                </View>
            </ScrollView>
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
