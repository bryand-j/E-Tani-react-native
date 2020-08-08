import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { color } from '../utils';

export default function Card({ Nama, Tanggal, Foto, Tanaman }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: Foto }} style={styles.cardImage} />
      <View style={styles.cardText}>
        <View style={styles.cardInfo}>
          <Image
            style={styles.cardIcon}
            source={require('../src/img/farmer.png')}
          />
          <Text style={{ fontSize: 18, flex: 1, color: 'black' }}>{Nama}</Text>
          <Image
            style={{ marginRight: 10, height: 18, width: 18 }}
            source={require('../src/img/date.png')}
          />
          <Text style={{ fontSize: 16, color: color.utama }}>{Tanggal}</Text>
        </View>
        <View style={styles.cardInfo}>
          {/* <Image
                  style={{marginRight: 10, height: 16, width: 16}}
                  source={require('../src/img/tanaman.png')}
                /> */}
          <Text style={{ fontSize: 14, flex: 1, color: color.text }}>
            Tanaman: {Tanaman}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    height: 300,
    position: 'relative',
    borderRadius: 20,
    padding: 10,
    shadowColor: color.shadow,
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 0.2,
    marginBottom: 10,
  },
  cardImage: {
    borderRadius: 10,
    height: 200,
    width: '100%',
  },
  cardInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
  },
  cardIcon: {
    marginRight: 10,
    height: 25,
    width: 25,
  },
});
