import React, { useState, useEffect } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { colors } from '../global/colors';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useGetProductQuery } from '../services/shop';
import { addItemCart } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import Loading from './Loading';
import Counter from './Counter';

const ProductDetailCard = ({ id }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { data: product, isLoading } = useGetProductQuery(id);
  const [totalPrice, setTotalPrice] = useState(0);  

  useEffect(() => {
    if (product) {
      setTotalPrice(product.price * quantity); 
    }
  }, [product, quantity]);  

  if (isLoading) return <Loading />;

  const sourceImage = product?.image ? { uri: product.image } : require('../../assets/images/logo3.png'); // Default image path

  const handleAddItemCart = () => {
    dispatch(addItemCart({ ...product, quantity }));
    navigation.navigate("CartStackNavigator");
  };

  return (
    <View style={styles.card}>
      <Pressable
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={32} color={colors.green900} />
      </Pressable>
      <Image
        source={sourceImage} 
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>Price per unit: ${product.price.toFixed(2)}</Text>
      
      <Text style={styles.totalPrice}>Total: ${totalPrice.toFixed(2)}</Text>

      <Text style={styles.description}>{product.description}</Text>

      <Counter quantity={quantity} setQuantity={setQuantity} />

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
    width: '100%',
    height: 200,  
    marginTop: 13,
  },
  title: {
    fontSize: 20,
    color: colors.green700,
    fontFamily: 'Poppins-Bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  price: {
    fontSize: 18,
    color: colors.green900,
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  totalPrice: {
    fontSize: 18,
    color: colors.green900,
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  description: {
    fontSize: 16,
    color: colors.gray,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  addButton: {
    backgroundColor: colors.green900,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 15,
  },
  addButtonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
});

