import { StyleSheet, Text, View, FlatList, ScrollView, Pressable } from 'react-native'
import CartItem from '../components/CartItem'
import { colors } from '../global/colors'
import { useSelector } from 'react-redux'

const Cart = () => {

    const cart = useSelector(state => state.cart)

    return (
        <View style={styles.container}>
            <ScrollView >
                {cart.items.length === 0 ? (
                    <Text style={styles.emptyCartText}>No items in the cart</Text>
                ) : (
                    <>
                        <FlatList
                            data={cart.items}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => <CartItem item={item} />}
                        />
                        <View style={styles.containerConfirmCheckout}>
                            <Text style={styles.titleConfirm}>Cart totals</Text>
                            <Text style={styles.textConfirm}>Total: <Text style={{fontWeight: 'bold'}}>${cart.total}</Text></Text>
                            <Pressable 
                                onPress={() => console.log('cart')} 
                                style={({ pressed }) => [
                                    styles.addButton,
                                    {
                                        backgroundColor: colors.green900,
                                        opacity: pressed ? 0.7 : 1,
                                    },
                                ]}>
                                <Text style={styles.addButtonText}>Confirm</Text>
                            </Pressable>
                        </View>
                    </>
                )}
            </ScrollView>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: 'center',
        flex: 1,
        padding: 15
    },
    emptyCartText: {
        fontSize: 20,
        color: colors.black,
        textAlign: 'center',
        marginTop: 20,
        fontFamily: "Poppins-Bold",
    },
    containerConfirmCheckout: {
        marginTop: 40,
        flexDirection: "column",
        justifyContent: "space-between"
    },
    titleConfirm: {
        color: colors.white,
        fontSize: 20,
        fontFamily: "Poppins-Bold",
        backgroundColor: colors.black,
        padding: 10
    },
    textConfirm: {
        color: colors.black,
        backgroundColor: colors.grayNatural,
        fontSize: 18,
        fontFamily: "Poppins-Regular",
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    addButton: {
        backgroundColor: colors.green900,
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    addButtonText: {
        color: colors.white,
        fontSize: 16,
        fontFamily: "Poppins-Bold",
        textAlign: 'center',
    },
})
