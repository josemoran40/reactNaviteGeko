import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Image } from 'react-native-elements/dist/image/Image';
import LoginBox from './loginBox';
export default function Login({ navigation }) {
    return (
        <>
            <View style={styles.headerContainer}>
                <View style={styles.background}>
                </View>
            </View>
            <View style={styles.inputsContainer}>
                <View style={styles.circleImage}>
                    <Image
                        source={require('../../assets/share.png')}
                        style={{ width: 50, height: 50 }}
                    />
                </View>
                <LoginBox navigation={navigation} />
            </View>
        </>
    );
}

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        backgroundColor: '#fff',
        position: 'absolute',
        left: 0,
        top: 0,
    },
    background: {
        backgroundColor: "#0072B1",
        height: height * 0.65,
        width: width,
    },
    inputsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    circleImage: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 106,
        width: 106,
        borderRadius: 70,
        borderColor: '#fff',
        borderWidth: 2,
        marginBottom: 30
    }
});
