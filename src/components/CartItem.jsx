import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { colors } from '../global/colors'
import React, { useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const CartItem = ({ item }) => {
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
        <View style={styles.container}>

            <Image
                style={styles.image}
                source={require("../../assets/images/prodCat1.jpg")}
                resizeMode="contain"
            />
            <View style={styles.containerText}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.quantity}>X{item.quantity}</Text>
                <Text style={styles.price}>{item.price} $</Text>
                <View style={styles.counterContainer}>
                    <View style={styles.counter}>
                        <Pressable onPress={decreaseQuantity} style={styles.counterButton}>
                            <Text style={styles.counterButtonText}>-</Text>
                        </Pressable>
                        <Text style={styles.counterText}>{quantity}</Text>
                        <Pressable onPress={increaseQuantity} style={styles.counterButton}>
                            <Text style={styles.counterButtonText}>+</Text>
                        </Pressable>
                    </View>
                    <View style={styles.icon}>
                        <FontAwesome name="trash" size={24} color="black" />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CartItem

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
        height: 100
    },
    containerText: {
        marginLeft: 8,
        display: 'flex',
        flexDirection: 'colum',
    },
    title: {
        color: colors.black,
        fontSize: 18,
        marginBottom: 6
    },
    quantity: {
        color: colors.black,
        fontSize: 15
    },
    price: {
        color: colors.black,
        fontSize: 15,
        fontWeight: "bold",
        marginBottom: 15
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
        alignSelf: 'flex-end'
    }
})