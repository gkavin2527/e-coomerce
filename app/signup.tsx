import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { Link, Stack, useRouter } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import InputField from '@/components/InputField';
import SocialLoginButton from '@/components/SocialLoginButton';

type Props = {}

const SignUpScreen = (props: Props) => {
  const router = useRouter();
  
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
        <Text style={styles.title}>Create an Account</Text>
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
        <InputField 
          placeholder='Confirm Password'
          placeholderTextColor={Colors.gray}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTxt}>Create an Account</Text>
        </TouchableOpacity>

        <Text style={styles.loginTxt}>
                Already have an account?{"  "}
                <Link href="/signin" asChild>
                  <TouchableOpacity>
                    <Text style={styles.loginTxtSpan}>Signin</Text>
                  </TouchableOpacity>
                </Link>
              </Text>

              <View style={styles.divider} />
              <SocialLoginButton emailHref='/signin'></SocialLoginButton>
      </View>
    </>
  )
}

export default SignUpScreen

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