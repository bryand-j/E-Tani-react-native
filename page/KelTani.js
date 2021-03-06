import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, ToastAndroid } from 'react-native';
import { TopBar, Loading } from '../component';
import { Input, Button, Select } from '../component/atoms';

import axios from 'axios';
import { Picker } from '@react-native-community/picker';

export default function KelTani({ navigation }) {

  const [Form, setForm] = useState({
    nama: '',
    no_sk: '',
    tgl_berdiri: '2020-8-10',
    jumlah: '',
    status: 'Aktif',
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
      .post('http://192.168.137.1:80/rest-server/api/poktan', Form)
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
      <TopBar title="Kelompok Tani" kembali={() => navigation.goBack()} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        <View style={styles.main}>
          <Input label="Nama Kelompok Tani" value={Form.nama}
            onChangeText={(value) => onInputChange(value, 'nama')} />
          <Input label="Nomor SK" value={Form.no_sk}
            onChangeText={(value) => onInputChange(value, 'no_sk')} />
          <InputDate label="Tanggal Berdiri" value={Form.tgl_berdiri}
            setValue={(value) => onInputChange(value, 'tgl_berdiri')} />
          <Input label="Jumlah Anggota" value={Form.jumlah} keyboardType="decimal-pad"
            onChangeText={(value) => onInputChange(value, 'jumlah')} />
          <Select label="Status" value={Form.status}
            onValueChange={(value) => onInputChange(value, 'status')} >
            <Picker.Item label="Aktif" value="Aktif" />
            <Picker.Item label="Tidak Aktif" value="Tidak Aktif" />
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
