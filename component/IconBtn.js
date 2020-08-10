import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity, TouchableNativeFeedback } from 'react-native-gesture-handler';
import { color } from '../utils';

export default function IconBtn({ icon, lable, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.item}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.label}>{lable}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: color.icon,
    marginHorizontal: 5,
    width: 50,
    height: 50,
    marginBottom: 30,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    position: 'absolute',
    bottom: -20,
    fontSize: 12,
    textAlign: 'center',
    width: 100,
  },

  icon: {
    width: 30,
    height: 30,
  },
});
