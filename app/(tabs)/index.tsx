// import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { CategoryType, ProductType } from '@/types/type'
// import { FlatList, GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
// import { Stack } from 'expo-router'
// import Header from '@/components/Header'
// import { Image } from 'react-native'
// import ProductItem from '@/components/ProductItem'
// import { Colors } from '@/constants/Colors'
// import ProductList from '@/components/ProductList'
// import Categories from '@/components/Categories'
// import FlashSale from '@/components/FlashSale'

// type Props = {}

// const HomeScreen = (props: Props) => {

//   const [products,setProducts] = useState<ProductType[]>([]);
//   const [saleProducts,setsaleProducts] = useState<ProductType[]>([]);
//   const [categories,setCategories] = useState<CategoryType[]>([]);
//   const [isLoading,setIsLoading] = useState<boolean>(true);
 
//   const getProducts = async() => {
//     const URL = `http://localhost:8000/products`;
//     const response = await axios.get(URL);

// console.log(response.data);
// setProducts(response.data);
// setIsLoading(false);

//   }
//   const getSaleProducts = async() => {
//     const URL = `http://localhost:8000/saleProducts`;
//     const response = await axios.get(URL);

// console.log(response.data);
// setsaleProducts(response.data);
// setIsLoading(false);

//   }
// if(isLoading){
//   return(
//     <View>
//       <ActivityIndicator size="large"  />
//     </View>
//   )
// }


//   const getCategories = async() => {
//     const URL = `http://localhost:8000/categories`;
//     const response = await axios.get(URL);

// console.log(response.data);
// setCategories(response.data);
// setIsLoading(false);

//   }

// useEffect(() => {
//   getCategories();
//   getProducts();
//   getSaleProducts();
 
// },[])

//   return (

//     <GestureHandlerRootView style={{ flex: 1 }}>
//     <Stack.Screen options={{ headerShown: true,header: () => <Header/>}} />
//     <ScrollView>
//     <Categories categories={categories}/>
//     <FlashSale products={saleProducts}/>
//     <View style={{marginHorizontal:20,marginBottom:10}}>
//       <Image source={require('@/assets/images/sale-banner.jpg')} style={{width:'100%',height:150,borderRadius:15}}/>
//     </View>
//     <ProductList products={products} flatlist={false}/>
//     </ScrollView>
//     </GestureHandlerRootView>
  
//   )
// }

// export default HomeScreen

// const styles = StyleSheet.create({
 

// })



import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, ScrollView } from 'react-native';
import axios from 'axios';
import Categories from '@/components/Categories';
import FlashSale from '@/components/FlashSale';
import ProductList from '@/components/ProductList';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Header from '@/components/Header';
import { Image } from 'react-native';

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [saleProducts, setSaleProducts] = useState([]);

  const getCategories = async () => {
    const URL = `http://192.168.0.100:8000/categories`;
    console.log()
    const response = await axios.get(URL);
    setCategories(response.data);
  };

  const getProducts = async () => {
    const URL = `http://192.168.0.100:8000/products`;
    const response = await axios.get(URL);
    setProducts(response.data);
  };

  const getSaleProducts = async () => {
    const URL = `http://192.168.0.100:8000/saleProducts`;
    const response = await axios.get(URL);
    setSaleProducts(response.data);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([getCategories(), getProducts(), getSaleProducts()]);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      
        <Stack.Screen options={{ headerShown: true,header: () => <Header/>}} />
        <ScrollView contentContainerStyle={{paddingBottom:20}}>
        <Categories categories={categories}/>
        <FlashSale products={saleProducts}/>
        <View style={{marginHorizontal:20,marginBottom:10}}>
          <Image source={require('@/assets/images/sale-banner.jpg')} style={{ width: '100%', height: 150, borderRadius: 15 }} />
          </View>
        
        <ProductList products={products} flatlist={false}/>
        </ScrollView>
    </GestureHandlerRootView>
      
  );
};

export default HomeScreen;