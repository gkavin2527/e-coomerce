// import { Animated, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { router, Stack, useLocalSearchParams } from 'expo-router'
// import axios from 'axios'
// import { ProductType } from '@/types/type'
// import ImageSlider from '@/components/ImageSlider'
// import { Ionicons } from '@expo/vector-icons'
// import { Colors } from '@/constants/Colors'
// import { ScrollView } from 'react-native-gesture-handler'
// import {useHeaderHeight} from '@react-navigation/elements'
// import { FadeInDown } from 'react-native-reanimated'

// type Props = {}

// const ProductDetails = (props: Props) => {
//  const {id , productType} = useLocalSearchParams();
//  const [product, setProduct] = useState<ProductType | null>(null);

//  useEffect(() => {
//    getProductDetails();
//  },[])
 
//  const getProductDetails = async () => {
//    const URL = productType === "sale" ?`http://localhost:8000/saleProducts/${id}`: `http://localhost:8000/products/${id}`;
//    const response = await axios.get(URL);

//    console.log(response.data);
//    setProduct(response.data);
//  }

//  const headerHeight = useHeaderHeight();
//  return (
//   <>
//   <Stack.Screen options={{title:"Product Details" , headerTransparent:true ,  headerLeft:()=> (
//     <TouchableOpacity onPress={()=>router.back()}>
//        <Ionicons name="arrow-back" size={24} color={Colors.black}/>
//     </TouchableOpacity>
//   ), headerRight:()=> (
//     <TouchableOpacity >
//     <Ionicons name="cart-outline" size={24} color={Colors.black}/>
//  </TouchableOpacity>
//   )

//   }}/>
//    <ScrollView  style={{ marginTop: headerHeight , marginBottom:90, }}>
//     {product && product.images && <Animated.View ><ImageSlider imageList={product.images}/></Animated.View> }
//     {product && product.title && (
//       <View style={styles.container}>
//         <View style={styles.ratingWrapper}>
//           <View style={styles.ratingWrapper}>
//           <Ionicons name="star" size={18} color={"#D4AF37"} />
//           <Text style={styles.rating}>4.7<Text>(20)</Text></Text>
//           </View>
//           <TouchableOpacity>
//           <Ionicons name='heart-outline' size={20} color={Colors.black}/>
//           </TouchableOpacity>
//            </View>

//            <Text style={styles.title}>{product.title}</Text>

//            <View style={styles.priceWrapper}>
//             <Text style={styles.price}>₹{product.price}</Text>
//             <View style={styles.priceDiscount}><Text style={styles.priceDiscounText}>6% Off</Text></View>
//             <Text style={styles.oldPrice}>₹{product.price +2}</Text>
//            </View>

//            <Text style={styles.description}>{product.description}</Text>

//            <View style={styles.productVariationWrapper}>
// <View style={styles.productVariationType}>
// <Text style={styles.productVariationTitle}>Color</Text>
// <View style={styles.productVariationValueWrapper}>
//   <View style={{borderColor:Colors.primary , borderWidth:1 , borderRadius:100 , padding:2 }}>
//   <View style={[styles.productVariationColorValue ,{backgroundColor:"#D4AF37"}] }/>
//   </View>

// <View style={[styles.productVariationColorValue ,{backgroundColor:"#333"}]}/>
// <View style={[styles.productVariationColorValue ,{backgroundColor:"#3bc34a"}]}/>
// <View style={[styles.productVariationColorValue ,{backgroundColor:"#2196f3"}]}/>
// <View style={[styles.productVariationColorValue ,{backgroundColor:"#f44336"}]}/>
// <View style={[styles.productVariationColorValue ,{backgroundColor:"#9c27b0"}]}/>
// </View>
// </View>

// <View style={styles.productVariationType}>
// <Text style={styles.productVariationTitle}>Size</Text>
// <View style={styles.productVariationValueWrapper}>
//   <View style={[styles.productVariationSizeValue , {borderColor:Colors.primary}]} >
//     <Text style={[styles.productVariationSizeValueText , {color:Colors.primary , fontWeight:"bold"}]}>S</Text>
//   </View>
//   <View style={styles.productVariationSizeValue} >
//     <Text style={styles.productVariationSizeValueText}>M</Text>
//   </View>
//   <View style={styles.productVariationSizeValue} >
//     <Text style={styles.productVariationSizeValueText}>L</Text>
//   </View>
//   <View style={styles.productVariationSizeValue} >
//     <Text style={styles.productVariationSizeValueText}>XL</Text>
//   </View>
// </View>
// </View>
//            </View>
//       </View>
//     )}
//    </ScrollView>
//    <View style={styles.buttonWrapper}>
//     <TouchableOpacity style={[styles.button, {backgroundColor:Colors.white,borderColor:Colors.primary,borderWidth:1}]}>
//       <Ionicons name="cart-outline" size={20} color={Colors.primary} />
//       <Text style={[styles.buttonText, {color:Colors.primary}]} >Add to Cart</Text>
//     </TouchableOpacity>
//     <TouchableOpacity style={styles.button}>
//       <Text style={styles.buttonText} >Buy Now</Text>
//     </TouchableOpacity>
//    </View>
//    </>
//  )
// }
// export default ProductDetails

// const styles = StyleSheet.create({
//  container:{
//   paddingHorizontal: 20,
//  },
//  ratingWrapper:{
//   flexDirection:'row',
//   alignItems:'center',
//   justifyContent:'space-between',
//   marginBottom:5,
//  },
//  rating:{
// marginLeft:5,
// fontSize:14,
//   color: Colors.gray,
//   fontWeight:'400',
//  },
//  title:{
//   fontSize:20,
//   fontWeight:'400',
//   color: Colors.black,
//   letterSpacing:0.6,
//   lineHeight:32,
//  },
//  priceWrapper:{
//   flexDirection:'row',
//   alignItems:'center',
//   gap:5,
//   marginTop:10,
//  },
//  price:{
//   fontSize:18,
//   fontWeight:'600',
//   color: Colors.black,
//  },
//  priceDiscount:{
//   backgroundColor: Colors.extraLightGray,
//   padding:5,
//   borderRadius:5,
//  },
//  priceDiscounText:{
//   fontSize:14,
//   fontWeight:'400',
//   color: Colors.primary,
//  },
//  oldPrice:{
//   fontSize:16,
//   fontWeight:'400',
//   textDecorationLine:'line-through',
//   color: Colors.gray,
//  },
//  description:{
//   marginTop:20,
//   fontSize:16,
//   fontWeight:'400',
//   color: Colors.black,
//   letterSpacing:0.6,
//   lineHeight:24,
//  },
//  productVariationWrapper:{
//   flexDirection:'row',
//   marginTop:20,
//   flexWrap:'wrap',
//  },
//  productVariationType:{
//   width:'50%',
//   gap:5,
//   marginBottom:10,
//  },
//   productVariationTitle:{
//     fontSize:16,
//     fontWeight:'500',
//     color: Colors.black,
    
//   },
//   productVariationValueWrapper:{
//     flexDirection:'row',
//     alignItems:'center',
//     gap:5,
//     flexWrap:'wrap',
//   },
//   productVariationColorValue:{
// width:30,
// height:30,
// borderRadius:15,
// backgroundColor: Colors.extraLightGray,},
// productVariationSizeValue:{
//   width:50,
//   height:30,
//   borderRadius:5,
//   backgroundColor: Colors.extraLightGray,
//   justifyContent:'center',
//   alignItems:'center',
//   borderColor: Colors.gray,
//   borderWidth:1,
// },
// productVariationSizeValueText:{
//   fontSize:12,
//   fontWeight:'500',
//   color: Colors.black,
// },
// buttonWrapper:{
//   position:"absolute",
//   height:90,
//   padding:20,
//   bottom:0,
//   width:"100%",
//   backgroundColor: Colors.white,
//   flexDirection:'row',
//   gap:10,
// },
// button:{
//   flex:1,
//   flexDirection:'row',
//   backgroundColor: Colors.primary,
//   height:40,
//   justifyContent:'center',
//   alignItems:'center',
//   borderRadius:5,
//  gap:5,
//  elevation: 5,
//  shadowColor: Colors.black,
//   shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     borderWidth:0,
// },
// buttonText:{
//   fontSize:16,
//   fontWeight:'500',
//   color: Colors.white,
// }
// })
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import { router, Stack, useLocalSearchParams } from 'expo-router'
import axios from 'axios'
import { ProductType } from '@/types/type'
import ImageSlider from '@/components/ImageSlider'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import { ScrollView } from 'react-native-gesture-handler'
import { useHeaderHeight } from '@react-navigation/elements'
import Reanimated, { 
  FadeInDown, 
  FadeInLeft, 
  FadeInRight, 
  FadeInUp,
  SlideInDown,
  SlideInLeft,
  SlideInRight,
  BounceIn,
  FlipInXUp,
  withSpring,
  withTiming,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  runOnJS,
  SlideInUp
} from 'react-native-reanimated'

type Props = {}

const ProductDetails = (props: Props) => {
  const { id, productType } = useLocalSearchParams();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  
  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const buttonScale = useRef(new Animated.Value(1)).current;
  const heartScale = useRef(new Animated.Value(1)).current;
  
  // Reanimated values
  const progress = useSharedValue(0);
  const cartButtonScale = useSharedValue(1);
  const buyButtonScale = useSharedValue(1);

  useEffect(() => {
    getProductDetails();
  }, [])

  useEffect(() => {
    if (product) {
      // Start animations when product data loads
      progress.value = withSpring(1, { damping: 15, stiffness: 150 });
      
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          tension: 100,
          friction: 8,
          useNativeDriver: true,
        })
      ]).start();
    }
  }, [product])

  const getProductDetails = async () => {
    const URL = productType === "sale" ? `http://192.168.0.100:8000/saleProducts/${id}` : `http://192.168.0.100:8000/products/${id}`;
    const response = await axios.get(URL);
    console.log(response.data);
    setProduct(response.data);
  }

  const handleColorSelect = (index: number) => {
    setSelectedColorIndex(index);
    // Animate color selection
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      })
    ]).start();
  }

  const handleSizeSelect = (index: number) => {
    setSelectedSizeIndex(index);
  }

  const handleHeartPress = () => {
    setIsLiked(!isLiked);
    Animated.sequence([
      Animated.timing(heartScale, {
        toValue: 1.3,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(heartScale, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      })
    ]).start();
  }

  const handleButtonPress = (buttonType: 'cart' | 'buy') => {
    const scaleValue = buttonType === 'cart' ? cartButtonScale : buyButtonScale;
    
    scaleValue.value = withSpring(0.95, { damping: 15 }, () => {
      scaleValue.value = withSpring(1, { damping: 15 });
    });
  }

  // Animated styles
  const containerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(progress.value, [0, 1], [0, 1]),
      transform: [
        {
          translateY: interpolate(progress.value, [0, 1], [30, 0])
        }
      ]
    };
  });

  const cartButtonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: cartButtonScale.value }]
    };
  });

  const buyButtonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: buyButtonScale.value }]
    };
  });

  const colors = ["#D4AF37", "#333", "#3bc34a", "#2196f3", "#f44336", "#9c27b0"];
  const sizes = ["S", "M", "L", "XL"];

  const headerHeight = useHeaderHeight();
  
  return (
    <>
      <Stack.Screen options={{
        title: "Product Details",
        headerTransparent: true,
        headerLeft: () => (
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color={Colors.black} />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity>
            <Ionicons name="cart-outline" size={24} color={Colors.black} />
          </TouchableOpacity>
        )
      }} />
      
      <ScrollView style={{ marginTop: headerHeight, marginBottom: 90 }}>
        {product && product.images && (
          <Reanimated.View entering={FadeInDown.delay(200).duration(800)}>
            <ImageSlider imageList={product.images} />
          </Reanimated.View>
        )}
        
        {product && product.title && (
          <Reanimated.View style={[styles.container]} entering={SlideInUp.delay(400).duration(600)}>
            {/* Rating and Heart Section */}
            <Reanimated.View style={styles.ratingWrapper} entering={FadeInLeft.delay(600).duration(500)}>
              <View style={styles.ratingWrapper}>
                <Ionicons name="star" size={18} color={"#D4AF37"} />
                <Text style={styles.rating}>4.7<Text>(20)</Text></Text>
              </View>
              <TouchableOpacity onPress={handleHeartPress}>
                <Animated.View style={{ transform: [{ scale: heartScale }] }}>
                  <Ionicons 
                    name={isLiked ? 'heart' : 'heart-outline'} 
                    size={20} 
                    color={isLiked ? '#f44336' : Colors.black}
                  />
                </Animated.View>
              </TouchableOpacity>
            </Reanimated.View>

            {/* Title */}
            <Reanimated.View entering={FadeInRight.delay(700).duration(600)}>
              <Text style={styles.title}>{product.title}</Text>
            </Reanimated.View>

            {/* Price Section */}
            <Reanimated.View style={styles.priceWrapper} entering={SlideInLeft.delay(800).duration(500)}>
              <Text style={styles.price}>₹{product.price}</Text>
              <View style={styles.priceDiscount}>
                <Text style={styles.priceDiscounText}>6% Off</Text>
              </View>
              <Text style={styles.oldPrice}>₹{product.price + 2}</Text>
            </Reanimated.View>

            {/* Description */}
            <Reanimated.View entering={FadeInUp.delay(900).duration(600)}>
              <Text style={styles.description}>{product.description}</Text>
            </Reanimated.View>

            {/* Product Variations */}
            <Reanimated.View style={styles.productVariationWrapper} entering={BounceIn.delay(1000).duration(800)}>
              {/* Color Selection */}
              <View style={styles.productVariationType}>
                <Text style={styles.productVariationTitle}>Color</Text>
                <View style={styles.productVariationValueWrapper}>
                  {colors.map((color, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => handleColorSelect(index)}
                      activeOpacity={0.7}
                    >
                      <Reanimated.View 
                        entering={FlipInXUp.delay(1100 + index * 100).duration(400)}
                        style={{
                          borderColor: selectedColorIndex === index ? Colors.primary : 'transparent',
                          borderWidth: 2,
                          borderRadius: 100,
                          padding: 2
                        }}
                      >
                        <View style={[styles.productVariationColorValue, { backgroundColor: color }]} />
                      </Reanimated.View>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              {/* Size Selection */}
              <View style={styles.productVariationType}>
                <Text style={styles.productVariationTitle}>Size</Text>
                <View style={styles.productVariationValueWrapper}>
                  {sizes.map((size, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => handleSizeSelect(index)}
                      activeOpacity={0.7}
                    >
                      <Reanimated.View 
                        entering={SlideInRight.delay(1200 + index * 100).duration(400)}
                        style={[
                          styles.productVariationSizeValue,
                          {
                            borderColor: selectedSizeIndex === index ? Colors.primary : Colors.gray,
                            backgroundColor: selectedSizeIndex === index ? Colors.primary : Colors.extraLightGray
                          }
                        ]}
                      >
                        <Text style={[
                          styles.productVariationSizeValueText,
                          {
                            color: selectedSizeIndex === index ? Colors.white : Colors.black,
                            fontWeight: selectedSizeIndex === index ? "bold" : "500"
                          }
                        ]}>
                          {size}
                        </Text>
                      </Reanimated.View>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </Reanimated.View>
          </Reanimated.View>
        )}
      </ScrollView>
      
      {/* Animated Buttons */}
      <Reanimated.View style={styles.buttonWrapper} entering={SlideInDown.delay(1400).duration(600)}>
        <Reanimated.View style={[cartButtonAnimatedStyle]}>
          <TouchableOpacity 
            style={[styles.button, { backgroundColor: Colors.white, borderColor: Colors.primary, borderWidth: 1 }]}
            onPress={() => handleButtonPress('cart')}
            activeOpacity={0.8}
          >
            <Ionicons name="cart-outline" size={20} color={Colors.primary} />
            <Text style={[styles.buttonText, { color: Colors.primary }]}>Add to Cart</Text>
          </TouchableOpacity>
        </Reanimated.View>
        
        <Reanimated.View style={[buyButtonAnimatedStyle]}>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => handleButtonPress('buy')}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Buy Now</Text>
          </TouchableOpacity>
        </Reanimated.View>
      </Reanimated.View>
    </>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  rating: {
    marginLeft: 5,
    fontSize: 14,
    color: Colors.gray,
    fontWeight: '400',
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
    color: Colors.black,
    letterSpacing: 0.6,
    lineHeight: 32,
  },
  priceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.black,
  },
  priceDiscount: {
    backgroundColor: Colors.extraLightGray,
    padding: 5,
    borderRadius: 5,
  },
  priceDiscounText: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.primary,
  },
  oldPrice: {
    fontSize: 16,
    fontWeight: '400',
    textDecorationLine: 'line-through',
    color: Colors.gray,
  },
  description: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: '400',
    color: Colors.black,
    letterSpacing: 0.6,
    lineHeight: 24,
  },
  productVariationWrapper: {
    flexDirection: 'row',
    marginTop: 20,
    flexWrap: 'wrap',
  },
  productVariationType: {
    width: '50%',
    gap: 5,
    marginBottom: 10,
  },
  productVariationTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.black,
  },
  productVariationValueWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    flexWrap: 'wrap',
  },
  productVariationColorValue: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors.extraLightGray,
  },
  productVariationSizeValue: {
    width: 50,
    height: 30,
    borderRadius: 5,
    backgroundColor: Colors.extraLightGray,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.gray,
    borderWidth: 1,
  },
  productVariationSizeValueText: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.black,
  },
  buttonWrapper: {
    position: "absolute",
    height: 90,
    padding: 20,
    bottom: 0,
    width: "100%",
    backgroundColor: Colors.white,
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.primary,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    gap: 5,
    elevation: 5,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderWidth: 0,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.white,
  }
})