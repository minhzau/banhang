import React from 'react';
import { View, ImageBackground, Image, Text, StyleSheet } from 'react-native';

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/hinhnen2.jpg')}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logo.jpg')}
          style={styles.logo}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: 70, // Yêu cầu căn chỉnh tùy theo vị trí bạn muốn
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  buttonsContainer: {
    width: '100%',
    padding: 20,
  },
  button: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65', // Màu đỏ
    marginBottom: 10,
    justifyContent: 'center', // Căn chỉnh nội dung theo chiều dọc
    alignItems: 'center', // Căn chỉnh nội dung theo chiều ngang
  },
  buttonText: {
    color: 'white', // Màu chữ
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
