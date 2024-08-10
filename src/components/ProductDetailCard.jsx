import React, { useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { colors } from '../global/colors';

const ProductDetailCard = ({ title, price, image, description, onAddToCart }) => {
  title = "comida para ivy";
  price = 45; 
  description = "Lorem insu jcnlkdscnwi;c nciwuhcnw jsbnclwiubce bihsbcwlibuc dcjb wldicubwe chjdbcweic jbsdcniweubc djscb wilc lksbcdiwel";
  onAddToCart = ()=> console.log("add to cart")
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.card}>
      <Image  
        source={require("../../assets/images/prodCat1.jpg")}
        style={styles.image} 
        resizeMode="contain" />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>${price.toFixed(2)}</Text>
      <Text style={styles.description}>{description}</Text>

      <View style={styles.counterContainer}>
        <Pressable onPress={decreaseQuantity} style={styles.counterButton}>
          <Text style={styles.counterButtonText}>-</Text>
        </Pressable>
        <Text style={styles.counterText}>{quantity}</Text>
        <Pressable onPress={increaseQuantity} style={styles.counterButton}>
          <Text style={styles.counterButtonText}>+</Text>
        </Pressable>
      </View>

      <Pressable onPress={() => onAddToCart(quantity)} style={styles.addButton}>
        <Text style={styles.addButtonText}>Add to Cart</Text>
      </Pressable>
    </View>
  );
};

export default ProductDetailCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 15,
    margin: 10,
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginHorizontal: 10
  },
  image: {
    width: 500,
  },
  title: {
    fontSize: 20,
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
    backgroundColor: colors.green200,
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
  },
  addButtonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: "Poppins-Bold",
    textAlign: 'center',
  },
});
