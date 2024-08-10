import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';

const HorizontalCarouselHome = ({title, renderItem, data}) => {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>  
    <FlatList
      data={data}
      renderItem={({ item }) => renderItem(item)}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 10 }}
    />
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  title: {
    marginHorizontal: 25,
    marginBottom: 10,
    fontFamily: "Poppins-Bold",
    fontSize: 20,
  },
});

export default HorizontalCarouselHome;
