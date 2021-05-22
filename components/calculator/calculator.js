import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { Image } from 'react-native-elements/dist/image/Image';
import CalculatorButton from './calculatorButton'

export default function Calculator() {
    const numbers = [
        ['C', 'fd', '%', '/'],
        ['7', '8', '9', 'X'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['%', '0', '.', '=']
    ]

    const [operation, setOperation] = useState('')

    const setValue = (value) => {
        if (value === "C") {
            setOperation('')
        } else {
            setOperation(operation + value)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.circleHeader}>
                    <Image
                        source={require('../../assets/logo.png')}
                        style={{ height: 44, width: 148 }}
                    />
                    <Text style={styles.headerText}>Calculator</Text>
                </View>
            </View>
            <View style={styles.calculation}>
                <Text style={styles.inputStyle}>{operation}</Text>
            </View>
            <View style={styles.buttons}>
                {numbers.map((item, index) =>
                    <View style={styles.rows} key={index}>
                        {item.map((column, i) =>
                            <View key={i} style={styles.columns}>
                                <CalculatorButton value={column} setValue={setValue} />
                            </View>
                        )}
                    </View>)}
            </View>
        </View>
    );
}


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        width: "100%"
    },
    header: {
        flex: 1.5,
        backgroundColor: '#0072B1'
    },
    calculation: {
        flex: 1,
        backgroundColor: '#0072B1',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttons: {
        flex: 3.5,
        paddingHorizontal: 10,
        backgroundColor: '#F4F4F4'
    },
    rows: {
        flex: 1,
        flexDirection: 'row',
    },
    columns: {
        flex: 1
    },
    inputStyle: {
        color: 'white',
        fontSize: 45
    },
    circleHeader: {
        flex: 1,
        height: width + 100,
        width: width + 100,
        backgroundColor: '#F4F4F4',
        borderRadius: height,
        marginTop: -width,
        marginLeft: -50,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    headerText: {
        color: "#009821",
        fontWeight: "bold",
        marginBottom: 30,
        marginTop: 10,
        fontSize: 15
    }
});
