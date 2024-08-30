import { FlatList, StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import ProductCard from '../components/ProductCard'
import { images } from '../assets';
import { colors } from '../global/colors'
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useGetProductsQuery } from '../services/shop'
import Loading from '../components/Loading';

const ListCategory = ({ route }) => {
  const [productsFiltered, setProductsFiltered] = useState([])
  const [noMatches, setNoMatches] = useState(false)
  const { category } = route.params
  const { data: products, isSuccess, isLoading} = useGetProductsQuery(category)
  const navigation = useNavigation();

  useEffect(() => {
    if (isSuccess) {
      const filteredProducts = products.filter(product => product.category === category)
      setProductsFiltered(filteredProducts)
    }
  }, [category, isSuccess])

  if(isLoading) return <Loading />

  const onSearch = (input) => {
    if (input) {
      const filteredProducts = productsFiltered.filter(product => product.name.toLowerCase().includes(input.toLowerCase()))
      setProductsFiltered(filteredProducts)
      setNoMatches(filteredProducts.length === 0)
    } else {
      const initialFilteredProducts = products.filter(product => product.category === category)
      setProductsFiltered(initialFilteredProducts)
      setNoMatches(false)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={32} color={colors.green900} />
      </Pressable>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={images[category]}
            resizeMode="cover"
          />
          <View style={styles.overlay}>
            <Text style={[styles.text, { color: colors.green900 }]}>SHOP {category}</Text>
          </View>
        </View>
        <Search onSearch={onSearch} />
        {noMatches && <Text style={styles.noMatchesText}>No matches found. Showing all products in {category}.</Text>}
        <FlatList
          data={productsFiltered}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <ProductCard item={item} />}
          contentContainerStyle={styles.flatListContent}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default ListCategory

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    paddingTop: 40
  },
  imageContainer: {
    height: 300,
    width: '100%',
    borderRadius: 18,
  },
  backButton: {
    position: 'absolute',
    top: -2,
    left: 3,
  },
  image: {
    flex: 1,
    height: 200,
    width: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 35,
    fontFamily: "Barlow-Bold",
    marginBottom: 20
  },
  flatListContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noMatchesText: {
    color: 'red',
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center'
  }
})


