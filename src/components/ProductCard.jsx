import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { colors } from '../global/colors';

const ProductCard = ({ title, price, onPress, image }) => {

  // const sourceImage = 'require(`${image}`)'

 onPress=()=>{console.log}

  return (
    <View style={styles.card}>
      <Image  
        source={require("../../assets/images/prodCat1.jpg")}
        style={styles.image} 
        resizeMode="contain" />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>${price.toFixed(2)}</Text>
      <Pressable 
        onPress={onPress} 
        style={styles.button}>
          <Text style={styles.buttonText}>See More</Text>
      </Pressable>
    </View>
  );
};
export default ProductCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginHorizontal: 8,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    width: 180,
    marginBottom: 30    
  },
  image: {
    width: "100%",
    height: 100,
  },
  title: {
    fontSize: 15,
    fontFamily: "Poppins-Regular",
    textAlign: 'center',
  },
  price: {
    fontSize: 15,
    color: colors.green900,
    marginBottom: 8,
    textAlign: 'center',
    fontFamily : "Poppins-Bold"
  },
  button: {
    backgroundColor: colors.blue,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: colors.white,
    fontSize: 12,
    fontFamily: "Poppins-Bold",
    textAlign: 'center',
  },
});


