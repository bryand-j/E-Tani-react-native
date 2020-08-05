import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ToastAndroid } from 'react-native';
import { color } from '../utils';
import { Button, Input } from '../component/atoms';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { Loading } from '../component';

export default function Login({ navigation }) {
  const [form, setform] = useState({
    userName: '',
    password: '',
  });
  const [modal, setModal] = useState({
    visible: false
  });
  const setModalVisible = (value) => {
    setModal({
      ['visible']: value,
    });
  }
  // cek login
  useEffect(() => {
    AsyncStorage.getItem('userData', (error, result) => {
      if (result) {
        let isLogin = JSON.parse(result);
        if (isLogin.status == true) {
          navigation.replace('Home', {
            screen: 'Home',
            params: { namaUser: isLogin.userName },
          });
        }
      }
    });
  }, []);
  //ubah state
  const onInputChange = (value, name) => {
    setform({
      ...form,
      [name]: value,
    });
  };
  //login klik
  const clickHanddel = () => {
    console.log(form);
    setModalVisible(true);
    axios
      .post('http://192.168.137.1:80/rest-server/api/auth', form)
      .then((res) => {
        console.log(res.data);
        setModalVisible(false);
        if (res.data.status == true) {
          const user = res.data.data[0];
          AsyncStorage.setItem('userData', JSON.stringify(user));
          navigation.replace('Home', {
            screen: 'Home',
            params: { namaUser: "bry" },
          });
        } else {
          ToastAndroid.show("" + res.data.message, ToastAndroid.SHORT);
        }
      })
      .catch((err) => {
        setModalVisible(false);
        ToastAndroid.show("" + err, ToastAndroid.SHORT);
      });
  };
  return (
    <View style={styles.container}>
      <Image style={styles.gambar} source={require('../src/img/traktor.png')} />
      <Text style={styles.title}>Login</Text>
      <Input
        label="Username"
        value={form.userName}
        onChangeText={(value) => onInputChange(value, 'userName')}
      />
      <Input
        label="Password"
        value={form.password}
        onChangeText={(value) => onInputChange(value, 'password')}
        secureTextEntry={true}
      />
      <Button title="Login" onClick={clickHanddel} />
      <Loading visible={modal.visible} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: color.bg,
    height: '100%',
  },
  gambar: {
    marginTop: 50,
    width: 150,
    height: 120,
    marginBottom: 50,
  },
  title: {
    textAlign: 'center',
    color: color.utama,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
