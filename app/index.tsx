import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link, Stack, useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import Google from '@/assets/images/google-logo.svg';
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import SocialLoginButton from "@/components/SocialLoginButton";

type Props = {};

const WelcomeScreen = (props: Props) => {

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ImageBackground 
        source={require('@/assets/images/ecommerce-splash.jpg')} 
        style={{flex:1}} 
        resizeMode="cover"
      >
        <View style={styles.container}>
          <LinearGradient 
            colors={["transparent",'rgba(255,255,255,0.9)','rgba(255,255,255,1)']} 
            style={styles.background}
          >
            <View style={styles.wrapper}>
              <Animated.Text 
                style={styles.title} 
                entering={FadeInUp.delay(200).duration(600).springify()}
              >
                ShopX
              </Animated.Text>
              <Animated.Text 
                style={styles.description} 
                entering={FadeInUp.delay(400).duration(600).springify()}
              >
                One Stop Solution for all your needs
              </Animated.Text>
            </View>
            
           <SocialLoginButton emailHref={'/signup'}/>
            
            <Animated.View 
              style={styles.signupLinkWrapper}
              entering={FadeInUp.delay(1250).duration(400).damping(15)}
            >
              <Text style={styles.loginTxt}>
                Already have an account?{"  "}
                <Link href="/signin" asChild>
                  <TouchableOpacity>
                    <Text style={styles.loginTxtSpan}>Signin</Text>
                  </TouchableOpacity>
                </Link>
              </Text>
            </Animated.View>
          </LinearGradient>
        </View>
      </ImageBackground>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'flex-end'
  },
  wrapper: {
    paddingBottom: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    color: Colors.primary,
    fontWeight: '700',
    letterSpacing: 2.4,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: Colors.gray,
    letterSpacing: 1.2,
    lineHeight: 30,
    marginBottom: 20
  },
  signupLinkWrapper: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  loginTxt: {
    marginTop: 30,
    fontSize: 14,
    color: Colors.black,
    lineHeight: 24,
  },
  loginTxtSpan: {
    fontWeight: '600',
    color: Colors.primary,
    textDecorationLine: 'underline',
  }
});