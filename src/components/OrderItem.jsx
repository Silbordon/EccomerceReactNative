import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { colors } from '../global/colors';

const OrderItem = ({ item, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.containerText}>
        <Text style={styles.date}>{new Date(item.createdAt).toLocaleString()}</Text>
        <Text style={styles.total}>Total: ${item.total.toFixed(2)}</Text>
      </View>
      <AntDesign name="infocirlceo" size={25} color={colors.green900} />
    </Pressable>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    borderColor: colors.green200,
    borderWidth: 2,
    width: '90%',
    marginHorizontal: '5%',
    marginTop: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  },
  containerText: {
    flex: 1,
    marginRight: 10,
  },
  date: {
    fontSize: 16,
    color: colors.green900,
    marginBottom: 5
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.green900,
  },
});
