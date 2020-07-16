import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {color} from '../utils';
export default function TopBar({title}) {
  return (
    <View style={styles.TopBar}>
      <View style={styles.Back}></View>
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
    backgroundColor: color.bg,
    width: 40,
    height: 40,
    borderRadius: 100,
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
