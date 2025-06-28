import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import Google from '@/assets/images/google-logo.svg'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { Href,Link } from 'expo-router'

type Props = {
    emailHref: Href<String | object>
}

const SocialLoginButton = (props: Props) => {
    
    const {emailHref} = props;

 
  return (
    <View style={styles.socialLoginWrapper}>
    {/* Option 1: Using router.push (Recommended) */}
    <Animated.View entering={FadeInDown.delay(800).duration(400).damping(15)}>
        <Link href={emailHref} asChild>
      <TouchableOpacity style={styles.button} >
        <Ionicons name='mail-outline' size={20} color={Colors.black} style={{width: 20}}/>
        <Text style={styles.btnTxt}>Continue with Email</Text>
      </TouchableOpacity>
      </Link>
    </Animated.View>
    
    <Animated.View entering={FadeInDown.delay(950).duration(400).damping(15)}>
      <Link href="/signin"  asChild>
      <TouchableOpacity style={styles.button}>
        <Google width={20} height={20} style={{width: 20}}/>
        <Text style={styles.btnTxt}>Continue with Google</Text>
      </TouchableOpacity>
      </Link>
    </Animated.View>
    
    <Animated.View entering={FadeInDown.delay(1100).duration(400).damping(15)}>
    <Link href="/signin"  asChild>
      <TouchableOpacity style={styles.button}>
        <Ionicons name='logo-apple' size={20} color={Colors.black} style={{width: 20}}/>
        <Text style={styles.btnTxt}>Continue with Apple</Text>
      </TouchableOpacity>
      </Link>
    </Animated.View>
  </View>
  )
}

export default SocialLoginButton

const styles = StyleSheet.create({
    socialLoginWrapper: {
        paddingHorizontal: 20,
        alignItems: 'center',
      },
      button: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderColor: Colors.gray,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        marginBottom: 15,
        width: 320,
        height: 50,
      },
      btnTxt: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.black,
      },
})