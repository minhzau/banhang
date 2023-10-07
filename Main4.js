import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native'; // Import Image


const App = () => {
  return (
    <View style={styles.baoquat}>
      <View>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Best Sellers</Text>   
      </View>
      <View style={styles.container}>
        <Image source={require('../assets/anh14.png')} style={[styles.image, styles.firstImage]} />
        <Text style={{fontSize: 14, position: 'absolute', marginTop: 250, fontWeight: 'bold'}}>$29.99</Text>
        <Text style={{fontSize: 12, position: 'absolute', marginTop: 270, }}>Abigati Ruched Mini Dress - Jade</Text>
        <Image source={require('../assets/anh15.png')} style={[styles.image, styles.firstImage]} /> 
        <Text style={{fontSize: 14, position: 'absolute', marginTop: 250, marginLeft: 200, fontWeight: 'bold'}}>$29.99</Text>
        <Text style={{fontSize: 12, position: 'absolute', marginTop: 270, marginLeft: 200,}}>Leilah Shirt Dress -Leopard</Text>
        <Image source={require('../assets/anh13.png')} style={[styles.image, styles.firstImage]} /> 
      </View>   
      <View style={styles.container1}>
        <Image source={require('../assets/anh16.png')} style={[styles.image, styles.firstImage]} />
        <Text style={{fontSize: 14, position: 'absolute', marginTop: 250, fontWeight: 'bold'}}>$29.99</Text>
        <Text style={{fontSize: 12, position: 'absolute', marginTop: 270, }}>Abigati Ruched Mini Dress - Jade</Text>
        <Image source={require('../assets/anh17.png')} style={[styles.image, styles.firstImage]} /> 
        <Text style={{fontSize: 14, position: 'absolute', marginTop: 250, marginLeft: 200, fontWeight: 'bold'}}>$29.99</Text>
        <Text style={{fontSize: 12, position: 'absolute', marginTop: 270, marginLeft: 200,}}>Leilah Shirt Dress -Leopard</Text>
        <Image source={require('../assets/anh13.png')} style={[styles.image, styles.firstImage]} /> 
        {/* Button "Xem chi tiết" */}
        
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Brower All</Text>
        </TouchableOpacity>
      </View>  
    </View>
  );
};

const styles = {
    baoquat: {
        padding: 20,
        marginLeft: 10
      },
    container: {
      flexDirection: 'row', // Xếp ảnh theo hàng ngang
      justifyContent: 'space-between', // Canh ảnh đều khoảng cách
    //   paddingHorizontal: 20, // Khoảng cách lề trái và phải
      marginTop: 20, // Khoảng cách từ top
    },
    container1: {
        flexDirection: 'row', // Xếp ảnh theo hàng ngang
        justifyContent: 'space-between', // Canh ảnh đều khoảng cách
      //   paddingHorizontal: 20, // Khoảng cách lề trái và phải
        marginTop: 70, // Khoảng cách từ top
      },
    image: {
      width: 160, // Kích thước ảnh theo chiều ngang
      height: 240, // Kích thước ảnh theo chiều cao
      resizeMode: 'cover', // Đảm bảo ảnh không bị méo
    },
    firstImage: {
        marginRight: 20, // Khoảng cách giữa ảnh thứ nhất và thứ hai
    },
    lastImage: {
        marginLeft: 20, // Khoảng cách giữa ảnh thứ ba và thứ hai
    },
    button: {
        backgroundColor: 'white',
        padding: 10,
        alignItems: 'center',
        marginTop: 90,
        borderWidth: 1, // Độ rộng viền
        borderColor: 'black', // Màu viền (có thể thay đổi thành màu khác)
        borderRadius: 7, // Độ cong góc của viền (nếu bạn muốn)
        height: 50
    },
    buttonText: {
        fontWeight: 'bold',
    },
  };

export default App;
