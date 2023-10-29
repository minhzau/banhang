import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const OnBoring = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/img1.png')} style={styles.backgroundImage} />
      <View style={styles.content}>
        <Image source={require('../assets/Vector1.png')} style={styles.iconImage} />
        <Text style={styles.welcomeText}>Welcome 
        {'\n'} to our store </Text>

        <Text style={styles.textContent}>Get your groceries in as fast as one hour </Text>

        <TouchableOpacity style={styles.getStartedButton}>
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.iconImage2}>
        <Image source={require('../assets/Vector.png')} />
      </View>
    </View>
  );
}

export default OnBoring;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  content: {
    alignItems: 'center',
  },
  iconImage: {
    width: 50,
    marginTop: 150,
    marginRight: 10,
  },
  iconImage2: {
    marginRight: -30,
    position: 'relative',
    marginTop: -280,
  },
  welcomeText: {
    color: 'white',
    fontSize: 50,
    marginTop: 5,
  },
  textContent: {
    color: 'white',
    fontSize: 16,
    marginTop: 5,
    color: "#c6c6c6",
  },
  getStartedButton: {
    backgroundColor: 'green', // Màu nền xanh lá
    padding: 10, // Độ dày viền xung quanh nút
    borderRadius: 10, // Độ cong góc của nút
    marginTop: 10, // Khoảng cách giữa nút và văn bản "Get Started"
    width: 353,
    height:67,
  },
  getStartedText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop:10

  },
});
