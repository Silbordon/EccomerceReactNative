import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../global/colors'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

const Search = ({ onSearch }) => {
    const [input, setInput] = useState("")
    const [error, setError] = useState("")

    const handleInputChange = (e) => {
        const regex = /[^a-zA-Z0-9 ]/
        if (regex.test(e)) {
            setError("No valid")
        } else {
            setError("")
            setInput(e)
            onSearch(e)
        }
    }

    const handleRemoveInput = () => {
        setInput("")
        onSearch("")
        setError("")
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerInput}>
                <TextInput
                    style={styles.input}
                    placeholderTextColor="black"
                    placeholder='Search what you need'
                    value={input}
                    onChangeText={handleInputChange}
                />
                <Pressable onPress={handleRemoveInput}>
                    <MaterialIcons name="cancel" size={20} color="black" />
                </Pressable>
            </View>
            <Text style={styles.error}>{error}</Text>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginTop: 20
    },
    containerInput: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    input: {
        backgroundColor: colors.gray100,
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 8,
        width: "90%",
        color: colors.black
    },
    error: {
        color: "red",
        fontWeight: "bold",
        marginLeft: 20
    }
})
