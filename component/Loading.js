import React from 'react'
import { StyleSheet, Text, View, Modal, ActivityIndicator } from 'react-native'
import { color } from '../utils'

export default function Loading({ visible }) {
    return (
        <Modal visible={visible} transparent={true} animationType="fade">
            <View style={styles.body}>
                <View style={styles.modal}>
                    <Text style={styles.text}>Loading...</Text>
                    <ActivityIndicator size='large' color={color.utama} />
                </View>
            </View>
        </Modal>

    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,.2)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        width: '80%',
        alignItems: 'center'
    },
    text: {
        color: color.Text,
        fontSize: 16,
        fontWeight: 'normal'
    }


})
