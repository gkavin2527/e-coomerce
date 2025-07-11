import { Dimensions, FlatList, Image, StyleSheet, Text, View, ViewToken } from 'react-native'
import React, { useRef, useState } from 'react'
import Pagination from './Pagination';


type Props = {
    imageList: string[];
   
}

const width = Dimensions.get('screen').width

const ImageSlider = ({imageList}: Props) => {

const [paginationIndex, setPaginationIndex] = useState(0)
  
const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
}

const onViewableItemsChanged = ({viewableItems}: { viewableItems: ViewToken[] }) => {
  if (
    viewableItems[0].index !== undefined &&
    viewableItems[0].index !== null
  ) {
    setPaginationIndex(viewableItems[0].index % imageList.length);
  }
 

}

  const viewabilityConfigCallbackPairs = useRef([
    {viewabilityConfig,onViewableItemsChanged},
  ])
  return (
    <View  style={{width:width , justifyContent:'center',alignItems:'center'}}>
      <FlatList data={imageList} renderItem={({item})=>(<View>
        <Image source={{uri:item}} style={{width:300, height:300,borderRadius:10}}/>
      </View>
    )}
    horizontal
    showsHorizontalScrollIndicator={false}
    pagingEnabled
    scrollEventThrottle={16}
    viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
    />
    <Pagination items={imageList} paginationIndex={paginationIndex}/>
    </View>
  )
}

export default ImageSlider

const styles = StyleSheet.create({})