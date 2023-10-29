import React from 'react';
import { StyleSheet, View } from 'react-native';
import OnBoring from './screen/onboring'; // Import tệp onboring.js

export default function App() {
  return (
    <View style={styles.container}>
      <OnBoring /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
