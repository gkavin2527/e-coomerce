import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { icon } from '@/constants/icons';
import { Colors } from '@/constants/Colors';

import { GestureResponderEvent } from 'react-native';

type Props = {
    onPress: (event: GestureResponderEvent) => void;
    onLongPress: (event: GestureResponderEvent) => void;
   isFocused:boolean;
   label:string;
   routeName: 'index' | 'explore' | 'notification' | 'cart' | 'profile';
}

const TabBarButtons = (props: Props) => {

    const { onPress, onLongPress, isFocused, label, routeName } = props;
  return (
    <Pressable
    onPress={onPress}
    onLongPress={onLongPress}
    style={styles.tabbarBtn}>

{routeName === 'cart' && (

    <View style={styles.badgeWrapper}>
        <Text style={styles.badgeText}>3</Text>
    </View>
)}
  
  {(icon as any)[routeName]({color: isFocused ? Colors.primary : Colors.black})}
    <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
      {label}
    </Text>
  </Pressable>

  )
}

export default TabBarButtons

const styles = StyleSheet.create({
    tabbarBtn: {
        flex: 1,
        gap:5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    badgeWrapper: {
position: 'absolute',
backgroundColor: Colors.highlight,
top: -5,
right:20,
paddingVertical:2,
paddingHorizontal:6,
borderRadius: 10,
zIndex: 10,
    },
    badgeText:{
color: Colors.black,
fontSize: 12,
    }


})