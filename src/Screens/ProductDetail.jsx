import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import ProductDetailCard from '../components/ProductDetailCard'
import ProductCard from '../components/ProductCard'
import topSells from '../data/topSells.json';
import HorizontalCarouselHome from '../components/HorizontalCarouselHome'

const ProductDetail = ({route}) => {
    const {id} = route.params

    
  return (
    <ScrollView>
    <View>
      <ProductDetailCard id={id}/>
      <HorizontalCarouselHome
                title="Related Products"
                data={topSells}
                renderItem={(item) => (
                    <ProductCard
                       item={item}
                    />
                )}
            />
    </View>
    </ScrollView>
  )
}

export default ProductDetail

const styles = StyleSheet.create({})