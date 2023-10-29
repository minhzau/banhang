import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Verification = () => {
    const [verificationCode, setVerificationCode] = useState('');

    const handleVerificationCodeChange = (text) => {
      // Xử lý khi người dùng thay đổi mã xác thực
      setVerificationCode(text);
    };
  
    const handleVerifyCode = () => {
      // Xử lý khi người dùng xác thực mã
      // Ở đây, bạn có thể gửi mã xác thực đến máy chủ hoặc dịch vụ xác thực
      // và kiểm tra tính hợp lệ của mã.
    };

  return (
    <View style={styles.container}>
        <Text style={styles.header}>Enter your 4-digit code</Text>
        <Text style={styles.text}>Code</Text>
        <View style={styles.container1}>
            <TextInput
                style={styles.input}
                placeholder="- - - -"
                onChangeText={handleVerificationCodeChange}
                value={verificationCode}
                keyboardType="number-pad" // Hiển thị bàn phím số
            />
            {/* <Button title="Xác thực" onPress={handleVerifyCode} /> */}
        </View>
        <Text style={styles.text1}>Resent code</Text>
        <View>
        <Image style={styles.img1} source={require('../assets/Vector (8).png')} />
        {/* <Image style={styles.img2} source={require('../assets/Frame.png')} /> */}
        </View>
        <TouchableOpacity style={styles.button}>
        <Icon name="chevron-right" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 150,
    marginLeft: 30,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  text: {
    marginTop: 50,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
  },
  input: {
    width: '100%',
    height: 40,
    // borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
    borderBottomWidth: 1, // Độ rộng của nét gạch ngang
    borderBottomColor: 'gray', // Màu của nét gạch ngang
  },
  container1: {
    marginTop: 30,
    width: '90%', // Điều chỉnh giá trị width tại đây
    height: 100,
  },
  text1: {
    fontSize: 22,
    color: 'green',
    marginTop: 150,
  },
  img1: {
    width: 100,
    height: 100,
   left:100,
   position: 'absolute',
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    marginTop: -50,
    marginLeft: 270,
    // marginBottom: -90,
  },
});

export default Verification;
