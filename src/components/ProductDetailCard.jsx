import React, { useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { colors } from '../global/colors';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useGetProductsQuery } from '../services/shop'
import { addItemCart } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';

const ProductDetailCard = ({ id }) => {

  const navigation = useNavigation();
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1);
  const {data:products} = useGetProductsQuery()

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddItemCart = () => {
    dispatch(addItemCart({...products[id],quantity: quantity}))
    navigation.navigate("CartStackNavigator")
  }

  return (
    <View style={styles.card}>
      <Pressable
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={32} color={colors.green900} />
      </Pressable>
      <Image
        source={require("../../assets/images/prodCat1.jpg")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>{products[id].name}</Text>
      <Text style={styles.price}>${products[id].price.toFixed(2)}</Text>
      <Text style={styles.description}>{products[id].description}</Text>

      <View style={styles.counterContainer}>
        <Pressable
          onPress={decreaseQuantity}
          style={({ pressed }) => [
            styles.counterButton,
            {
              backgroundColor: colors.green200,
              opacity: pressed ? 0.7 : 1,
            },
          ]}>
          <Text style={styles.counterButtonText}>-</Text>
        </Pressable>
        <Text style={styles.counterText}>{quantity}</Text>
        <Pressable
          onPress={increaseQuantity}
          style={({ pressed }) => [
            styles.counterButton,
            {
              backgroundColor: colors.green200,
              opacity: pressed ? 0.7 : 1,
            },
          ]}>
          <Text style={styles.counterButtonText}>+</Text>
        </Pressable>
      </View>

      <Pressable
        onPress={handleAddItemCart}
        style={({ pressed }) => [
          styles.addButton,
          {
            backgroundColor: colors.green700,
            opacity: pressed ? 0.7 : 1,
          },
        ]}>
        <Text style={styles.addButtonText}>Add to Cart</Text>
      </Pressable>
    </View>
  );
};

export default ProductDetailCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
    marginHorizontal: 10,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: -3,
    left: 3,
  },
  image: {
    width: 500,
    marginTop: 13
  },
  title: {
    fontSize: 20,
    color: colors.green700,
    fontFamily: "Poppins-Bold",
    marginBottom: 10,
    textAlign: 'center',
  },
  price: {
    fontSize: 18,
    color: colors.green900,
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: "Poppins-Bold",
  },
  description: {
    fontSize: 16,
    color: colors.gray,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: "Poppins-Regular",
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  counterButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  counterButtonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: "Poppins-Bold",
  },
  counterText: {
    fontSize: 18,
    marginHorizontal: 10,
    fontFamily: "Poppins-Regular",
  },
  addButton: {
    backgroundColor: colors.green900,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 15
  },
  addButtonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: "Poppins-Bold",
    textAlign: 'center',
  },
});
