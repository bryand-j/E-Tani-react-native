import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import { color } from '../utils';
import { Card, IconBtn } from '../component';
import { FlatList } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

const DATA = [
  {
    id: '1',
    nama: 'Montes',
    tanaman: 'Padi',
    tanggal: '17/11/2020',
    foto: require('../src/img/proses.jpeg'),
  },
  {
    id: '2',
    nama: 'Filmon',
    tanaman: 'pepaya',
    tanggal: '17/11/2020',
    foto: require('../src/img/pepaya.jpeg'),
  },
  {
    id: '3',
    nama: 'Montes',
    tanaman: 'Padi',
    tanggal: '17/11/2020',
    foto: require('../src/img/proses.jpeg'),
  },
];

export default function home({ route, navigation }) {

  const [namaUser, setNama] = useState('Nama User');


  const clickHanddel = (Page) => {
    navigation.navigate(Page);
  };

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(1000).then(() => setRefreshing(false));
  }, []);

  const ListItem = ({ item }) => (
    <Card
      Nama={item.nama}
      Tanaman={item.tanaman}
      Tanggal={item.tanggal}
      Foto={item.foto}
    />
  );

  useEffect(() => {
    AsyncStorage.getItem('userData', (error, result) => {
      if (result) {
        let data = JSON.parse(result);
        setNama(data.nama);
      }
    });
    return () => {
      null
    }


  }, [namaUser]);
  return (
    <View style={{ backgroundColor: '#ecf0f1', height: '100%' }}>
      <View style={styles.header}>
        <View style={styles.TitleWrapper}>
          <Text style={styles.Title}>Selamat Pagi,</Text>
          <Text style={styles.name}>{namaUser}</Text>
        </View>
        <View style={styles.imgWraper}>
          <TouchableOpacity onPress={() => clickHanddel('Profile')}>
            <Image source={require('../src/img/user.jpg')} style={styles.img} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.action}>
        <Text style={styles.text}>Menu</Text>
        <View style={styles.itemWrapper}>
          <IconBtn
            icon={require('../src/img/ic1.png')}
            lable="Penanaman"
            onPress={() => clickHanddel('Penanaman')}
          />
          <IconBtn
            icon={require('../src/img/ic2.png')}
            lable="Kel-Tani"
            onPress={() => clickHanddel('KelTani')}
          />
          <IconBtn
            icon={require('../src/img/ic3.png')}
            lable="Penyuluh"
            onPress={() => clickHanddel('Penyuluh')}
          />
          <IconBtn
            icon={require('../src/img/lahan.png')}
            lable="Lahan"
            onPress={() => clickHanddel('Lahan')}
          />
        </View>
      </View>

      <View style={styles.scrollView}></View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        <View style={styles.body}>
          <Text style={styles.bodyTitle}>Penanaman Lahan</Text>
          <FlatList
            data={DATA}
            renderItem={ListItem}
            keyExtractor={item => item.id}>
          </FlatList>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: color.utama,
    height: 200,
    color: 'white',
    padding: 18,
    flexDirection: 'row',
  },
  TitleWrapper: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 10,
  },

  Title: {
    color: '#fff',
    marginTop: 20,
    fontSize: 25,
    fontWeight: '600',
    paddingHorizontal: 4,
    fontWeight: 'bold',
    paddingRight: 12,
    textAlign: 'left',
  },
  name: {
    fontSize: 20,
    color: '#fff',
    marginTop: 3,
    textAlign: 'left',
    paddingHorizontal: 4,
  },
  imgWraper: {
    padding: 10,

    width: 65,
    height: 65,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },

  action: {
    backgroundColor: '#fff',
    height: 150,
    padding: 10,
    justifyContent: 'center',
    position: 'relative',
    marginHorizontal: 20,
    marginTop: -50,
    borderRadius: 5,
    shadowColor: color.shadow,
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 0.2,
    elevation: 2,
  },
  text: {
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 18,
    color: 'gray',
    fontWeight: 'bold',
  },
  itemWrapper: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    paddingHorizontal: 7,
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  body: {
    backgroundColor: color.bg,
    padding: 20,
    marginTop: 10,
    paddingBottom: 50,
  },
  bodyTitle: {
    marginBottom: 10,
    fontSize: 20,
    color: 'gray',
    fontWeight: 'bold',
  },
});
