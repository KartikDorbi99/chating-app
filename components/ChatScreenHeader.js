import { StyleSheet, Text, View, FlatList,Image } from 'react-native'
import React from 'react'
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from '../stylesItem/MessageStyles';
import { Button } from 'react-native-web';
import { Appbar } from 'react-native-paper';
import { IconButton, Colors } from 'react-native-paper';


const Messages = [
  {
    id: '1',
    userName: 'Jenny Doe',
    userImg: require('../assets/users/user-3.jpg'),
   
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../assets/users/user-1.jpg'),
   
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../assets/users/user-4.jpg'),
   
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../assets/users/user-6.jpg'),
   
  },
  
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../assets/users/user-7.jpg'),
   
  },
];




const ChatScreenHeader = () => {


  
  return (
    <View style={styles.head}>
    <IconButton
    style={styles.fd}
    icon="keyboard-backspace"
    color={Colors.red500}
    size={20}
    onPress={() => console.log('Pressed')}
  />
  <Image style={styles.image} source={require('../assets/users/user-7.jpg')}/>
  <Text style={styles.text}>Christy Alex</Text>

  </View>
  )
}

export default ChatScreenHeader

const styles = StyleSheet.create({
  head: {
    margin: 4,
        backgroundColor: 'white',
        marginRight: 0,
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        
    
  },
  image: {
    width: 50,
  height: 50,
  
  borderRadius: 25,
    
    
  },
  fd:{
    marginLeft: -10
  },
  text:{
    fontSize: 14,
    marginLeft: 10,
    fontFamily: 'Lato-Regular',
    fontWeight:'bold',
    marginBottom: 16
  }
})