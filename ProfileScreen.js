import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Profile',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
      },
      headerStyle: {
        backgroundColor: '#003580',
        height: 110,
        borderBottomColor: 'transparent',
        shadowColor: 'transparent',
      },
    });
  }, [navigation]);


  const handleLogout = () => {
    // Thực hiện các bước logout nếu cần
  
    // Chuyển hướng về màn hình RegisterScreen hoặc màn hình đăng nhập (tuỳ thuộc vào yêu cầu của bạn)
    navigation.reset({
      index: 0,
      routes: [{ name: 'Register' }],  // Thay 'Register' bằng tên màn hình bạn muốn chuyển hướng
    });
  };
  
  

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.settingTile}>
        <Text style={styles.text}>Account Settings</Text>
        <AntDesign name="right" size={20} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingTile}>
        <Text style={styles.text}>Privacy</Text>
        <AntDesign name="right" size={20} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingTile}>
        <View style={styles.rowWithSpace}>
          <Image source={require('../assets/images/cờ.png')} style={styles.image} />
          <Text style={styles.text}>Language</Text>
        </View>
        <AntDesign name="right" size={20} color="black" />
      </TouchableOpacity>


      <TouchableOpacity style={styles.settingTile}>
        <View style={styles.rowWithSpace}>
          <Image source={require('../assets/images/sp.jpg')} style={styles.image} />
          <Text style={styles.text}>Support</Text>
        </View>
        <AntDesign name="right" size={20} color="black" />
      </TouchableOpacity>


      <TouchableOpacity style={styles.settingTile} onPress={handleLogout}>
        <View style={styles.rowWithSpace}>
          <Image source={require('../assets/images/logout.jpg')} style={styles.image} />
          <Text style={styles.text}>Log Out</Text>
        </View>
      </TouchableOpacity>



    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
  settingTile: {
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    paddingVertical: 20, // Thay đổi giá trị paddingVertical
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowWithSpace: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'black',
    marginLeft: 5,
  },
  image: {
    width: 40,
    height: 30,
    resizeMode: 'contain',
  },
});

export default ProfileScreen;
