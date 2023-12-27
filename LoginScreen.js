import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
  Image
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

//   console.log(userCredentials.user.stsTokenManager.accessToken);
//   AsyncStorage.setItem(
//     "tokenUser",
//     userCredentials.user.stsTokenManager.accessToken
//   );

//   useEffect(() => {
//     const getMyObject = async () => {
//       try {
//         const jsonValue = await AsyncStorage.getItem("tokenUser");
//         console.log("jsonValue");
//         if (jsonValue) {
//           navigation.replace("Main");
//         }
//       } catch (e) {
//         console.log(e);
//       }
//     };
//     getMyObject();
//   }, [token]);

const login = () => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("user credential", userCredential);
      const user = userCredential.user;
      console.log("user details", user);
    })
    .catch((error) => {
      // Xử lý lỗi đăng nhập và hiển thị thông báo
      console.log("Login error:", error);
      Alert.alert("Lỗi", "Tên đăng nhập hoặc mật khẩu không chính xác.");
    });
}

  useEffect(() => {
    try {
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          navigation.replace("Main");
        }
      });

      return unsubscribe;
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        padding: 10,
        alignItems: "center",
      }}
    >
      <KeyboardAvoidingView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100,
          }}
        >
          <Text style={{ color: "#003580", fontSize: 17, fontWeight: "700" }}>
            Sing In
          </Text>

          <Text style={{ marginTop: 15, fontSize: 18, fontWeight: "500" }}>
            Sing In to Your Account
          </Text>

          <View style={{ marginTop: 50 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Email
            </Text>

            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Our email id"
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
                // outline: 'none',
                transition: 'all 0.3s', // Chuyển đổi 0.3 giây
                
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
                // outline: 'none',
                transition: 'all 0.3s', 
              }}
            />
          </View>
        </View>
        <Pressable
        onPress={login}
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
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            Login
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("Register")}
          style={{ marginTop: 20 }}
        >
          <Text style={{ textAlign: "center", color: "gray", fontSize: 17 }}>
            Don't have an account? Sign up
          </Text>
          
        <Image
                style={{ width: 200, height: 50, resizeMode: "cover",marginLeft:50,marginTop:30 }}
                source={{
                  uri: "https://assets.stickpng.com/thumbs/5a32a821cb9a85480a628f8f.png",
                }}
        />
        </Pressable>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
