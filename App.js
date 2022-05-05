import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TopTabNavigator from "./Navigators/TopBarNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { IconButton, Colors } from 'react-native-paper';


export default function App() {
  return (
    <SafeAreaProvider>
      <Text style={styles.head}>ChatHive
      
      </Text>
      <View style={styles.icon}>
      <IconButton 
    icon="account-plus"
    color={Colors.red600}
    size={28}
    onPress={() => alert('Pressed')}
  />
  </View>
      <TopTabNavigator ></TopTabNavigator>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  head: {
    paddingRight: 287,
   
    paddingTop: 57,
    paddingLeft: 10,
    textDecorationColor: "red",
    fontSize: 23,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#25D366",
    paddingBottom: 20,
    position: 'absolute',
    
    
   
    
  },
  icon: {
    
    paddingTop: 46,
    paddingLeft: 310,

   
    
  },
  
});
