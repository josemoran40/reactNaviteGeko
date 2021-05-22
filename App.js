import React from 'react';
import { StyleSheet, View } from 'react-native';
import Login from './components/login/loginScreen';
import Report from './components/report/report';

export default function App() {
  return (
    <View style={styles.container}>
      <Report />
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
