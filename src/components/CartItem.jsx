import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { colors } from '../global/colors';
import React, { useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import { updateItemQuantity, removeItemCart } from '../features/cart/cartSlice';
import Counter from './Counter';

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const dispatch = useDispatch();

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    dispatch(updateItemQuantity({ id: item.id, quantity: newQuantity }));
  };

  const handleRemoveItem = () => {
    dispatch(removeItemCart(item.id));
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/prodCat1.jpg")}
        resizeMode="contain"
      />
      <View style={styles.containerText}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.price}>Unit Price: ${item.price}</Text>
        <Text style={styles.price}>Total: ${item.totalPrice.toFixed(2)}</Text>

        <View style={styles.counterContainer}>
          <Counter quantity={quantity} setQuantity={handleQuantityChange} />
          <Pressable onPress={handleRemoveItem} style={styles.icon}>
            <FontAwesome name="trash" size={24} color="black" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
    container: {
        width: 350,
        marginVertical: 10,
        padding: 15,
        flexDirection: "row",
        borderRadius: 8,
        backgroundColor: colors.grayNatural,
        gap: 10,
    },
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    image: {
        width: 100,
        height: 100,
    },
    containerText: {
        marginLeft: 8,
        display: 'flex',
        flexDirection: 'column',
        gap: 7
    },
    title: {
        color: colors.black,
        fontSize: 18,
        marginBottom: 6,
    },
    quantity: {
        color: colors.black,
        fontSize: 14,
    },
    price: {
        color: colors.black,
        fontSize: 15,
        fontFamily: "Barlow-SemiBold"
    },
    counterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 25,
    },
    counterButton: {
        backgroundColor: colors.green200,
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 8,
    },
    counterButtonText: {
        color: colors.white,
        fontSize: 16,
        fontFamily: "Poppins-Bold",
    },
    counter: {
        display: 'flex',
        flexDirection: 'row',
    },
    counterText: {
        fontSize: 18,
        marginHorizontal: 10,
        fontFamily: "Poppins-Regular",
    },
    icon: {
        display: "flex",
        alignSelf: 'flex-end',
    },
});
