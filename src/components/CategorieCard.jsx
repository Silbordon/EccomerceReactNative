import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { images } from '../assets';

const CategorieCard = ({ backgroundColor, text, image }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={images[image]} 
        resizeMode="contain"
      />
      <Pressable
        onPress={() => console.log("Shop Now")}
        style={({ pressed }) => [
          styles.btn,
          {
            backgroundColor: backgroundColor,
            opacity: pressed ? 0.9 : 1,
          },
        ]}
      >
        <Text style={styles.buttonText}>Shop {text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 250,
    height: 220,
  },
  btn: {
    position: 'absolute',
    bottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18, 
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
  },
});

export default CategorieCard;
