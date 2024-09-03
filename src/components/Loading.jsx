import React from 'react';
import { View, ActivityIndicator, StyleSheet, Modal } from 'react-native';
import { colors } from '../global/colors';

const Loading = () => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={true}
      onRequestClose={() => { }}
    >
      <View style={styles.container}>
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={colors.green900} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  loader: {
    padding: 20,
    backgroundColor: colors.white,
    borderRadius: 10,
  }
});

export default Loading;
