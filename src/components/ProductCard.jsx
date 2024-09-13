import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { colors } from '../global/colors';
import { useNavigation } from '@react-navigation/native'

const ProductCard = ({item}) => {

  const navigation = useNavigation()
  const sourceImage = { uri: item.image }; 

  return (
    <View style={styles.card}>
      <Image  
        source={sourceImage} 
        style={styles.image} 
        resizeMode="contain" />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      <Pressable 
        onPress={()=>navigation.navigate("ProductDetail",{id:item.id})}
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: colors.green700,
            opacity: pressed ? 0.7 : 1,
          },
        ]}>
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
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    width: 180,
    marginBottom: 30,  
    height: 250 
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
    backgroundColor: colors.green900,
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


