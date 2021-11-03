import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
export default function Sign(params) {
  const navigation = params.navigation;
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{
          transform: [{ rotate: "180deg" }],
          borderRadius: 40,
          marginBottom: 120,
          width: 200,
          height: 200,
        }}
        source={{
          uri: "https://cdn.arstechnica.net/wp-content/uploads/2019/02/9-1-800x527.jpg",
        }}
      />
      <Text style={{ fontSize: 30, color: "grey" }}>Welcome to</Text>
      <Text style={{ fontSize: 40, fontWeight: "bold" }}>Amazing Shoe Shop</Text>
      {/* <View style={{}}>
        <TextInput
          style={{
            padding: 15,
            borderRadius: 10,
            borderWidth: 0.7,
            paddingHorizontal: 60,
          }}
          placeholder="Enter your username"
        />
      </View> */}
      {/* <View style={{ marginTop: 10,}}>
        <TextInput
          secureTextEntry={true}
          onChangeText={(
            e
          )=> {
            console.log(e)
          }}
          style={{
            padding: 15,
            borderRadius: 10,
            borderWidth: 0.7,
            paddingHorizontal: 60,
          }}
          placeholder="Enter your password"
        />
      </View> */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "black",
        }}
      >
        <AntDesign name="apple1" size={24} color="white" />
        <Text style={{ paddingLeft: 10, color: "white" }}>Sign</Text>
      </TouchableOpacity>
    </View>
  );
}