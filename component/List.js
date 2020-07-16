import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {color} from '../utils';

export default function List({lable, value}) {
  return (
    <View style={styles.list}>
      <Text style={styles.lable}>{lable}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    borderBottomWidth: 0.7,
    borderBottomColor: 'silver',
    marginBottom: 20,
    paddingBottom: 5,
  },
  lable: {},
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: color.text,
  },
});
