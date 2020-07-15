import React from 'react'
import { StyleSheet, TextInput, Text, View } from 'react-native'
import { color } from '../../utils'

export default function Input({ label }) {
  return (
    <View style={styles.inputWrap}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} placeholder={label} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrap: {
    width: '100%',
    marginBottom:12,
  },
  label: {
    marginBottom: 8,
    fontSize: 16
  },
  input: {
    borderWidth: 1,
    width: '100%',
    backgroundColor: color.icon,
    borderRadius: 10,
    paddingHorizontal: 20,
    borderColor: color.utama,
  }
});
