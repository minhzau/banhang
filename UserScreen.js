import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from "react-native";

const UserScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "User Details",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPhoneValid = (phoneNo) => {
    const phoneRegex = /^\d+$/;
    return phoneRegex.test(phoneNo);
  };

  const validateEmail = () => {
    if (!isEmailValid(email)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const validatePhoneNo = () => {
    if (!isPhoneValid(phoneNo)) {
      setPhoneError("Invalid phone number format");
    } else {
      setPhoneError("");
    }
  };

  const finalStep = () => {
    if (!firstName || !lastName || !email || !phoneNo || emailError || phoneError) {
      Alert.alert(
        "Invalid Details",
        "Please enter valid information in all fields",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    } else {
      navigation.navigate("Confirmation", {
        oldPrice: route.params.oldPrice,
        newPrice: route.params.newPrice,
        name: route.params.name,
        children: route.params.children,
        adults: route.params.adults,
        rating: route.params.rating,
        startDate: route.params.startDate,
        endDate: route.params.endDate,
      });
    }
  };

  return (
    <>
      <View style={{ padding: 20 }}>
        <View style={{ flexDirection: "column", gap: 10 }}>
          <Text>First Name</Text>
          <TextInput
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
            style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
          />
        </View>

        <View style={{ flexDirection: "column", gap: 10, marginTop: 10 }}>
          <Text>Last Name</Text>
          <TextInput
            value={lastName}
            onChangeText={(text) => setLastName(text)}
            style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
          />
        </View>

        <View style={{ flexDirection: "column", gap: 10, marginTop: 10 }}>
          <Text>Email</Text>
          <TextInput
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              setEmailError("");
            }}
            onBlur={validateEmail}
            style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
          />
          {emailError ? <Text style={{ color: "red" }}>{emailError}</Text> : null}
        </View>

        <View style={{ flexDirection: "column", gap: 10, marginTop: 10 }}>
          <Text>Phone no</Text>
          <TextInput
            value={phoneNo}
            onChangeText={(text) => {
              setPhoneNo(text);
              setPhoneError("");
            }}
            onBlur={validatePhoneNo}
            style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
          />
          {phoneError ? <Text style={{ color: "red" }}>{phoneError}</Text> : null}
        </View>
      </View>

      <Pressable
        style={{
          backgroundColor: "white",
          marginTop: "auto",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 40,
          padding: 10,
        }}
      >
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 4,
              gap: 8,
            }}
          >
            <Text
              style={{
                color: "red",
                fontSize: 20,
                textDecorationLine: "line-through",
              }}
            >
              {route.params.oldPrice * route.params.adults}
            </Text>
            <Text style={{ fontSize: 20 }}>
              Rs {route.params.newPrice * route.params.adults}
            </Text>
          </View>
          <Text>
            You Saved {route.params.oldPrice - route.params.newPrice} rupees
          </Text>
        </View>
        <Pressable
          onPress={finalStep}
          style={{ backgroundColor: "#007FFF", padding: 10, borderRadius: 5 }}
        >
          <Text style={{ textAlign: "center", color: "white", fontSize: 15 }}>
            Final Step
          </Text>
        </Pressable>
      </Pressable>
    </>
  );
};

export default UserScreen;

const styles = StyleSheet.create({});
