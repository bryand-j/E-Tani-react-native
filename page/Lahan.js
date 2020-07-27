import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { TopBar } from '../component';
import { Input, Button } from '../component/atoms';

export default function Lahan({ navigation }) {
    return (
        <View style={styles.Body}>
            <TopBar title="Lahan" kembali={() => navigation.goBack()} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}>
                <View style={styles.main}>
                    <Input label="Nama Kelompok Tani" />
                    <Input label="Nomor SK" />
                    <Input label="Tanggal Berdiri" />
                    <Input label="Jumlah Anggota" />
                    <Input label="Status" />
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
