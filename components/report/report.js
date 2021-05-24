import React, { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { Text, Button, Image } from 'react-native-elements';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import Card from './card';

export default function Report({ navigation, operations }) {
    // With redux we use reduces, in props we can get operations that is the name of the report list
    return (
        <View style={styles.container}>
            <LogoHeader navigation={navigation} />
            <View style={styles.listContainer}>
                <View>
                    <Header navigation={navigation} />
                </View>
                <FlatList
                    data={operations}
                    keyExtractor={(item) => item.number.toString()}
                    renderItem={({ item }) => (<Card operation={item} />)}
                />
            </View>
        </View>
    );
}

const LogoHeader = ({ navigation }) => {
    return (<View style={styles.logo}>
        <View style={styles.back}>
            <Image
                source={require('../../assets/arrow.png')}
                style={{ height: 35, width: 35 }}
                onPress={() => navigation.pop()}
            />
        </View>
        <View style={styles.image}>
            <Image
                source={require('../../assets/logo.png')}
                style={{ height: 44, width: 148 }}
            />
        </View>

        <View style={styles.back}>
        </View>
    </View>)
}

const Header = ({ navigation }) => {
    return (
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
                    onPress={() => {
                        navigation.navigate('Calculator')
                    }}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    listContainer: {
        flex: 4,
        paddingHorizontal: 20
    },
    button: {
        borderRadius: 0,
        backgroundColor: '#0072B1',
        height: 53,
        borderColor: 'white',
        borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    header: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 10,
    },
    subheader: {
        flex: 2
    },
    logo: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#F4F4F4',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    back: {
        flex: 1,
        alignItems: 'center'
    },
    image: {
        flex: 5,
        alignItems: 'center'
    }

});
