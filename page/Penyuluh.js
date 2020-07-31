import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, ToastAndroid } from 'react-native';
import { TopBar, Loading } from '../component';
import { Input, Button } from '../component/atoms';

import axios from 'axios';

export default function Penyuluh({ navigation }) {

  const [Form, setForm] = useState({
    nama: '',
    keterangan: '',
    golongan: '',
    tempat_lahir: '',
    tgl_lahir: '',
    agama: '',
    jenis_kelamin: '',
    status: '',
    alasan: '',
    lainya: '',
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
      .post('http://192.168.137.1:80/rest-server/api/input/penyuluh', Form)
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
      <TopBar title="Penyuluh" kembali={() => navigation.goBack()} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        <View style={styles.main}>
          <Input label="Nama" value={Form.nama}
            onChangeText={(value) => onInputChange(value, 'nama')} />
          <Input label="Golongan" value={Form.golongan}
            onChangeText={(value) => onInputChange(value, 'golongan')} />
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
          <Input label="Keterangan" value={Form.keterangan}
            onChangeText={(value) => onInputChange(value, 'keterangan')} />
          <Input label="Status" value={Form.status}
            onChangeText={(value) => onInputChange(value, 'status')} />
          <Input label="Alasan" value={Form.alasan}
            onChangeText={(value) => onInputChange(value, 'alasan')} />
          <Input label="Lainyna" value={Form.lainya}
            onChangeText={(value) => onInputChange(value, 'lainya')} />
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
