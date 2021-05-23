import React, { useState } from 'react';
import { Alert, Dimensions } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { Image } from 'react-native-elements/dist/image/Image';
import CalculatorButton from './calculatorButton'
import parser from '../../grammar/grammar'

export default function Calculator({ navigation, route }) {
    //Array that contains all of the buttons of the calculator
    const buttons = [
        ['C', 'DEL', '%', '/'],
        ['7', '8', '9', '*'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['^', '0', '.', '=']
    ]
    //State that is use to save the input
    const [operation, setOperation] = useState('')
    //State that is use to save the result
    const [result, setResult] = useState('')

    const setValue = (value) => {
        /*
         * If value equals C we clear the input and the result
         * If value equals "=" we try to operate the input and push the report list
         * if value equals DEL we delete the last character of the input
         * else we just concat value to the input
         */
        if (value === 'C') {
            setOperation('')
            setResult('')
        } else if (value === "=") {
            const opterationResult = operate(operation)
            if (opterationResult != undefined) {
                setResult(opterationResult)
                console.log(route.params)
                /*route.params.list.push({
                    number: route.params.list.length + 1,
                    result: operation + '=' + result
                })*/
                //console.log(route.params.list.length)
            }
        } else if (value === "DEL") {
            setOperation(operation.slice(0, -1))
        } else {
            setOperation(operation + value)
            setResult('')
        }
    }


    const Results = () => {
        //Component used for show operation and result
        return (
            <View style={styles.calculation}>
                {
                    result === '' ?
                        <Text style={styles.inputStyle}>{operation}</Text>
                        :
                        <>
                            <Text style={styles.resultStyle}>{operation}</Text>
                            <Text style={styles.inputStyle}>{'= ' + result}</Text>
                        </>
                }
            </View>
        )
    }

    //Principal compontent used for render all the screen
    /*
     * If result is empty just show the operation input
     * else show both 
     */
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <Results />
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


const Header = ({ navigation }) => {
    //Component used for show the logo and title, also contains the navitagion
    return (
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
    )
}

const operate = (value) => {
    try {
        //Parse the input and create an ast 
        const ast = parser.parse(value)
        if (ast != true) {
            // Execute the operation, this process is goes through all the ast 
            return ast.execute()
        }
    } catch (error) {
        // If the input have mistakes we report it using an alert
        Alert.alert(
            "ERROR",
            "Check your input",
            [
                { text: "OK" }
            ]
        );
    }
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
