import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {color} from '../utils';
import {Button, Input} from '../component/atoms';

export default function Login({navigation}) {
  const [form, setform] = useState({
    userName: '',
    password: '',
  });

  const onInputChange = (value, name) => {
    setform({
      ...form,
      [name]: value,
    });
  };
  const clickHanddel = () => {
    console.log(form);
    navigation.navigate('Home', {
      screen: 'Home',
      params: {namaUser: form.userName},
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
