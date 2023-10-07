import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const LandingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/anhmenu.jpg')}
        style={styles.icon}
      />
      <Text style={styles.title}>Welcome to our restaurant</Text>
      <Text style={styles.description}>Order food...</Text>
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Log In')}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('Sign Up')}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 300,
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 18,
    marginTop: 5,
  },
  loginButton: {
    backgroundColor: 'green',
    borderRadius: 20,
    padding: 20,
    marginTop: 50,
    width: 300,
    justifyContent: 'center',
  alignItems: 'center', // add this line
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
  },
  signUpButton: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    marginTop: 20,
    width: 300,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center', // add this line
  },
  signUpButtonText: {
    color: 'black',
    fontSize: 18,
  },
});

export default LandingScreen;