import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {TopBar} from '../component';
import {Input, Button} from '../component/atoms';

export default function Penyuluh() {
  return (
    <View style={styles.Body}>
      <TopBar title="Penyuluh" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        <View style={styles.main}>
          <Input label="Nama" />
          <Input label="Keterangan" />
          <Input label="Golongan" />
          <Input label="Status" />
          <Input label="Alasan" />
          <Input label="Lainyna" />
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
