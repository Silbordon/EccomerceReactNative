import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Banner from '../components/Banner'
import HorizontalCarouselHome from '../components/HorizontalCarouselHome'
import ProductCard from '../components/ProductCard'
import CategorieCard from '../components/CategorieCard'
import categorieType from '../data/categoriesType.json';
import topSells from '../data/topSells.json';
import ProductDetailCard from '../components/ProductDetailCard'


const Home = () => {
    return (
        <ScrollView>
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
                        title={item.name}
                        price={item.price}
                        onPress={item.onPress}
                        image={""}
                    />
                )}
            />
            <ProductDetailCard />
        </ScrollView>

    )
}

export default Home;

const styles = StyleSheet.create({
})