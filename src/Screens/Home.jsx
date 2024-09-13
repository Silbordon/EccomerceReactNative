import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Banner from '../components/Banner'
import HorizontalCarouselHome from '../components/HorizontalCarouselHome'
import ProductCard from '../components/ProductCard'
import CategorieCard from '../components/CategorieCard'
import Header from '../components/Header'
import { useGetCategoriesQuery, useGetProductsQuery } from '../services/shop'

const Home = () => {

    const {data: categorieType} = useGetCategoriesQuery()
    const {data:products} = useGetProductsQuery()
   
    return (
        <ScrollView nestedScrollEnabled={true}>
            <Header title='VETSHOP'/>
            <Banner />
            <HorizontalCarouselHome
                title="CATEGORIES"
                data={categorieType}
                renderItem={(item) => (
                    <CategorieCard
                        text={item.text}
                        backgroundColor={item.backgroundColor}
                        image={item.image}
                    />
                )}
            />
            <HorizontalCarouselHome
                title="Trending This Week"
                data={products}
                renderItem={(item) => (
                    <ProductCard
                       item={item}
                    />
                )}
            />
        </ScrollView>

    )
}

export default Home;

const styles = StyleSheet.create({
})