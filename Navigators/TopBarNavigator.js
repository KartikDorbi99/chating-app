import { View, Text, Button } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ChatScreen from "../screens/ChatScreen";
import ContactScreen from "../screens/ContactScreen";
import MyChats from "../screens/MyChats";


const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "white",
        lableStyle: { fontSize: 12 },
        style: {
          backgroundColor: "#25D366",
         
         
        },
      }}
    >
    <Tab.Screen
    name="My Chats"
    component={MyChats}
    options={{ tabBarLabel: "My Chats" }}
  />
      <Tab.Screen
        name="Chats"
        component={ChatScreen}
        options={{ tabBarLabel: "Chats" }}
      />

      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{ tabBarLabel: "Contact" }}
      />

   
    </Tab.Navigator>
  );
}

export default function TopBarNavigator() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
