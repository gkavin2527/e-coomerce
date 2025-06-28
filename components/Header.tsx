import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'

type Props = {}

const Header = (props: Props) => {

const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container,{paddingTop:insets.top}]}>
      <Text style={styles.logo}>SX</Text>
      <Link href="/explore" asChild>
      <TouchableOpacity style={styles.searchBar}>
      <Text style={styles.searchTxt}>Search</Text>
      <Ionicons name='search-outline' size={20} color={Colors.gray} />   
      </TouchableOpacity>
      </Link>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',
backgroundColor:Colors.white,
paddingHorizontal: 20,
paddingBottom: 10,
gap:15,
    },
    logo:{
        fontSize: 24,
        fontWeight: '700',
        color: Colors.primary,
    },
    searchBar:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor: Colors.background,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 5,
    },
    searchTxt:{
        color: Colors.gray,
    }
})