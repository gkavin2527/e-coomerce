import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Stack } from 'expo-router'
import {useHeaderHeight} from '@react-navigation/elements'
import axios from 'axios'
import { NotificationType } from '@/types/type'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import Animated, { FadeInDown } from 'react-native-reanimated'

type Props = {}

const NotificationsScreen = (props: Props) => {

const [notification,setNotification] = useState<NotificationType[]>([])

  const getNotifications = async()=>{
    const URL=`http://192.168.0.100:8000/notifications`
    const response = await axios.get(URL)

    console.log("Notification Response:",response.data)
    setNotification(response.data)
  }

  useEffect(()=>{
    getNotifications()
      },[])

  const headerheight = useHeaderHeight()
  return (
    <>
     <Stack.Screen options={{headerShown:true , headerTransparent:true}}/>
    <View style={[styles.container , {marginTop:headerheight}]}>
      <FlatList data={notification} keyExtractor={(item)=>item.id.toString()} renderItem={({item,index})=>(
        <Animated.View style={styles.notificationWrapper} entering={FadeInDown.delay(300 + index * 100).duration(500)}>
          <View style={styles.notificationIcon}>
            <Ionicons name="notifications-outline" size={20} color={Colors.black}/>
          </View>
          <View style={styles.notificationInfo}>
            <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
            <Text style={styles.notificationTitle}>{item.title}</Text>
            <Text style={styles.notificationMessage}>{item.timestamp}</Text>
            </View>
          <Text style={styles.notificationMessage}>{item.message}</Text>
          </View>
        </Animated.View>
      )}/>
    </View>
    </>
  )
}
export default NotificationsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:20,
  },
  notificationWrapper:{
    flexDirection:'row',
    alignItems:'center',
    padding:10,
    marginBottom:10,
    borderWidth:StyleSheet.hairlineWidth,
    borderColor:Colors.lightGray,
    backgroundColor:Colors.extraLightGray,
    borderRadius:5,
  },
  notificationIcon:{
    width:40,
    height:40,
    justifyContent:'center',
    alignItems:'center'
  },
  notificationInfo:{
    flex:1
  },
  notificationTitle:{
    fontSize:16,
    fontWeight:'500',
    color:Colors.black
  },
  notificationMessage:{
    fontSize:14,
    color:Colors.gray,
    marginTop:5,
    lineHeight:20
  }

})