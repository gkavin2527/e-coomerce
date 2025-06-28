import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link, router, Stack } from 'expo-router'
import InputField from '@/components/InputField'
import SocialLoginButton from '@/components/SocialLoginButton'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'


type Props = {}

const SignInScreen = (props: Props) => {
  return (
    <>
    <Stack.Screen 
      options={{ 
        headerTitle: 'Sign up',
        headerLeft: () => (
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name='close' size={24} color={Colors.black}/>
          </TouchableOpacity>
        ) 
      }} 
    />
    <View style={styles.container}>
      <Text style={styles.title}>Login to Your Account</Text>
      <InputField 
        placeholder='Email Address'
        placeholderTextColor={Colors.gray}
        autoCapitalize='none'
        keyboardType='email-address'
      />
      <InputField 
        placeholder='Password'
        placeholderTextColor={Colors.gray}
        secureTextEntry={true}
      />
    
      <TouchableOpacity style={styles.btn} onPress={() => {
          router.dismissAll();
          router.push('/(tabs)');
        }}>
        <Text style={styles.btnTxt}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.loginTxt}>
              Don't have an account?{"  "}
              <Link href="/signup" asChild>
                <TouchableOpacity>
                  <Text style={styles.loginTxtSpan}>Signup</Text>
                </TouchableOpacity>
              </Link>
            </Text>

            <View style={styles.divider} />
            <SocialLoginButton emailHref='/signin'></SocialLoginButton>
    </View>
  </>
    
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    letterSpacing: 1.2,
    marginBottom: 30
  },
  inputField: {
    backgroundColor: Colors.white,
    paddingVertical: 12,
    paddingHorizontal: 18, 
    alignSelf: 'stretch', 
    borderRadius: 5,
    fontSize: 16,
    color: Colors.black,
    marginBottom: 20,
  },
  btn:{
    backgroundColor:Colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 18,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  btnTxt:{
color: Colors.white,
fontSize: 16,
fontWeight: '600',
  },
  loginTxt: {
    marginBottom: 30,
    fontSize: 14,
    color: Colors.black,
    lineHeight: 24,
  },
  loginTxtSpan: {
    fontWeight: '600',
    color: Colors.primary,
    textDecorationLine: 'underline',
  },
  divider:{
    borderTopColor: Colors.gray,
    borderTopWidth: StyleSheet.hairlineWidth,
    width: '30%',
    marginBottom:30
  }
})