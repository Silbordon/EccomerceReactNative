import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Modal, Text, Pressable } from 'react-native';
import orders from '../data/orders.json';
import OrderItem from '../components/OrderItem';
import OrderDetails from '../components/OrderDetails'; 
import { colors } from '../global/colors';

const Orders = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handlePress = (order) => {
    setSelectedOrder(order);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <OrderItem item={item} onPress={() => handlePress(item)} />}
      />
      <Modal
        visible={!!selectedOrder}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedOrder && <OrderDetails order={selectedOrder} />}
            <Pressable 
                style={({ pressed }) => [
                    styles.closeButton,
                    {
                      backgroundColor: colors.green700,
                      opacity: pressed ? 0.7 : 1,
                    },
                  ]}
                onPress={handleCloseModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingVertical: 15
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: colors.white,
    fontWeight: 'bold',
  },
});