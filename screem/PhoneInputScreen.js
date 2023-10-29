import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CountryPicker from 'react-native-country-picker-modal';

function PhoneInputScreen() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneChange = (text) => {
    // Đảm bảo rằng số điện thoại chỉ chứa chữ số
    const cleanedText = text.replace(/[^0-9]/g, '');
    setPhoneNumber(cleanedText);
  };
  
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };    
  
  const handleSubmit = () => {
    // Xử lý logic khi người dùng nhấn nút "Submit"
    console.log('Số điện thoại đã nhập:', phoneNumber);
  };

  return (
    <View style={styles.container}>
        
        <Text style={styles.tee}>Enter your mobile number</Text>
      <View style={styles.countryPickerContainer}>
        <CountryPicker
          withFlag
          withFilter
          withAlphaFilter
          withCallingCode
          withEmoji
          countryCode={selectedCountry?.cca2}
          onSelect={handleCountrySelect}
          containerButtonStyle={styles.countryPickerButton}
        />
      </View>
      <Text style={styles.label}>Mobile Number</Text>
      <TextInput 
        placeholder="Số điện thoại của bạn"
        keyboardType="numeric"
        value={phoneNumber}
        onChangeText={handlePhoneChange}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button}>
        <Icon name="chevron-right" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 100,
    marginLeft: 40,
  },
  countryPickerContainer: {
    width: 400,
    marginBottom: 10,
  },
  label: {
    color: 'gray',
    fontSize: 15,
    marginTop: -75, // Đẩy chữ "Mobile Number" lên cao hơn
    marginRight:220,
  },
  input: {
    fontSize: 17,
    height: 40,
    width: 330,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    marginTop: 280,
    marginLeft:250,
  },
  countryPickerButton: {
    padding: 10,
    marginLeft:-10,
  },
  tee: {
    fontWeight: 'bold', // Sử dụng 'bold' để làm đoạn văn bản trở nên đậm
    fontSize: 26,
    marginBottom: 80,
    marginRight: 40,
  },    
});

export default PhoneInputScreen;
