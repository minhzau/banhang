import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
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

  const renderScanner = () => (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <TouchableOpacity
          style={styles.scanAgainButton}
          onPress={() => setScanned(false)}
        >
          <Text style={styles.scanAgainText}>Scan Again</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  const renderCameraPermissionDenied = () => (
    <View style={styles.container}>
      <Text>No access to camera</Text>
    </View>
  );

  const renderCameraPermissionPending = () => (
    <View style={styles.container}>
      <Text>Requesting camera permission...</Text>
    </View>
  );

  return (
    <>
      {hasPermission === null ? renderCameraPermissionPending() : (
        hasPermission ? renderScanner() : renderCameraPermissionDenied()
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  scanAgainButton: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    margin: 10,
    alignSelf: 'center',
  },
  scanAgainText: {
    fontSize: 18,
    color: 'blue',
  },
});
