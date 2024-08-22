import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Banner from '../components/Banner'
import HorizontalCarouselHome from '../components/HorizontalCarouselHome'
import ProductCard from '../components/ProductCard'
import CategorieCard from '../components/CategorieCard'
import categorieType from '../data/categoriesType.json';
import topSells from '../data/topSells.json';
import Header from '../components/Header'


const Home = () => {
    return (
        <ScrollView>
            <Header />
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
                data={topSells}
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