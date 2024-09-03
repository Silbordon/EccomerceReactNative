import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { images } from '../assets';
import { colors } from '../global/colors';

const CategorieCard = ({ backgroundColor, text, image }) => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={images[image]} 
        resizeMode="contain"
      />
      <Pressable
        onPress={() => navigation.navigate("ListCategory", {category : image})}
        style={({ pressed }) => [
          styles.btn,
          {
            backgroundColor: backgroundColor,
            opacity: pressed ? 0.7 : 1,
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
    marginRight: 10,
  },
  image: {
    width: 220,
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
    color: colors.white,
    textAlign: 'center',
  },
});

export default CategorieCard;
