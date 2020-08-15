import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, ToastAndroid, Image } from 'react-native';
import { TopBar, Loading, IconBtn } from '../component';
import { Input, Button, Select, InputDate, SelectTwo } from '../component/atoms';
import axios from 'axios';

import ImagePicker from 'react-native-image-picker';
import { color } from '../utils';

export default function Penanaman({ navigation }) {
  const [Form, setForm] = useState({
    lahann: '',
    kelompok_tani: '',
    tgl_tanam: new Date().toLocaleDateString(),
    perkiraan_panen: new Date().toLocaleDateString(),
    jenis_tanaman: '',
    nama_tanaman: '',
    jumlah: '',
    status_penanaman: '',
    kebutuhan: '',
    estimasi_biaya: '',
    realisasi_kebutuhan: '',
    realisasi_panen: '',
    jumlah_panen: '',
    foto: {
      srcImg: '',
      uri: '',
      type: 'image/jpeg',
      fileName: ''
    },
  });
  const mockData = [
    { id: 1, name: "React Native Developer", checked: true }, // set default checked for render option item
    { id: 2, name: "Android Developer" },
    { id: 3, name: "iOS Developer" }
  ]
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

  const choosePicture = () => {

    let options = {
      title: 'Pilih Gambar',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        console.log(response.fileName);
        setForm({
          ...Form,
          foto: {
            srcImg: { uri: response.uri },
            uri: response.uri,
            type: 'image/jpeg',
            fileName: response.fileName
          },
        });
      }
    });
  };

  const clickHanddelSimpan = () => {
    setModalVisible(true);
    const url = "http://192.168.137.1:80/rest-server/api/penanaman";
    let data = new FormData();
    data.append('lahan', Form.lahann);
    data.append('kelompok_tani', Form.kelompok_tani);
    data.append('tgl_tanam', Form.tgl_tanam);
    data.append('perkiraan_panen', Form.perkiraan_panen);
    data.append('jenis_tanaman', Form.jenis_tanaman);
    data.append('nama_tanaman', Form.nama_tanaman);
    data.append('jumlah', Form.jumlah);
    data.append('status_penanaman', Form.status_penanaman);
    data.append('kebutuhan', Form.kebutuhan);
    data.append('estimasi_biaya', Form.estimasi_biaya);
    data.append('realisasi_kebutuhan', Form.realisasi_kebutuhan);
    data.append('realisasi_panen', Form.realisasi_panen);
    data.append('jumlah_panen', Form.jumlah_panen);
    data.append('foto',
      {

        uri: Form.foto.uri,
        type: 'image/jpeg',
        name: Form.foto.fileName,

      });
    console.log(data);
    axios({
      url: url,
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: data,
    })
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
          <SelectTwo name="Lahan" data={mockData} onSelect={(data) => alert(data)} />
          <Input label="Lahan" value={Form.lahann}
            onChangeText={(value) => onInputChange(value, 'lahann')} />
          <Input label="Kelompok Tani" value={Form.kelompok_tani}
            onChangeText={(value) => onInputChange(value, 'kelompok_tani')} />
          <InputDate label="Tanggal Tanam"
            value={Form.tgl_tanam}
            setValue={(value) => onInputChange(value, 'tgl_tanam')} />
          <InputDate label="Perkiraan Tanggal Panen"
            value={Form.perkiraan_panen}
            setValue={(value) => onInputChange(value, 'perkiraan_panen')} />

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
            onChangeText={(value) => onInputChange(value, 'jumlah_panen')} />
          <View style={styles.upload}>
            {(Form.foto.srcImg != '') && (
              <View>
                <Image source={Form.foto.srcImg} style={{ height: 100, width: "100%", borderRadius: 10 }} />
              </View>

            )}
            <View style={styles.btnUpload}>
              <IconBtn
                icon={require('../src/img/upload.png')}
                onPress={() => choosePicture()}
              />
            </View>

          </View>
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
  upload: {
    borderRadius: 10,
    borderStyle: "dashed",
    borderWidth: 2,
    padding: 6,
    borderColor: color.text,
    height: 114,
    width: "100%"
  },
  btnUpload: {
    position: "absolute",
    left: '43%',
    top: 25

  }
});
