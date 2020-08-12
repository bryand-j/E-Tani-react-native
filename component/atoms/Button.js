import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TouchableNativeFeedback } from 'react-native'
import { color } from '../../utils';

export default function Button({ title, onClick }) {

  return (
    <View style={styles.tombol}>
      <TouchableNativeFeedback onPress={onClick}>
        <View style={styles.Button}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  tombol: {
    marginVertical: 10
  },
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
