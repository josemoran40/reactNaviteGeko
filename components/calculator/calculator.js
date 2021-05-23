import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { Image } from 'react-native-elements/dist/image/Image';
import CalculatorButton from './calculatorButton'
import parser from '../../grammar/grammar'

export default function Calculator({ navigation, route }) {
    const buttons = [
        ['C', 'DEL', '%', '/'],
        ['7', '8', '9', 'x'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['^', '0', '.', '=']
    ]
    const list = route.params.list
    const [operation, setOperation] = useState('')
    const [result, setResult] = useState(0)

    const setValue = (value) => {
        if (value === 'C') {
            setOperation('')
            setResult(0)
        } else if (value === "=") {
            setResult(operate(operation))
            list.push(
                {
                    kind: 'Subtraction',
                    result: '15+5=10'
                })

        } else if (value === "DEL") {
            setOperation(operation.slice(0, -1))
        } else {
            setOperation(operation + value)
        }
    }

    const operate = (value) => {
        try {
            const ast = parser.parse(value)
            if (ast != true) {
                return ast.execute()
            }
            return 'ERROR'
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.circleHeader}>
                    <View style={styles.back}>
                        <Image
                            source={require('../../assets/arrow.png')}
                            style={{ height: 35, width: 35 }}
                            onPress={() => navigation.pop()}
                        />
                    </View>
                    <View style={styles.logo}>
                        <Image
                            source={require('../../assets/logo.png')}
                            style={{ height: 44, width: 148 }}
                        />
                    </View>
                    <Text style={styles.headerText}>Calculator</Text>
                </View>
            </View>
            <View style={styles.calculation}>
                {
                    result == 0 ?
                        <Text style={styles.inputStyle}>{operation}</Text>
                        :
                        <>
                            <Text style={styles.resultStyle}>{operation}</Text>
                            <Text style={styles.inputStyle}>{'= ' + result}</Text>
                        </>
                }
            </View>
            <View style={styles.buttons}>
                {buttons.map((item, index) =>
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
    resultStyle: {
        color: '#F4F4F4',
        fontSize: 20
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
    },
    back: {
        flex: 12,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        width: width,
        paddingHorizontal: 20
    },
    logo: {
        flex: 1
    }
});
