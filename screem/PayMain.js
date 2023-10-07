import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'; // Import các thành phần từ React Native
import PaymentScreen from './PaymentScreen'; // Import màn hình thanh toán
import { useState } from 'react';



const OverlayScreen = ({ onClose }) => {
    const [isPaymentScreenVisible, setPaymentScreenVisible] = useState(false);

  const overlayStyle = {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const contentStyle = {
    backgroundColor: 'white',
    marginTop: 70,
    padding: 50,
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 10,
  };

  const heartStyle = {
    marginTop: -50,
    width: 400,
    height: 690,
    resizeMode: 'cover',
  };

  const tickButtonStyle = {
    color: 'white',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    cursor: 'pointer',
    with: 50,
    marginTop: -40,
  };


  const ratingStyle = {
    width: 30,
    height: 40,
    marginTop: -27,
    marginLeft: -10,
  }

  const addToBagButtonStyle = {
    backgroundColor: 'black',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
    width: 150,
    marginTop: 20,
  };

  const applePayButtonStyle = {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 2   , // Điều chỉnh khoảng cách từ phía dưới
    right: 4, // Điề
    borderColor: 'black', // Màu đường viền là đen
    borderWidth: 1, // Độ rộng của đường viền
    width: 150,
  };


  const containerStyle = {
    position: 'relative', // Đảm bảo container là relative để các thành phần con có thể được định vị bên trong
  };

  const headerTextStyle = {
    color: 'black',
    fontSize: 20,
    marginTop: 15,
  };
const subTextStyle = {
    color: 'black',
    fontSize: 16,
    marginTop: 15,
}

const handleApplePayClick = () => {
    // Hiển thị màn hình thanh toán khi nhấp vào nút "Apple Pay"
    setPaymentScreenVisible(true);
  };
  
  return (
    <View style={overlayStyle}>
      <View style={contentStyle}>
        <Image
          source={require('../assets/anhnen.png')} // Đường dẫn đến hình trái tim
          style={heartStyle}
        />
        <TouchableOpacity style={tickButtonStyle} onPress={onClose}>
          <Text style={{position: 'absolute', top: -70,right: 0}}>✔</Text>
          <Image
          source={require('../assets/anhhong.png')} // Đường dẫn đến hình trái tim
          style={{position: 'absolute'
          , top: -10,
          right: 0,
          width: 18,
          height: 20,
          marginTop: -30,
          marginLeft: -10,}}
        />
         <Image
          source={require('../assets/xs.png')} // Đường dẫn đến hình trái tim
          style={{position: 'absolute'
          , top: -40,
          right: 30,
          width: 20,
          height: 20,
          marginTop: -30,
          marginLeft: -10,}}
        />

        <Image
          source={require('../assets/s.png')} // Đường dẫn đến hình trái tim
          style={{position: 'absolute'
          , top: -15,
          right: 30,
          width: 20,
          height: 20,
          marginTop: -30,
          marginLeft: -10,}}
        />

<Image
          source={require('../assets/M.png')} // Đường dẫn đến hình trái tim
          style={{position: 'absolute'
          , top: 15,
          right: 30,
          width: 20,
          height: 20,
          marginTop: -30,
          marginLeft: -10,}}
        />
         <Image
          source={require('../assets/L.png')} // Đường dẫn đến hình trái tim
          style={{position: 'absolute'
          , top: 45,
          right: 30,
          width: 20,
          height: 20,
          marginTop: -30,
          marginLeft: -10,}}
        />
         <Image
          source={require('../assets/anhtiep.png')} // Đường dẫn đến hình trái tim
          style={{position: 'absolute'
          , top: 20,
          right: 0,
          width: 20,
          height: 20,
          marginTop: -30,
          marginLeft: -10,}}
        />
            


          <Image
          source={require('../assets/tim.png')} // Đường dẫn đến hình trái tim
          style={ratingStyle}
        />


<View style={containerStyle}>
<Text style={headerTextStyle}>Sweet Never Salty Mini Dress</Text>
<Text style={subTextStyle}>$34.99</Text>

<View style={{ flexDirection: 'row' }}>
<TouchableOpacity style={addToBagButtonStyle} onPress={() => console.log('Add to Bag')}>
          
          <Text style={{ color: 'white' }}>Add to Bag</Text>
        </TouchableOpacity>

        {/* Nút "Apple Pay" */}
        <TouchableOpacity style={applePayButtonStyle} onPress={() => console.log('Apple Pay')}>
          <Text style={{ color: 'black' }}>Apple Pay</Text>
        </TouchableOpacity>
        
        </View>
        </View>





        </TouchableOpacity>
      </View>
      {isPaymentScreenVisible && <PaymentScreen />}

    </View>
  );
};

export default OverlayScreen;
