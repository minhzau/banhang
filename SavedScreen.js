import { StyleSheet, Text, View ,SafeAreaView,Pressable} from 'react-native'
import React ,{useLayoutEffect} from 'react'
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';

const SavedScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Saved",
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
  return (
    <View>
      <Text>SavedScreen</Text>
    </View>
  )
}

export default SavedScreen

const styles = StyleSheet.create({})