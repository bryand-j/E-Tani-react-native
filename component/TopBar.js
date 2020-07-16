import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {color} from '../utils';
export default function TopBar({title, kembali}) {
  return (
    <View style={styles.TopBar}>
      <TouchableOpacity onPress={kembali}>
        <View style={styles.Back}>
          <Image
            source={require('../src/img/back.png')}
            style={styles.btnBack}
          />
        </View>
      </TouchableOpacity>
      <Text style={styles.titel}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  TopBar: {
    flexDirection: 'row',
    height: 60,
    padding: 15,
    backgroundColor: color.utama,
  },
  Back: {
    backgroundColor: color.icon,
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: 'center',
  },
  btnBack: {
    width: 25,
    height: 25,
  },
  titel: {
    height: 40,
    marginLeft: 30,
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 1.5,
    color: 'white',
    textAlignVertical: 'center',
  },
});
