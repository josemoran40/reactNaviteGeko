import React from 'react';
import { TouchableOpacity } from 'react-native'
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
export default function CalculatorButton({ value, setValue }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.touch]} onPress={() => setValue(value)}>
                {value == '=' ?
                    <View style={styles.circle}>
                        <Text style={styles.equal}>{value}</Text></View>
                    :
                    <Text style={value.charCodeAt(0) > 47
                        && value.charCodeAt(0) < 58 ? styles.number : styles.other}> {value}</Text>}
            </TouchableOpacity>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    }, touch: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%"
    },
    circle: {
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#009821',
        borderRadius: 100
    },
    number: {
        color: '#A7A7A7',
        fontSize: 40
    },
    equal: {
        color: 'white',
        fontSize: 40,
    },
    other: {
        color: '#009821',
        fontSize: 40
    }

});
