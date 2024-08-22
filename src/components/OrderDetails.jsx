import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { colors } from '../global/colors';

const OrderDetails = ({ order }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Details</Text>
      <FlatList
        data={order.items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image 
                source={require("../../assets/images/prodCat1.jpg")}
                resizeMode="contain"
                style={styles.image} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>${item.price.toFixed(2)} x {item.quantity}</Text>
            </View>
          </View>
        )}
      />
      <Text style={styles.total}>Total: ${order.total.toFixed(2)}</Text>
    </View>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    color: colors.green900,
  },
  total: {
    fontSize: 18,
    fontFamily: 'Barlow-Regular',
    marginTop: 10,
    textAlign: 'center',
  },
});
