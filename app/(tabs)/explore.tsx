import {  FlatList, StyleSheet, Text, View } from 'react-native'
import { useHeaderHeight } from '@react-navigation/elements';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { CategoryType } from '@/types/type';
import { Stack } from 'expo-router';
import { Image } from 'react-native';
import { Colors } from '@/constants/Colors';
import Animated, { FadeInDown } from 'react-native-reanimated';

type Props = {}

const ExploreScreen = (props: Props) => {

  const [categories,setCategories] = useState<CategoryType[]>([]);
  const headerheight = useHeaderHeight()

  const getCategories = async () => {
    const URL = `http://192.168.0.100:8000/categories`;
    console.log()
    const response = await axios.get(URL);
    setCategories(response.data);
  };

  useEffect(()=>{
    getCategories();
      },[])
    

  return (
    <>
    <Stack.Screen options={{headerShown:true , headerTransparent:true}}/>
    <View style={[styles.container , {marginTop:headerheight}]}>
     <FlatList 
       data={categories} 
       keyExtractor={(item) => item.id.toString()} 
       showsVerticalScrollIndicator={false}
       renderItem={({ item, index }) => (
         <Animated.View style={styles.itemWrapper} entering={FadeInDown.delay(300 + index * 100).duration(500)}>
          <Text style={styles.itemTitle}>{item.name}</Text>
          <Image source={{uri:item.image}} style={{width:100,height:100,borderRadius:10,}}/>
         </Animated.View>
       )}
     />
    </View>
    </>
  )
}

export default ExploreScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:20,
  },
  itemWrapper:{
    flexDirection:'row',
    alignItems:"center",
    justifyContent:"space-between",
    backgroundColor:Colors.extraLightGray,
    padding:10,
    borderRadius:10,
    marginBottom:20,
  },
  itemTitle:{
    fontSize:16,
    fontWeight:'500',
    color:Colors.black
  }
})