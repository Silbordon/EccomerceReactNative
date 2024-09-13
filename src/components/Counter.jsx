import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { colors } from '../global/colors';

const Counter = ({ quantity, setQuantity }) => {
    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    return (
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
    );
};

export default Counter;

const styles = StyleSheet.create({
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
});
