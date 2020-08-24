import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, ToastAndroid } from 'react-native';
import { TopBar, Loading } from '../component';
import { Input, Button, Select, InputDate } from '../component/atoms';
import { Picker } from '@react-native-community/picker';

import axios from 'axios';

export default function Penyuluh({ navigation }) {

  const [Form, setForm] = useState({
    nama: '',
    keterangan: '',
    golongan: '',
    tempat_lahir: '',
    tgl_lahir: '2020-8-10',
    agama: '',
    jenis_kelamin: '',
    status: 'Aktif',
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
      .post('http://192.168.137.1:80/rest-server/api/penyuluh', Form)
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
          <Select label="Golongan" value={Form.golongan}
            onValueChange={(value) => onInputChange(value, 'golongan')}>
            <Picker.Item label="Golongan I" value="I" />
            <Picker.Item label="Golongan II" value="II" />
            <Picker.Item label="Golongan III" value="III" />
            <Picker.Item label="Golongan IV" value="IV" />
            <Picker.Item label="Golongan V" value="V" />
          </Select>
          <Input label="Tempat Lahir"
            value={Form.tempat_lahir}
            onChangeText={(value) => onInputChange(value, 'tempat_lahir')} />
          <InputDate label="Tanggal Lahir"
            value={Form.tgl_lahir}
            setValue={(value) => onInputChange(value, 'tgl_lahir')} />
          <Select label="Agama" value={Form.agama}
            onValueChange={(value) => onInputChange(value, 'agama')}>
            <Picker.Item label="Islam" value="Islam" />
            <Picker.Item label="Katolik" value="Katolik" />
            <Picker.Item label="Kristen" value="Kristen" />
            <Picker.Item label="Hindu" value="Hindu" />
            <Picker.Item label="Budha" value="Budha" />
          </Select>
          <Select label="Jenis Kelamin" value={Form.jenis_kelamin}
            onValueChange={(value) => onInputChange(value, 'jenis_kelamin')}>
            <Picker.Item label="Pria" value="Pria" />
            <Picker.Item label="Wanita" value="Wanita" />
          </Select>
          <Input label="Keterangan" value={Form.keterangan}
            onChangeText={(value) => onInputChange(value, 'keterangan')} />
          <Select label="Status" value={Form.status}
            onValueChange={(value) => onInputChange(value, 'status')} >
            <Picker.Item label="Aktif" value="Aktif" />
            <Picker.Item label="Tidak Aktif" value="Tidak Aktif" />
          </Select>
          <Input label="Alasan" value={Form.alasan}
            onChangeText={(value) => onInputChange(value, 'alasan')} />
          <Input label="Lainnya" value={Form.lainya}
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
