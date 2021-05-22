import React from 'react';
import { Dimensions } from 'react-native';
import { FlatList } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { Text, Button, Image } from 'react-native-elements';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import Card from './card';

export default function Report() {

    const list = [
        {
            number: 1,
            kind: 'Subtraction',
            result: '15+5=10'
        },
        {
            number: 2,
            kind: 'Subtraction',
            result: '15+5=10'
        },
        {
            number: 3,
            kind: 'Subtraction',
            result: '15+5=10'
        },
        {
            number: 4,
            kind: 'Subtraction',
            result: '15+5=10'
        },
        {
            number: 5,
            kind: 'Subtraction',
            result: '15+5=10'
        },
        {
            number: 6,
            kind: 'Subtraction',
            result: '15+5=10'
        },
        {
            number: 7,
            kind: 'Subtraction',
            result: '15+5=10'
        },
        {
            number: 8,
            kind: 'Subtraction',
            result: '15+5=10'
        }
    ]

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image
                    source={require('../../assets/logo.png')}
                    style={{ height: 44, width: 148 }}
                />
            </View>
            <View style={styles.listContainer}>
                <View>
                    <View style={styles.header}>
                        <View style={styles.subheader}>
                            <Text h2 style={{ color: '#0072B1' }}>Report</Text>
                        </View>
                        <View style={styles.subheader}>
                            <Button
                                title=" Calculator"
                                buttonStyle={styles.button}
                                icon={
                                    <Icon
                                        name="calculator"
                                        size={30}
                                        color="white"
                                        type="font-awesome"
                                    />
                                }
                            />
                        </View>
                    </View>

                </View>
                <FlatList
                    data={list}
                    keyExtractor={(item) => item.number.toString()}
                    renderItem={({ item }) => (<Card operation={item} />)}
                />
            </View>
        </View>
    );
}

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    listContainer: {
        flex: 1,
        paddingHorizontal: 20
    },
    button: {
        borderRadius: 0,
        backgroundColor: '#0072B1',
        height: 53,
    },
    header: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 10,
    },
    subheader: {
        width: width / 2 - 20
    },
    logo: {
        width: width,
        height: height * 0.15,
        backgroundColor: '#F4F4F4',
        justifyContent: 'center',
        alignItems: 'center'
    }

});
