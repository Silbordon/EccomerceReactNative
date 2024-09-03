import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react';
import { colors } from '../global/colors';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../features/counter/counterSlice';

const Counter = () => {
   
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <View style={styles.counterContainer}>
            <Pressable
                onPress={()=>dispatch(decrement())}
                style={({ pressed }) => [
                    styles.counterButton,
                    {
                        backgroundColor: colors.green200,
                        opacity: pressed ? 0.7 : 1,
                    },
                ]}>
                <Text style={styles.counterButtonText}>-</Text>
            </Pressable>
            <Text style={styles.counterText}>{count}</Text>
            <Pressable
                onPress={()=>dispatch(increment())}
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
    )
}

export default Counter

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
})