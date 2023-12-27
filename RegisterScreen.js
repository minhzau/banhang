import { StyleSheet, Text, View ,SafeAreaView,KeyboardAvoidingView,Pressable,TextInput, Alert,Image} from 'react-native'
import React ,{useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { setDoc, doc } from 'firebase/firestore';




const RegisterScreen = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [phone,setPhone] = useState("");
    const navigation = useNavigation();

    const register = () => {
        if(email === "" || password === "" || phone === "" ){
            Alert.alert(
                "Invalid Detials",
                "Please enter all the credentials",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
              );
        }
        createUserWithEmailAndPassword(auth,email,password).then((userCredentials) => {
           
            const user = userCredentials._tokenResponse.email;
            const uid = auth.currentUser.uid;

             setDoc(doc(db,"users",`${uid}`),{
                 email:user,
                 phone:phone
             })

             
          // Chuyển hướng đến màn hình đăng nhập
      navigation.navigate('Login');
    }).catch((error) => {
      Alert.alert("Registration Error", error.message, [
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
        },
      ]);
    });
  }


  
  return (
    <SafeAreaView  style={{
        flex: 1,
        backgroundColor: "white",
        padding: 10,
        alignItems: "center",
      }}>
    <KeyboardAvoidingView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100,
          }}
        >
          <Text style={{ color: "#003580", fontSize: 17, fontWeight: "700" }}>
            Register
          </Text>

          <Text style={{ marginTop: 15, fontSize: 18, fontWeight: "500" }}>
           Create an Account
          </Text>
        </View>

        <View style={{ marginTop: 50 }}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Email
            </Text>

            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Enter your email id"
              placeholderTextColor={"black"}
              style={{    
                fontSize: email ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,

                height: 60,
                
                padding: 16,
                paddingTop: 24,
                backgroundColor: 'white',
                borderWidth: 2,
                borderRadius: 8,
                outline: 'none',
                transition: 'all 0.3s', // C
              }}
            />
          </View>

          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Password
            </Text>

            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor={"black"}
              style={{
                fontSize: password ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,

                height: 60,
                
                padding: 16,
                paddingTop: 24,
                backgroundColor: 'white',
                borderWidth: 2,
                borderRadius: 8,
                outline: 'none',
                transition: 'all 0.3s', // C
              }}
            />
          </View>

          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Phone
            </Text>

            <TextInput
              value={phone}
              onChangeText={(text) => setPhone(text)}
              placeholder="Enter your Phone No"
              placeholderTextColor={"black"}
              style={{
                fontSize: password ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,

                height: 60,
                
                padding: 16,
                paddingTop: 24,
                backgroundColor: 'white',
                borderWidth: 2,
                borderRadius: 8,
                outline: 'none',
                transition: 'all 0.3s', // C
              }}
            />
          </View>
        </View>

        <Pressable
        onPress={register}
          style={{
            width: 200,
            backgroundColor: "#003580",
            padding: 15,
            borderRadius: 7,
            marginTop: 50,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Text style={{textAlign:"center",color:"white",fontSize:17,fontWeight:"bold"}}>Register</Text>
        </Pressable>

        <Pressable onPress={() => navigation.goBack()} style={{marginTop:20}}>
            <Text style={{textAlign:"center",color:"gray",fontSize:17}}>Already have an account? Sign In</Text>
        </Pressable>

        <Image
                style={{ width: 200, height: 50, resizeMode: "cover",marginLeft:50,marginTop:30 }}
                source={{
                  uri: "https://assets.stickpng.com/thumbs/5a32a821cb9a85480a628f8f.png",
                }}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})