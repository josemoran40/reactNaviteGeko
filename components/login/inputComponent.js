import React from 'react';
import { StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';

export default function InputComponent({ placeholder, icon, secure }) {
    return (
        <Input
            placeholder={placeholder}
            leftIcon={{ type: 'material', name: icon, color: '#8D8D8D' }}
            style={styles.inputStyle}
            secureTextEntry={secure}
            inputContainerStyle={{ borderBottomWidth: 0, marginBottom: -25, padding: 0 }}
            containerStyle={styles.containerStyle}
        />
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        borderColor: '#CACACA',
        borderWidth: 1,
        marginVertical: 5
    }
});
