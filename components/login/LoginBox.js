import React from 'react';
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Image } from 'react-native-elements/dist/image/Image';
import InputComponent from './inputComponent'
export default function LoginBox() {
    return (

        <View style={styles.loginBox}>
            <Image
                source={require('../../assets/logo.png')}
                style={{ height: 44, width: 148, marginBottom: 50 }}
            />
            <InputComponent placeholder={' User'} icon={'person'} secure={false} />
            <InputComponent placeholder={' Password'} icon={'lock'} secure={true} />
            <Button
                title="Login"
                buttonStyle={styles.loginButton}
            />
        </View>
    );
}

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const styles = StyleSheet.create({

    loginBox: {
        backgroundColor: '#fff',
        height: height * 0.55,
        width: width - 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 60
    },
    loginButton: {
        width: width - 50 - 120,
        backgroundColor: '#009821',
        marginTop: 30,
        borderRadius: 0
    }
});
