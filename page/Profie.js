import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import { color } from '../utils';
import { List, TopBar } from '../component';
import { Button } from '../component/atoms';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
export default function Profie({ navigation }) {

  const [list, setList] = useState({
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
              setList(user);
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

  const clickHanddelLogin = () => {
    AsyncStorage.removeItem('userData');
    navigation.replace('Login');
  };
  const clickHanddelEdit = () => {
    navigation.navigate('EditProfil');
  };

  return (
    <View style={styles.Body}>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.Nama}>Bonaventura P Jemi</Text>
          <Text style={styles.welcome}>Selamat Datang Di E - Reporting</Text>
        </View>
        <View style={styles.imgWraper}>
          <Image source={require('../src/img/user.jpg')} style={styles.img} />
        </View>
      </View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        <View style={styles.main}>
          <List lable="Nama" value={list.nama} />
          <List lable="ID Penyuluh" value={list.id} />
          <List lable="Golongan" value={list.golongan} />
          <List lable="Tempat Lahir" value={list.tempat_lahir} />
          <List lable="Tanggal Lahir" value={list.tgl_lahir} />
          <List lable="Agama" value={list.agama} />
          <List lable="Jenis Kelamin" value={list.jenis_kelamin} />
          <View>
            <Button
              title="Ubah Data"
              onClick={() => clickHanddelEdit('EditProfil')}
            />
            <View style={{ marginTop: 30 }}></View>
            <Button title="Log Out" onClick={() => clickHanddelLogin('LogOut')} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Body: {
    marginTop: 25,
  },

  header: {
    flexDirection: 'row',
    height: 100,
    padding: 20,
  },
  headerText: {
    flex: 1,
  },
  Nama: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  welcome: {
    fontSize: 16,
  },
  imgWraper: {
    padding: 10,

    width: 70,
    height: 70,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: color.utama,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  main: {
    padding: 20,
    marginBottom: 150,
  },
});
