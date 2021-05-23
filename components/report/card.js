import React from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';

export default function Card({ operation }) {
    return (
        <View style={styles.card}>
            <View style={styles.horizontal}>
                <View style={styles.id}>
                    <Text h2 style={{ color: 'white' }}> {operation.number} </Text>
                </View>
                <View style={styles.content}>
                    <Text>{operation.kind}</Text>
                </View>
            </View>
        </View>
    );
}

const width = Dimensions.get('screen').width
const styles = StyleSheet.create({
    card: {
        width: width - 40,
        height: 62,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#D1D1D1',
        flex: 1
    },
    horizontal: {
        flexDirection: 'row'
    },
    id: {
        width: 62,
        height: 62,
        backgroundColor: '#009821',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
