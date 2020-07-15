import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { color } from '../../utils';

export default function Button({ title, onClick }) {
  return (
    <View>
      <TouchableOpacity style={styles.Button} onPress={onClick}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  Button: {
    backgroundColor: color.utama,
    borderRadius: 10,
    paddingVertical: 13,
    paddingHorizontal: 50

  },
  text: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  }

});
