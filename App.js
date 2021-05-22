import React from 'react';
import { StyleSheet, View } from 'react-native';
import Calculator from './components/calculator/calculator';
import Login from './components/login/loginScreen';
import Report from './components/report/report';

export default function App() {
  return (
    <View style={styles.container}>
      <Calculator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
