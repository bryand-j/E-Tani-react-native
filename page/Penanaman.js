import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {TopBar} from '../component';
import {Input, Button} from '../component/atoms';

export default function Penanaman() {
  return (
    <View style={styles.Body}>
      <TopBar title="Penanaman" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        <View style={styles.main}>
          <Input label="Lahan" />
          <Input label="Tanggal Tanam" />
          <Input label="Perkiraan Tanggal Panen" />
          <Input label="Jenis Tanaman" />
          <Input label="Nama Tanamaman" />
          <Input label="Jumlah Tanam" />
          <Input label="Status Penanaman" />
          <Input label="Kebutuhan" />
          <Input label="Estimasi Biaya" />
          <Input label="Ralisasi Kebutuhan" />
          <Input label="Ralisasi Panen" />
          <Input label="Jumlah Panen" />
          <Button title="Simpan Data" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Body: {
    marginTop: 25,
  },
  main: {
    padding: 20,
    marginBottom: 60,
  },
});
