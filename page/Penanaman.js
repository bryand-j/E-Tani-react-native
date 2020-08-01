import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, ToastAndroid } from 'react-native';
import { TopBar, Loading } from '../component';
import { Input, Button } from '../component/atoms';
import axios from 'axios';

export default function Penanaman({ navigation }) {
  const [Form, setForm] = useState({
    lahann: '',
    tgl_tanam: '',
    perkiraan_panen: '',
    jenis_tanaman: '',
    nama_tanaman: '',
    jumlah: '',
    status_penanaman: '',
    kebutuhan: '',
    estimasi_biaya: '',
    realisasi_kebutuhan: '',
    realisasi_panen: '',
    jumlah_panen: '',
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
      .post('http://192.168.137.1:80/rest-server/api/input/penanaman', Form)
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
      <TopBar title="Penanaman Lahan" kembali={() => navigation.goBack()} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        <View style={styles.main}>
          <Input label="Lahan" value={Form.lahann}
            onChangeText={(value) => onInputChange(value, 'lahann')} />
          <Input label="Tanggal Tanam" value={Form.tgl_tanam}
            onChangeText={(value) => onInputChange(value, 'tgl_tanam')} />
          <Input label="Perkiraan Tanggal Panen" value={Form.perkiraan_panen}
            onChangeText={(value) => onInputChange(value, 'perkiraan_panen')} />
          <Input label="Jenis Tanaman" value={Form.jenis_tanaman}
            onChangeText={(value) => onInputChange(value, 'jenis_tanaman')} />
          <Input label="Nama Tanamaman" value={Form.nama_tanaman}
            onChangeText={(value) => onInputChange(value, 'nama_tanaman')} />
          <Input label="Jumlah Tanam" value={Form.jumlah}
            onChangeText={(value) => onInputChange(value, 'jumlah')} />
          <Input label="Status Penanaman" value={Form.status_penanaman}
            onChangeText={(value) => onInputChange(value, 'status_penanaman')} />
          <Input label="Kebutuhan" value={Form.kebutuhan}
            onChangeText={(value) => onInputChange(value, 'kebutuhan')} />
          <Input label="Estimasi Biaya" value={Form.estimasi_biaya}
            onChangeText={(value) => onInputChange(value, 'estimasi_biaya')} />
          <Input label="Ralisasi Kebutuhan" value={Form.realisasi_kebutuhan}
            onChangeText={(value) => onInputChange(value, 'realisasi_kebutuhan')} />
          <Input label="Ralisasi Panen" value={Form.realisasi_panen}
            onChangeText={(value) => onInputChange(value, 'realisasi_panen')} />
          <Input label="Jumlah Panen" value={Form.jumlah_panen}
            onChangeText={(value) => onInputChange(value, 'jumlah_panen ')} />
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
