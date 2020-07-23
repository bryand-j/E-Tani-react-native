import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {color} from '../utils';
import {Button, Input} from '../component/atoms';
import axios from 'axios';
import {AsyncStorage} from 'react-native';

export default function Login({navigation}) {
  const [form, setform] = useState({
    userName: '',
    password: '',
  });

  // cek login
  useEffect(() => {
    AsyncStorage.getItem('userData', (error, result) => {
      if (result) {
        let isLogin = JSON.parse(result);
        if (isLogin.status == true) {
          navigation.replace('Home', {
            screen: 'Home',
            params: {namaUser: isLogin.userName},
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
    // axios post data untuk cek login
    axios
      .post('http://192.168.137.1:80/rest-server/api/auth', form)
      .then((res) => {
        console.log(res.data);

        if (res.data.status == true) {
          AsyncStorage.setItem('userData', JSON.stringify(res.data));
          navigation.replace('Home', {
            screen: 'Home',
            params: {namaUser: res.data.userName},
          });
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
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
