import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {color} from '../utils';

export default function Profie() {
  return (
    <View style={styles.Body}>
      <View styles={styles.header}>
        <View>
          <Text style={styles.Nama}>Bonaventura P Jemi</Text>
          <Text style={styles.welcome}>Selamat Datang Di E - Reporting</Text>
        </View>
        <Image source={require('../src/img/home.png')} style={styles.img} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Body: {
    marginTop: 25,
    padding: 20,
  },
  Header: {
    flexDirection: 'row',
  },
  img: {
    marginTop: 50,
    width: 50,
    height: 50,
    borderRadius: 100,
  },
});
