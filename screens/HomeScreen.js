import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftScreen}>
        <Text style={[styles.headerWelcome, styles.boldText]}>Hello</Text>
        <Text style={styles.headerFooter}>Minh</Text>
        <Text style={styles.subText}>Your Insights</Text>
        <View style={[styles.squareRow, { marginTop: 10 }]}>
          <Image
            source={require('../assets/anh1.png')}
            style={styles.square}
          />
          <Image
            source={require('../assets/anh2.png')}
            style={styles.square}
          />
        </View>
        <View style={styles.squareRow}>
          <Image
            source={require('../assets/anh3.png')}
            style={styles.square}
          />
          <Image
            source={require('../assets/anh4.png')}
            style={styles.square}
          />
        </View>
        
      </View>
      
      <View style={styles.topRight}>
        <Image
          source={{ uri: 'https://www.shutterstock.com/image-vector/user-icon-260nw-523867123.jpg' }}
          style={styles.userImage}
        />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Display children components in a row
    backgroundColor: 'white', // Change the background color to white
  },
  leftScreen: {
    flex: 1,
    padding: 20,
  },
  topRight: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  headerWelcome: {
    fontSize: 25,
  },
  headerFooter: {
    fontSize: 20,
    marginRight: 20,
    marginBottom: 25, // Add margin-bottom to create space
  },
  subText: {
    fontSize: 20,
    marginTop: 10, // Add margin-top for spacing
    marginBottom: 20,
  },
  squareRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1, // Distribute available space equally
    marginTop: -150,
  },
  square: {
    width: '48%', // Set width to 48% to allow for spacing
    aspectRatio: 1, // Maintain aspect ratio (1:1 for a square)
    borderRadius: 10,
  },
  thuyText: {
    fontSize: 20,
    marginBottom: 10,
  },
  boldText: {
    fontWeight: 'bold', // Set font weight to bold
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25, // To make it a circle
  },
});

export default HomeScreen;
