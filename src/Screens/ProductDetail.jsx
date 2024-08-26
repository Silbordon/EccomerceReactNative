import { StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
import ProductDetailCard from '../components/ProductDetailCard'
import ProductCard from '../components/ProductCard'
import HorizontalCarouselHome from '../components/HorizontalCarouselHome'
import { useSelector } from 'react-redux'

const ProductDetail = ({route}) => {
    const {id} = route.params
    const products = useSelector((state) => state.shop.products)
    
  return (
    <ScrollView>
    <View>
      <ProductDetailCard id={id}/>
      <HorizontalCarouselHome
                title="Related Products"
                data={products}
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