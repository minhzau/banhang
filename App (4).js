import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, Alert} from 'react-native';
import { Button, Appbar } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';


const HomeScreen = ({ navigation }) => {
  const showAlert = () => {
    Alert.alert(
      '“Shopertino” Would Like to Send You Notifications',
      'Notifications may include alerts, sounds and icon badges. These can be configured in Settings.',
      [
        {
          text: 'Dont Allow', // Lựa chọn 1
          onPress: () => console.log('Hành động đã hủy'),
          style: 'cancel',
        },
        {
          text: 'OK', // Lựa chọn 2
          onPress: () => console.log('Hành động đã xác nhận'),
        },
      ],
      { cancelable: false }
    );
  };
  return (
    <SafeAreaProvider>
    <View style={{ flex: 1}}>
      <Appbar.Header>
      <Icon name="bars" size={30} color="black" />
        <Appbar.Content
        title="Shopertino"
        style={{ alignItems: 'center' }} />
        <Appbar.Action
          icon="cart"
          onPress={() => navigation.navigate('Cart')}
        />
      </Appbar.Header>
      <Image
          source={require('./assets/anh2.jpg')} // Thay đổi đường dẫn đến hình ảnh của bạn
        />
      <Text style={styles.text}>New Arrivals</Text>
      <Image
          source={require('./assets/anh.jpg')} // Thay đổi đường dẫn đến hình ảnh của bạn
          style={{ width: 250, height: 400, marginLeft: 78 }} // Tùy chỉnh kích thước của hình ảnh
        />
      <Text style={styles.text2}>Sweet Never Salty Mini Dress</Text>
      <Text style={styles.text3}>$34.99</Text>
      <Text style={styles.text4}>Featured</Text>
      <View styles={styles.a}>
      <Image
        source={require('./assets/anh.jpg')} // Đường dẫn đến hình ảnh 3
        style={styles.image}
        resizeMode="contain" // Sử dụng resizeMode="contain" để làm cho chiều rộng ngang bằng nhau
      />
      <Image
        source={require('./assets/anh.jpg')} // Đường dẫn đến hình ảnh 3
        style={styles.image}
        resizeMode="contain" // Sử dụng resizeMode="contain" để làm cho chiều rộng ngang bằng nhau
      />
      <Image
        source={require('./assets/anh.jpg')} // Đường dẫn đến hình ảnh 3
        style={styles.image}
        resizeMode="contain" // Sử dụng resizeMode="contain" để làm cho chiều rộng ngang bằng nhau
      />
      </View>
    </View>
    <View style={styles.container}>
      <Button title="Hiển thị thông báo" onPress={showAlert} />
    </View>
    </SafeAreaProvider>
  );
};
  const styles = StyleSheet.create({
  
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'black', // Màu văn bản
      textAlign: 'center', // Canh lề
      marginBottom: 20,
      marginTop: 20,
    },
    text2: {
      fontSize:20,
      textAlign: 'center', // Canh lề
      marginBottom: 20,
      marginTop: 20,
    },
    text3: {
      fontSize:20,
      textAlign: 'center', // Canh lề
      color:'gray',
    },
    text4: {
      fontSize:20,
      color:'black',
      fontWeight: 'bold',
      marginLeft:10,
    },
    image: {
      marginTop:20,
      marginLeft:20,
      width: 120, // Độ rộng cố định cho tất cả các hình ảnh
      height: 180, // Độ cao cố định cho tất cả các hình ảnh
    },
    a: {
      flex: 1,
      flexDirection: 'row', // Hiển thị hình ảnh theo hàng ngang
      justifyContent: 'space-between', // Cách đều các hình ảnh
      alignItems: 'center', // Canh giữa theo chiều dọc
    },
  });


export default HomeScreen;