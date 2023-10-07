import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'; // Sử dụng các thành phần React Native

import OverlayScreen from './screem/PayMain';

function App() {
  const [overlayVisible, setOverlayVisible] = useState(true); // Ban đầu đặt overlayVisible thành true để hiển thị overlay

  return (
    <View style={styles.container}>
      {overlayVisible && <OverlayScreen onClose={() => setOverlayVisible(false)} />}
      {/* Đóng overlay khi onClose được gọi */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
});

export default App;
