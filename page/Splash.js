import React from 'react';
import { StyleSheet, View, Image } from 'react-native';


import AsyncStorage from '@react-native-community/async-storage';

export default function Splash({ navigation }) {
  setTimeout(() => {
    AsyncStorage.getItem('userData', (error, result) => {
      if (result) {
        let isLogin = JSON.parse(result);
        if (isLogin.status == true) {
          navigation.replace('Home', {
            screen: 'Home',
            params: { namaUser: isLogin.userName },
          });
        }
      } else {
        navigation.replace('Login');
      }
    });
  }, 3000);

  return (
    <View style={styles.body}>
      <Image style={styles.gambar} source={require('../src/img/traktor.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gambar: {
    width: 150,
    height: 130,
  },
});
