import { StyleSheet, Text, View, FlatList } from 'react-native';
import CartItem from '../components/CartItem';
import { colors } from '../global/colors';
import { useSelector } from 'react-redux';
import { usePostOrderMutation } from '../services/orders';
import { useDispatch } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';
import { useNavigation } from '@react-navigation/native';
import ButtonPrimary from '../components/ButtonPrimary';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const localId = useSelector(state => state.auth.localId);
  const [triggerPostOrder] = usePostOrderMutation();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleAddOrder = () => {
    const createdAt = new Date().toLocaleString();
    const order = {
      ...cart,
      createdAt,
    };
    triggerPostOrder({ localId, order });
    dispatch(clearCart());
    navigation.navigate("OrderStackNavigator");
  };

  return (
    <View style={styles.container}>
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
            <View style={styles.containerText}>
              <Text style={styles.titleConfirm}>Cart totals</Text>
              <Text style={styles.textConfirm}>
                Total: <Text style={{ fontWeight: 'bold' }}>${cart.total.toFixed(2)}</Text>
              </Text>
            </View>
            <ButtonPrimary title={"Confirm"} onPress={handleAddOrder} />
          </View>
        </>
      )}
    </View>
  );
};

export default Cart;

 const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: 'center',
        flex: 1,
        padding: 15,
    },
    emptyCartText: {
        fontSize: 20,
        color: colors.black,
        textAlign: 'center',
        marginTop: 20,
        fontFamily: "Poppins-Bold",
    },
    containerConfirmCheckout: {
        marginBottom: 30,
        flexDirection: "column",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center"
    },
    containerText: {
        width: 330,
    },
    titleConfirm: {
        color: colors.white,
        fontSize: 20,
        fontFamily: "Poppins-Bold",
        backgroundColor: colors.black,
        padding: 10,
        width: "100%"
    },
    textConfirm: {
        color: colors.black,
        backgroundColor: colors.grayNatural,
        fontSize: 18,
        fontFamily: "Poppins-Regular",
        paddingVertical: 20,
        paddingHorizontal: 10,
        width: "100%"
    },
})
