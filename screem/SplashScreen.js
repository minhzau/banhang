import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img1} source={require('../assets/Vector.png')} />
      <Image style={styles.img2} source={require('../assets/Vector_1.png')} />
      <Image style={styles.img3} source={require('../assets/Group.png')} />
      <Text style={styles.text}>online groceriet</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
        // alignItems: 'center',
    },
    img1: {
        marginLeft: 90,
        marginBottom: 30,
    },
    img2: {
        position: 'absolute',
        left: 118, // Điều chỉnh giá trị right để di chuyển ảnh sang trái
        bottom: 494,
    },
    img3: {
        position: 'absolute',
        marginLeft: 160,
        bottom: 470,
    },
    text: {
        fontSize: 16,
        color:"white",
        marginLeft: 160,
        position: 'absolute',
        bottom: 445,
        letterSpacing: 5, // Điều chỉnh giá trị letterSpacing để làm cho chữ rộng ra hơn
    }
});

export default SplashScreen;
