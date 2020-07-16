import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {color} from '../utils';
import {List, TopBar} from '../component';
import {Button} from '../component/atoms';

export default function Profie() {
  const clickHanddel = page => {
    alert(page);
  };
  return (
    <View style={styles.Body}>
      <TopBar title="Profile" />
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.Nama}>Bonaventura P Jemi</Text>
          <Text style={styles.welcome}>Selamat Datang Di E - Reporting</Text>
        </View>
        <View style={styles.imgWraper}>
          <TouchableOpacity onPress={() => clickHanddel('GantiFoto')}>
            <Image source={require('../src/img/user.jpg')} style={styles.img} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        <View style={styles.main}>
          <List lable="Nama" value="Bonaventura P Jemi" />
          <List lable="ID Penyuluh" value="123456789" />
          <List lable="Golongan" value="III B" />
          <List lable="Tempat Lahir" value="Kupang" />
          <List lable="Tanggal Lahir" value="16/10/1998" />
          <List lable="Agama" value="Katolik" />
          <List lable="Jenis Kelamin" value="Laki Laki" />
          <View>
            <Button
              title="Ubah Data"
              onClick={() => clickHanddel('UbahProfile')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Body: {
    marginTop: 25,
  },

  header: {
    flexDirection: 'row',
    height: 100,
    padding: 20,
  },
  headerText: {
    flex: 1,
  },
  Nama: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  welcome: {
    fontSize: 16,
  },
  imgWraper: {
    padding: 10,

    width: 70,
    height: 70,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: color.utama,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  main: {
    padding: 20,
    marginBottom: 150,
  },
});
