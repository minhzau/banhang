import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './StackNavigator';
import { Camera } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    Alert.alert('Scan Result', `Scan Result: ${data}`, [
      { text: 'OK', onPress: () => setScanned(false) },
    ]);
  };

  if (hasPermission === null) {
    return <Text>Requesting camera permission...</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <>
      <StackNavigator/>

      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
});
