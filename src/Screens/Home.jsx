import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Banner from '../components/Banner'
import HorizontalCarouselHome from '../components/HorizontalCarouselHome'
import ProductCard from '../components/ProductCard'
import CategorieCard from '../components/CategorieCard'
import Header from '../components/Header'
import Counter from '../components/Counter'
import { useSelector } from 'react-redux'


const Home = () => {

    const categorieType = useSelector((state) => state.shop.categories )
    const products = useSelector((state) => state.shop.products)
    // const topSells = useSelector((state) => state.shop.topSells)

    return (
        <ScrollView>
            <Header />
            <Banner />
            <Counter />
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