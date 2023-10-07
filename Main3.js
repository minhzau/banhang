import React from 'react';
import { View, Image, Text } from 'react-native'; // Import Image


const App = () => {
  return (
    <View style={styles.baoquat}>
      <View>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Featured</Text>   
      </View>
      <View style={styles.container}>
        <Image source={require('../assets/anh11.png')} style={[styles.image, styles.firstImage]} />
        <Text style={{fontSize: 14, position: 'absolute', marginTop: 280, fontWeight: 'bold'}}>$34.99</Text>
        <Text style={{fontSize: 12, position: 'absolute', marginTop: 300, }}>Sweet Never Salty Mini Dress</Text>
        <Image source={require('../assets/anh12.png')} style={[styles.image, styles.firstImage]} /> 
        <Text style={{fontSize: 14, position: 'absolute', marginTop: 280, marginLeft: 200, fontWeight: 'bold'}}>$24.99</Text>
        <Text style={{fontSize: 12, position: 'absolute', marginTop: 300, marginLeft: 200,}}>Aiyana Ruched Mini Dress</Text>
        <Image source={require('../assets/anh13.png')} style={[styles.image, styles.firstImage]} /> 
      </View>

      <View>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 90}}>Best Sellers</Text>    
      </View>
      <View style={styles.container}>
        <Image source={require('../assets/anh14.png')} style={[styles.image, styles.firstImage]} />
        <Text style={{fontSize: 14, position: 'absolute', marginTop: 280, fontWeight: 'bold'}}>$29.99</Text>
        <Text style={{fontSize: 12, position: 'absolute', marginTop: 300, }}>Abigati Ruched Mini Dress - Jade</Text>
        <Image source={require('../assets/anh15.png')} style={[styles.image, styles.firstImage]} /> 
        <Text style={{fontSize: 14, position: 'absolute', marginTop: 280, marginLeft: 200, fontWeight: 'bold'}}>$29.99</Text>
        <Text style={{fontSize: 12, position: 'absolute', marginTop: 300, marginLeft: 200,}}>Leilah Shirt Dress -Leopard</Text>
      </View>
      
    </View>
  );
};

const styles = {
    baoquat: {
        padding: 20,
      },
    container: {
      flexDirection: 'row', // Xếp ảnh theo hàng ngang
      justifyContent: 'space-between', // Canh ảnh đều khoảng cách
    //   paddingHorizontal: 20, // Khoảng cách lề trái và phải
      marginTop: 20, // Khoảng cách từ top
    },
    image: {
      width: 180, // Kích thước ảnh theo chiều ngang
      height: 270, // Kích thước ảnh theo chiều cao
      resizeMode: 'cover', // Đảm bảo ảnh không bị méo
    },
    firstImage: {
        marginRight: 20, // Khoảng cách giữa ảnh thứ nhất và thứ hai
    },
    lastImage: {
        marginLeft: 20, // Khoảng cách giữa ảnh thứ ba và thứ hai
    },
    // container2: {
    //     flexDirection: 'row', // Xếp ảnh theo hàng ngang
    //     justifyContent: 'space-between', // Canh ảnh đều khoảng cách
    //     paddingHorizontal: 20, // Khoảng cách lề trái và phải
    //     marginTop: 300, // Khoảng cách từ top
    //     marginLeft: 50,
    //   },
  };

export default App;
