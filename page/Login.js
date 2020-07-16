import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {color} from '../utils';
import {Button, Input} from '../component/atoms';

export default function Login({navigation}) {
  const clickHanddel = () => {
    navigation.replace('Home');
  };
  return (
    <View style={styles.container}>
      <View style={styles.gambar}></View>
      <Text style={styles.title}>Login</Text>
      <Input label="Username" />
      <Input label="Password" />
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
    backgroundColor: color.utama,
    marginTop: 50,
    width: 100,
    height: 100,
    marginBottom: 50,
    borderRadius: 100,
  },
  title: {
    textAlign: 'center',
    color: color.utama,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
