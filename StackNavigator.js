import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import Cart from "./screens/Cart";
import Scan from "./screens/Scan";
import { NavigationContainer } from '@react-navigation/native';

const StackNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function BottonTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="blue" />
              ) : (
                <AntDesign name="home" size={24} color="black" />
              ),
          }}
        />

<Tab.Screen
          name="Scan"
          component={Scan}
          options={{
            tabBarLabel: "Scan",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="scan-circle" size={24} color="Blue" />
              ) : (
                <Ionicons name="scan" size={24} color="black" />
              ),
          }}
        />

<Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarLabel: "Cart",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="shopping-cart" size={24} color="orange" />
              ) : (
                <AntDesign name="shoppingcart" size={24} color="black" />
              ),
          }}
        />


      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Main" component={BottonTabs} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
